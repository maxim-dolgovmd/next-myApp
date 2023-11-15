'use client'

import { signIn, useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'

const Block = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
`

const Box = styled.div`
    background-color: #53c28b;
    color: white;
    padding: 5px;
    border-radius: 10px;
`

const Form = styled.form`
    width: 300px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const Input = styled.input`
    padding: 20px;
    background-color: transparent;
    color: #bbb;
    border: 2px solid #bbb;
    border-radius: 5px;
    font-size: 20px;
    font-weight: bold;
    width: 100%;
`

const Button = styled.button`
    width: 300px;
    padding: 20px;
    cursor: pointer;
    background-color: #53c28b;
    border: none;
    border-radius: 5px;
    color: #eee;
    font-weight: bold;
`

const ErrorValue = styled.div`
    color: red;
`

type Inputs = {
    email: string
    password: string
}

const Login = () => {

    const session = useSession()
    const router = useRouter()
    const [errorsData, setErrorsData] = useState(null)

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<Inputs>()

    if (session.status === 'loading') {
        return <div>Loading...</div>
    }

    if (session.status === 'authenticated') {
        router.push('/dashboard')
    }

    const onSubmit = (data: Inputs) => {
        console.log(data)
        signIn('credentials', data)
    }

    console.log(session)

    return (
        <Block>
            <Form onSubmit={handleSubmit(onSubmit)}>

                <div>
                    <Input
                        type='email'
                        placeholder='Email'
                        {...register('email', {
                            required: 'Введите email'
                        })}
                    />
                    {errors?.email?.message && (
                        <ErrorValue>{errors.email.message}</ErrorValue>
                    )}
                </div>

                <div>
                    <Input
                        type='password'
                        placeholder='Password'
                        {...register('password', {
                            required: 'Введите пароль',
                            minLength: {
                                value: 8,
                                message: 'Пароль должен быть минимуму 8 символов'
                            }
                        })}
                    />
                    {errors?.password?.message && (
                        <ErrorValue>{errors.password.message}</ErrorValue>
                    )}
                </div>

                <Button type='submit'>Login</Button>
                {errorsData && (
                    <div>Something went wrong!</div>
                )}
            </Form>
            {/* <Box> */}
                <button onClick={() => signIn('google')}>Login with google</button>
            {/* </Box> */}
        </Block>
    )
}

export default Login
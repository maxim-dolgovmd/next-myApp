'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'

const Box = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;
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

const Title = styled.h1`
    font-size: 24px;
    font-weight: 600;
`

const SubTitle = styled.h2`
    font-size: 18px;
    font-weight: 400;
`

const ErrorValue = styled.div`
    color: red;
`

type Inputs = {
    userName: string
    email: string
    password: string
}

const Register = () => {

    const router = useRouter()
    const [errorsData, setErrorsData] = useState(null)
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm<Inputs>()

    const onSubmit = async (data: Inputs) => {
        console.log(data)

        const {password, userName, email} = data

        console.log(password)

        try {
            const res = await fetch("/api/auth/register", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    password,
                    userName,
                    email
                }),
              });
    
            res.status === 201 && router.push("/dashboard/login?success=Account has been created")
            
        } catch (error: any) {
            setErrorsData(error)
            console.log(errorsData)
        }

        reset()
    }

  return (
    <Box>
        <Title>Create an Account</Title>
        <SubTitle>Please sign up to see the dashboard.</SubTitle>
        <Form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <Input 
                    type='text'
                    placeholder='Username'
                    {...register('userName', {
                        required: 'Введите свое имя'
                    })}
                />
                {errors?.userName?.message && (
                    <ErrorValue>{errors.userName.message}</ErrorValue>
                )}
            </div>

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

            <Button type='submit'>Register</Button>
            {errorsData && (
                <div>Something went wrong!</div>
            )}
        </Form>
        <span>- OR</span>
        <Link href='/dashboard/login'>Login with an existing account</Link>
    </Box>
  )
}

export default Register
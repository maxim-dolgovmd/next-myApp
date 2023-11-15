'use client'

import React from 'react'
import useSWR from 'swr'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'
import styled from 'styled-components'
import Image from 'next/image'
import { useForm } from 'react-hook-form'

const Container = styled.div`
  display: flex;
  gap: 100px;
`

const Posts = styled.div`
  flex: 1;
`

const Post = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0px;
`

const ImageContainer = styled.div`
  width: 200px;
  height: 100px;
  position: relative;
`

const NextImage = styled(Image)`
  object-fit: cover;
`

const PostTitle = styled.h2`
  font-size: 18px;
  line-height: 18px;
  font-weight: 400;
  
`

const Delete = styled.span`
  cursor: pointer;
  color: red;
`

const NewForm = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const Input = styled.input`
  padding: 10px;
  background-color: transparent;
  border: 2px solid #bbb;
  border-radius: 3px;
  color: #bbb;
  font-size: 20px;
  font-weight: bold;
  width: 100%;
`

const TextArea = styled.textarea`
  padding: 10px;
  background-color: transparent;
  border: 2px solid #bbb;
  border-radius: 3px;
  color: #bbb;
  font-size: 20px;
  font-weight: bold;
  width: 100%;
`

const Button = styled.button`
  padding: 20px;
  cursor: pointer;
  background-color: #53c28b;
  border: none;
  border-radius: 5px;
  color: #eee;
  font-weight: bold;
`

const AddTitle = styled.h1`
  font-size: 24px;
  line-height: 24px;
  font-weight: bold;
`

const ErrorsValidation = styled.div`
  color: red;
`

type Inputs = {
  title: string
  desc: string
  image: string
  textarea: string
}

const Dashboard: React.FC = () => {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>()

  const session = useSession()
  const router = useRouter()
  const fetcher = (...args: any) => fetch(args).then(res => res.json())
  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user?.name}`, fetcher
  )

  console.log(data)
  // if (error) return <div>Errors</div>
  // if (isLoading) return <div>Loading...</div>

  if (session.status === 'unauthenticated') {
    router.push('/dashboard/login')
  }

  const onSumbit = async (data: Inputs) => {
    console.log(data)

    const {title, desc, image, textarea} = data
    try {
      
      await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({
          title,
          desc,
          image,
          textarea,
          username: session?.data?.user?.name
        })
      })
      mutate()
      reset()

    } catch (error) {
      console.log(error)
    }
  }

  const handleDelete = async (id: string) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: 'DELETE'
      })
      mutate()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <Posts>
        {isLoading ? 'Loading' : data.map(({ _id, title, img }: any) => {
          return (
            <Post key={_id}>
              <ImageContainer>
                <NextImage
                  src={img}
                  alt={title}
                  width={200}
                  height={100}
                />
              </ImageContainer>
              <PostTitle>{title}</PostTitle>
              <Delete onClick={() => handleDelete(_id)}>delete</Delete>
            </Post>
          )
        })}
      </Posts>

      <NewForm onSubmit={handleSubmit(onSumbit)}>
        <AddTitle>Add New Post</AddTitle>
        <div>
          <Input
            placeholder='Title'
            {...register('title', {
              required: 'Введите title'
            })}
            type='text'
          />
          {errors.title?.message && (
            <ErrorsValidation>{errors.title.message}</ErrorsValidation>
          )}
        </div>
        <div>
          <Input
            placeholder='Desc'
            {...register('desc', {
              required: 'Введите desc'
            })}
            type='text'
          />
          {errors.desc?.message && (
            <ErrorsValidation>{errors.desc.message}</ErrorsValidation>
          )}
        </div>
        <div>
          <Input
            placeholder='Image'
            {...register('image', {
              required: 'Введите image'
            })}
            type='text'
          />
          {errors.image?.message && (
            <ErrorsValidation>{errors.image.message}</ErrorsValidation>
          )}
        </div>
        <div>
          <TextArea
            placeholder='Text'
            {...register('textarea', {
              required: 'Введите текст',
              minLength: {
                value: 10,
                message: 'Минимум 10 символов'
              }
            })}
            rows={10}
            cols={30}
          />
          {errors.textarea?.message && (
            <ErrorsValidation>{errors.textarea.message}</ErrorsValidation>
          )}
        </div>
        <Button type='submit'>Send</Button>
      </NewForm>
    </Container>
  )
}

export default Dashboard
'use client'

import { Metadata } from 'next'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

const Top = styled.div`
  display: flex;
  gap: 16px;
`

const Info = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Content = styled.div`
  margin-top: 50px;
  font-size: 20px;
  font-weight: 300;
  color: #999;
  text-align: justify;
`

const Text = styled.p`
  
`

const Title = styled.h1`
  margin-bottom: 10px;
  font-size: 40px;
  font-weight: bold;
`

const Desc = styled.p`
  font-size: 18px;
  color: #999;
  font-weight: 300;
`

const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const NextImage = styled(Image)`
  object-fit: cover;
  border-radius: 50%;
`

const SpanUsername = styled.span`
  
`

const ImageContainer = styled.div`
  flex: 1;
  height: 300px;
  position: relative;
`

const DataImage = styled(Image)`
  object-fit: cover;
`

type Props = {
  params: { id: string }
}


async function getData(id: string) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, { cache: 'no-store' })

  if (!res) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}


const DinamicBlog = async ({params}: Props) => {

  const data = await getData(params.id)

  console.log(data)

  return (
    <div>
      <Top>
        <Info>
          <Title>{data.title}</Title>
          <Desc>{data.desc}</Desc>
          <Author>
            <NextImage 
              src={data.img}
              alt="image"
              width={40}
              height={40}
            />
            <SpanUsername>{data.username}</SpanUsername>
          </Author>
        </Info>
        <ImageContainer>
          <DataImage 
            src={data.img}
            alt=''
            fill={true}
          />
        </ImageContainer>
      </Top>
      <Content>
        <Text>{data.content}</Text>
      </Content>
    </div>
  )
}

export default DinamicBlog
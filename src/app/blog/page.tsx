'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  margin-bottom: 50px;
`

const NextLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 50px;
`

const ImageContainer = styled.div`
  
`

const NextImage = styled(Image)`
  object-fit: cover;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`

const Title = styled.h1`
  margin-bottom: 10px;
  font-size: 28px;
  font-weight: bold;
`

const Desc = styled.p`
  font-size: 18px;
  color: #999;
`

const GridBox = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
`

interface DataType {
  _id: string,
  title: string,
  desc: string,
  content: string,
  username: string,
  img: string,
}

async function getData() {
  // const res = await fetch('http://localhost:3000/api/posts', { cache: 'no-store' })
  const res = await fetch('http://localhost:3000/api/posts')
  if (!res) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const Blog: React.FC = async () => {

  const data = await getData()
  console.log(data)

  return (
    <MainContainer>
      <GridBox>
        {
          data.map((obj: DataType) => {
            return (
              <NextLink
                href={`/blog/${obj._id}`}
                key={obj._id}
              >
                <ImageContainer>
                  <NextImage
                    src={obj.img}
                    alt="image"
                    width={400}
                    height={250}
                  />
                </ImageContainer>
                <Content>
                  <Title>{obj.title}</Title>
                  <Desc>{obj.desc}</Desc>
                </Content>
              </NextLink>
            )
          })
        }
      </GridBox>
    </MainContainer>
  )
}

export default Blog
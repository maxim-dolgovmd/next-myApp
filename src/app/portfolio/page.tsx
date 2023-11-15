'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

const SelectTitle = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 28px;
  margin: 20px 0px;
  font-weight: 400;
`

const Items = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 50px;
`

const Item = styled(Link)`
  border: 5px solid #bbb;
  border-radius: 5px;
  width: 300px;
  height: 400px;
  position: relative;
  background-size: cover !important;
  cursor: pointer;

`

const NextImage = styled(Image)`
  object-fit: cover;
`

const Title = styled.span`
  position: absolute;
  right: 10px;
  bottom: 10px;
  font-size: 40px;
  font-weight: bold;
`

const Portfolio: React.FC = () => {
    
  return (
    <Box>
      <SelectTitle>Choose a gallery</SelectTitle>
      <Items>
        <Item href='/portfolio/illustrations'>
          <NextImage width={290} height={390} src='/illustration.png' alt='illustration'/>
          <Title>Illustrations</Title>
        </Item>
        <Item href='/portfolio/websites'>
          <NextImage width={290} height={390} src='/websites.jpg' alt='websites'/>
          <Title>Websites</Title>
        </Item>
        <Item href='/portfolio/applications'>
          <NextImage width={290} height={390} src='/apps.jpg' alt='apps'/>
          <Title>Application</Title>
        </Item>
      </Items>
    </Box>
  )
}

export default Portfolio
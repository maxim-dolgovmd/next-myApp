'use client'

import styled from 'styled-components'
import Image from 'next/image'
import React from 'react'
import Hero from '../../public/hero.png'
import Button from '@/components/button/button'

const Main = styled.main`
  display: flex;
  align-items: flex-start;
  gap: 100px;
`

const Item = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  /* flex-direction: column; */
  gap: 50px;
`

const ItemContent = styled(Item)`
  flex-direction: column;
  min-width: 500px;
`

const Title = styled.div`
  font-size: 72px;
  padding: 25px 0;
  line-height: 72px;
  background: linear-gradient(#194c33, #bbb);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const Desc = styled.p`
  font-size: 24px;
  font-weight: 300;
  line-height: 30px;
`

const NextImage = styled(Image)`
  width: 100%;
  height: 500px;
  object-fit: contain;
  animation: move 3s infinite ease alternate;
  @keyframes move {
    from {
      transform: translateY(-10px);
    }
    to {
      transform: translateY(10px);
    }
  }
`

const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`



const Home: React.FC = () => {
  return (
    <Main>
      <Item>
        <ItemContent>
          <Title>The Future of AI in the next few years</Title>
          <Desc>Turning your Idea into Reality. We bring together the teams from the global tech industry.</Desc>
          <ButtonBox>
            <Button text='See Our Works' url='/portfolio' />
          </ButtonBox>
        </ItemContent>
        <div>
          <Item>
            <NextImage src={Hero} alt='main photo'/>
          </Item>
        </div>
      </Item>
    </Main>
  )
}

export default Home

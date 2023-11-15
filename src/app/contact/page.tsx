'use client'

import Button from "@/components/button/button"
import Image from "next/image"
import React from "react"
import styled from "styled-components"

// export const metadata = {
//   title: "Contact",
//   description: "This is description",
// }

const Title = styled.h1`
  font-size: 60px;
  margin-bottom: 100px;
  text-align: center;
`

const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 100px;
`

const ImageContainer = styled.div`
  flex: 1;
  height: 500px;
  position: relative;
`

const NextImage = styled(Image)`
  object-fit: contain;
  animation: move 3s infinite ease alternate;

  @keyframes move {
  from {
    transform: translateY(-15px);
  }
  to {
    transform: translateY(0px) scale(1.03);
  }
}
`

const Form = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const TextArea = styled.textarea`
  padding: 20px;
  background-color: transparent;
  outline: none;
  color: #bbb;
  border: 3px solid #bbb;
  font-size: 20px;
  font-weight: bold;
`

const Input = styled.input`
  padding: 20px 16px;
  border: solid 3px #bbb;
  background-color: transparent;
  color: #bbb;
  font-size: 18px;
  font-weight: bold;

`

const Contact: React.FC = () => {
  return (
    <div>
      <Title>Lets Keep in Touch</Title>
      <Content>
        <ImageContainer>
          <NextImage 
            src="/contact.png"
            alt="contacts"
            fill={true}
          />
        </ImageContainer>

        <Form>
          <Input type="text" placeholder="name"/>
          <Input type="text" placeholder="email"/>
          <TextArea 
            placeholder="message"
            cols={30}
            rows={10}
          />
          <Button url="#" text="Send"/>
        </Form>
      </Content>
    </div>
  )
}

export default Contact
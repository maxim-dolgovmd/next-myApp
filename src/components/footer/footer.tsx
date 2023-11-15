'use client'

import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import ContainerFooter from '../container/containerFooter'

const FooterBox = styled.footer`
  height: 50px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Social = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const NextImage = styled(Image)`
  opacity: 0.6;
  cursor: pointer;
`

const Footer = () => {
  return (
    // <ContainerFooter>
      <FooterBox>
        <div>2023 MyApp. All rights reserved</div>
        <Social>
          <NextImage src='/vk.png' width={25} height={25} alt='vk.com'/>
          <NextImage src='/inst.png' width={25} height={25} alt='instagram'/>
          <NextImage src='/twitter.png' width={25} height={25} alt='twitter'/>
          <NextImage src='/yt.png' width={25} height={25} alt='youtube'/>
        </Social>
      </FooterBox>
    // </ContainerFooter>
  )
}

export default Footer
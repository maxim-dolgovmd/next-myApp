'use client'

import { ModeContextType, ThemeContext } from '@/context/ThemeContext'
import React, { useContext } from 'react'
import styled, { css } from 'styled-components'

type ModeType = {
    $mode?: 'light' | 'dark' 
}

const Container = styled.div`
    width: 42px;
    height: 24px;
    border: 1.5px solid #53c28b70;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2px;
    position: relative;
    cursor: pointer;
`

const Icon = styled.div`
    font-size: 12px;
`

const Ball = styled.div`
    width: 15px;
    height: 15px;
    background-color: #53c28b;
    border-radius: 50%;
    position: absolute;
`

type ModeTypeD = {
    mode: 'dark' | 'light'
}

const lightModeToogle = () => {

    const {toggle, mode} = useContext(ThemeContext) as ModeContextType
    console.log(mode)

  return (
    <Container onClick={toggle}>
        <Icon>🌙</Icon>
        <Icon>🔆</Icon>
        <Ball style={mode === "light" ? {left: "2px"} : {right: "2px"}} />
    </Container>
  )
}

export default lightModeToogle
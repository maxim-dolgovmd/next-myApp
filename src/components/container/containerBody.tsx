'use client'

import React from "react"
import styled from "styled-components"

const ContainerBody = styled.div`
    max-width: 1366px;
    min-height: 100vh;
    margin: 0 auto;
    padding: 0 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: ${({ theme }) => theme.color};
    background-color: ${({ theme }) => theme.backgroundColor};
    
`

export default React.memo(ContainerBody)
'use client'

import React from "react"
import styled from "styled-components"

const ContainerContent = styled.div`
    max-width: 1300px;
    padding: 0 60px;
    box-sizing: content-box;
    margin: 0 auto;
    flex: 1 0 auto;
`

export default React.memo(ContainerContent)
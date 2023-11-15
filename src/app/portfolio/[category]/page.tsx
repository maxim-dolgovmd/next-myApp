'use client'

import Button from '@/components/button/button'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import { CategoryType, items } from './data'
import { notFound } from 'next/navigation'

const CatTitle = styled.h1`
    color: #53c28b;
    font-size: 28px;
    font-weight: 600;
`

const Item = styled.div`
    display: flex;
    gap: 50px;
    margin-top: 50px;
    margin-bottom: 100px;
`

const Items = styled.div`
    display: flex;
    flex-direction: column;

    :nth-child(2n+1) {
        flex-direction: row-reverse;
    }

    >div {
        align-items: center
    }
`

const Title = styled.h1`
    font-size: 50px;
    line-height: 50px;
`

const Desc = styled.p`
    font-size: 20px;
`

const ImageContainer = styled.div`
    flex:1;
    height: 500px;
    position: relative;
`

const NextImage = styled(Image)`
    object-fit: cover;
`

const Content = styled.div`
    flex:1;
    display: block;
    
    >* {
        padding-bottom: 24px;
    }
`


const getData = async (cat: string) => {
    const data = items[cat]

    if (!data) {
        return notFound()
    }
    
    return data
}

const Category = async ({ params }: any) => {

    const data = await getData(params.category)

    console.log(data)

    return (
        <div>
            <CatTitle>{params?.category}</CatTitle>
            <Items>
                {
                    data.map(({title, desc, image, id}: CategoryType) => {
                        return (
                            <Item key={id}>
                                <Content>
                                    <Title>{title}</Title>
                                    <Desc>{desc}</Desc>
                                    <Button text='See More' url='#' />
                                </Content>
                                <ImageContainer>
                                    <NextImage
                                        fill={true}
                                        src={image}
                                        alt='image'
                                    />
                                </ImageContainer>
                            </Item>
                        )
                    })
                }
            </Items>
        </div>
    )
}

export default Category
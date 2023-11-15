'use client';

import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Button from "@/components/button/button";

const ImgContainer = styled.div`
    width: 100%;
    height: 300px;
    position: relative;
`

const NextImage = styled(Image)`
    object-fit: cover;
    filter: grayscale(100%);
`

const ImageText = styled.div`
    position: absolute;
    bottom: 20px;
    left: 20px;
    background-color: #53c28b;
    padding: 5px;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 12px;
`

const ImageTitleOne = styled.h1`
    font-size: 28px;
    font-weight: 600;
`

const ImageTitleTwo = styled.h2`
    font-size: 22px;
    font-weight: 600;
`

const TextContainer = styled.div`
    display: flex;
    gap: 100px;
`

const Item = styled.div`
    flex: 1;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    gap: 30px;
`

const Title = styled.div`
    font-size: 28px;
    font-weight: 600;
`

const Desc = styled.p`
    font-size: 18px;
    font-weight: 300;
    text-align: justify;
    line-height: 26px;
`

const About:React.FC = () => {

    return (
        <div>
            <ImgContainer>
                <NextImage
                    src="https://img.freepik.com/free-photo/paper-people-chain-on-green-grass-unity-concept_632805-35.jpg?w=1380&t=st=1685890833~exp=1685891433~hmac=46f15c2161ca525e238313ec9dc0812864411c64035b664d7abecd75e33494e1"
                    fill={true}
                    alt="about us"
                />
                <ImageText>
                    <ImageTitleOne>Lorem ipsum dolor sit</ImageTitleOne>
                    <ImageTitleTwo>Lorem ipsum dolor sit amet consectetur adipisicing elit.</ImageTitleTwo>
                </ImageText>
            </ImgContainer>

            <TextContainer>
                <Item>
                    <Title>Who Are We?</Title>
                    <Desc>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                        quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
                        suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
                        eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
                        beatae, a suscipit eos. Animi quibusdam cum omnis officiis
                        <br />
                        <br />
                        voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
                        esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
                        officiis voluptatum quo ea eveniet?
                    </Desc>
                </Item>

                <Item>
                    <Title>What We Do?</Title>
                    <Desc>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                        quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
                        suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
                        eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
                        Creative Illustrations
                        <br />
                        <br /> - Dynamic Websites
                        <br />
                        <br /> - Fast and Handy
                        <br />
                        <br /> - Mobile Apps
                    </Desc>
                    <Button text="Contact" url="/contact"/>
                </Item>
            </TextContainer>
        </div>
    )
}

export default About
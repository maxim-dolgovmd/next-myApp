'use client'

import React from 'react'
import Link from 'next/link'
import styled from "styled-components";
import LightModeToogle from '../lightModeToogle/lightModeToogle';
import { useSession, signOut } from 'next-auth/react'

const BoxLink = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`

const NavBlock = styled.nav`
    height: 100px;
    align-items: center;
    display: flex;
    justify-content: space-between;
`

const ImageLink = styled(Link)`
    font-weight: bold;
    font-size: 22px;
`

const Button = styled.button`
    padding: 5px;
    border: none;
    background-color: #53c28b;
    color: white;
    cursor: pointer;
    border-radius: 3px;
`

const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "Portfolio",
      url: "/portfolio",
    },
    {
      id: 3,
      title: "Blog",
      url: "/blog",
    },
    {
      id: 4,
      title: "About",
      url: "/about",
    },
    {
      id: 5,
      title: "Contact",
      url: "/contact",
    },
    {
      id: 6,
      title: "Dashboard",
      url: "/dashboard",
    },
  ];

const Navbar = () => {

  const session = useSession()
  console.log(session)

  return (
    <header>
        {/* <ContainerHeader> */}
            <NavBlock>
                <ImageLink href='/'>MyApp</ImageLink>
                <BoxLink>
                    <LightModeToogle/>
                    {
                        links.map((obj) => {
                            return (
                                <Link href={obj.url} key={obj.id}>
                                    <div>{obj.title}</div>
                                </Link>
                            )
                        })
                    }
                    {
                      session.status === "authenticated" && (
                        <Button onClick={() => signOut()}>Logout</Button>
                      )
                    }
                </BoxLink>
            </NavBlock>
        {/* </ContainerHeader> */}
    </header>

  )
}

export default Navbar
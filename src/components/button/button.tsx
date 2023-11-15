import Link from "next/link";
import styled from "styled-components";

type Props = {
    text: string
    url: string
}

const ButtonStyle = styled.button`
    padding: 20px;
    cursor: pointer;
    background-color: #53c28b;
    border: none;
    border-radius: 5px;
    width: max-content;
    color: white;
`

const Button = ({text, url}: Props) => {
  return (
    <Link href={url}>
        <ButtonStyle>{text}</ButtonStyle>
    </Link>
  )
}

export default Button
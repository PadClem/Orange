import React from 'react'
import styled from "styled-components";

const Container = styled.div `
    margin-top: 45px;
`
const Wrapper = styled.div `
    height: auto;
    width: auto;
    background: #FF8533;
`
const ImgContainer = styled.div ``
const Image = styled.img `
    height: 40%;
    width: 40%;
    display: flex;
    padding: 10px -20px;
`
const InfoCon = styled.div ``
const Title = styled.h1 `
    display: flex;
    overflow: hidden;
    font-size: 70px;
    font-weight: bold;
    font-family: sans-serif;
    margin-bottom: 1px;
    color: #FFFFFF;
`
const Desc = styled.div `
    display: flex;
    font-size: 15px;
    font-family: sans-serif;
    margin-bottom: 2px;
    color: #FFFFFF;
`
const Price = styled.div `
    display: flex;
    font-size: 15px;
    font-family: sans-serif;
    font-weight: bold;
    margin-bottom: 10px;
    color: #FFFFFF;
`
const Button = styled.button `
    margin-bottom: 20px;
    border: none;
    outline: none;
    height: 40px;
    background: #FFFFFF;
    color: #FF8533;
    font-size: 20px;
    border-radius: 20px;
    font-weight: bold;
    cursor: pointer;
`

export const Milktea = () => {
    return ( <
        Container >
        <
        Wrapper >
        <
        ImgContainer >
        <
        Image src = "images/image-1.png" / >
        <
        /ImgContainer> <
        InfoCon >
        <
        Title > Milktea < /Title> <
        Desc > Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. < /Desc> <
            Price > PHP 129.00 < /Price> <
            /InfoCon> <
            Button > BUY NOW < /Button> <
            /Wrapper> <
            /Container>
    )
}
export default Milktea
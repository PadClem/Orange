import React from 'react'
import styled from 'styled-components';
import { FacebookRounded, Instagram, Send, Twitter } from '@mui/icons-material';

const Container = styled.div `
    height: auto;
    background-color: #FF8533;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Title = styled.h1 `
    font-size: 70px;
    font-weight:bold;
    color: #FFFFFF;
    margin-bottom: 20px;
`
const Description = styled.div `
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    color: #FFFFFF;
`
const InputContainer = styled.div `
    width: 50%
    height: 40px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
`
const Input = styled.input `
    border: none;
    flex: 8;
    padding-left: 20px;
`
const Button = styled.button `
    flex: 1;
    border: none;
    background-color: #FF8533;
    color: white;
    cursor: pointer;
`
const SocialIcon = styled.button `
    flex: 1;
    border: none;
    background-color: #FF8533;
    color: white;
    cursor: pointer;
    overflow: hidden;
    icon-decoration: none;
    justify-content: center;
    display: flex;
    margin-right: 20px;
    margin-bottom: 20px;
`

export const Contactus = () => {
    return ( <
        Container >
        <
        Title > Contact Us < /Title> <
        Description > Get timely updates from your favorite products < /Description> <
        InputContainer >
        <
        Input placeholder = "Your email" / >
        <
        Button >
        <
        Send / >
        <
        /Button> <
        /InputContainer> <
        SocialIcon >
        <
        a href = "https://web.facebook.com/orangeleafsantarosa" > < FacebookRounded / > < /a> <
        Instagram / >
        <
        Twitter / >
        <
        /SocialIcon> <
        /Container>
    )
}
export default Contactus
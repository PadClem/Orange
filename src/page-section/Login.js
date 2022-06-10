import React from 'react'
import styled from 'styled-components'

const Container = styled.div `
    width: 100vw;
    height: 100vh;
    display: flex;
    background: url(images/Milktea.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`
const Wrapper = styled.div `
    width: auto;
    height: auto;
    background: #FF8533;
    color:#FFFFFF;
    top: 50%;
    left:50%;
    position: absolute;
    transform: translate(-50%, -50%);
    box-sizing: border-box;
    padding: 5px 30px;
    display: flex;
    flex-direction: column;
`
const Title = styled.h1 `
    justify-content: center;
    color: #FFFFFF;
    font-size: 40px;
    font-weight: bold;
    font-family: sans-serif;
    margin-bottom: 10px;
    display: flex;
`
const Form = styled.div `
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    font-family: sans-serif;
    font-size: 15px;
    
`
const Input = styled.input `
    flex:1;
    width: 95%;
    padding: 10px;
    display: flex;
    font-family: sans-serif;
    margin-top: 10px;
    margin-bottom: 5px;
`
const Agreement = styled.span `
    margin-bottom: 10px;
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

export default function Login() {
    return ( <
        Container >
        <
        Wrapper >
        <
        Title > Log In < /Title> <
        Form >
        Username:
        <
        Input placeholder = "USERNAME" / >
        Email:
        <
        Input placeholder = "EMAIL" / >
        Password:
        <
        Input placeholder = "PASSWORD" / >
        <
        Agreement >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. < b > PRIVACY POLICY < /b> < /
            Agreement > <
            Button > Log In < /Button> < /
            Form > <
            /Wrapper> < /
            Container >
    )
}
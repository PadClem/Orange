import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import { Stack, Badge } from "@mui/material";
import styled from 'styled-components'
import Login from '../page-section/Login'

const Container = styled.div `
    height: 90px;
    background-color: #FF8533;
`
const Wrapper = styled.div `
    display: flex;
    justify-content: space-between;
`
const Logo = styled.div `
    height: 70px;
    padding: 5px 5px 0px;
`
const Left = styled.div `
    display: flex;
`
const Center = styled.div `
    flex: 1;
    font-weight: bold;
    font-size: 28px;
    color: #FFFFFF;
    padding: 30px 10px;
    display: flex;
`
const Right = styled.div `
    flex: 1;
    font-size: 13px;
    font-weight: bold;
    color: #FFFFFF;
    text-decoration: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 25px;
    justify-content: right;
`
export default function Navbar() {
    return ( <
        Container >
        <
        Wrapper >
        <
        Logo >
        <
        img src = "../images/OL.jpg"
        height = "80px"
        className = "navbar--logo"
        alt = "image1" / >
        <
        /Logo>

        <
        Left >
        <
        /Left>

        <
        Center >
        Orange Leaf <
        /Center>

        <
        Right >
        <
        a href = "#" > MENU < /a>  <
        a href = "#" > ABOUT US < /a>  <
        a href = "#" > CONTACT US < /a> <
        a href = "#" > LOGIN < /a>   <
        Stack spacing = { 2 }
        direction = 'row' >
        <
        Badge badgeContent = { 1 }
        color = 'primary' >
        <
        FontAwesomeIcon icon = { faShoppingCart }
        className = "cart" >
        <
        /FontAwesomeIcon>  < /
        Badge > <
        /Stack>  < /
        Right > <
        /Wrapper>  < /
        Container >
    )
}
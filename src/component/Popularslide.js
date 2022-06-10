import React, { useState } from 'react'
import styled from 'styled-components'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { popularProducts } from '../data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Container = styled.div `
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    flex-direction: column;
`
const Header = styled.h1 `
    font-size: 30px;
    font-weight: bold;
    display: flex;
    color: black;
`
const Arrow = styled.div `
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: white;
    color: black;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};
    margin: auto;
    opacity: .5;
    z-index: 2;
    cursor: pointer;
`
const Wrapper = styled.div `
    height: 100%;
    display: flex;
    transform: translateX(${props=> props.slideIndex * -100}vw);
    transition: all 1.5s ease;
`
const Slide = styled.div `
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #${props=> props.bg}
`
const ImageContainer = styled.div `
    flex: 1;
    height: 75%;
    display: flex;
`
const Image = styled.img `
    height: 75%
`
const Title = styled.h1 `
    font-size: 30px;
    font-weight: bold;
`
const Button = styled.button `
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`

export default function Popularslider() {
    const [slideIndex, setSlideIndex] = useState(0)
    const handleClick = (direction) => {

        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    }
    return ( <
        Container >
        <
        Header >
        <
        h1 > Best Selling Products < /h1> <
        /Header> <
        Arrow direction = "left"
        onClick = {
            () => handleClick("left") } >
        <
        FontAwesomeIcon icon = { faArrowLeft }
        className = "cart" > < /FontAwesomeIcon> <
        /Arrow>

        <
        Wrapper slideIndex = { slideIndex } > {
            popularProducts.map(item => ( <
                Slide bg = { item.bg } >
                <
                ImageContainer >
                <
                Image src = { item.img }
                /> <
                /ImageContainer> <
                Title > { item.title } <
                /Title> <
                Button >
                ORDER NOW <
                /Button> <
                /Slide>
            ))
        } <
        /Wrapper> <
        Arrow direction = "right"
        onClick = {
            () => handleClick("right") } >
        <
        FontAwesomeIcon icon = { faArrowRight }
        className = "cart" > < /FontAwesomeIcon> <
        /Arrow> <
        /Container>
    )
}
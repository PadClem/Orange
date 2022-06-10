import { Description } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components';

const Container = styled.div `
    height: auto;
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Title = styled.h1 `
    font-size: 50px;
    font-weight: bold;
    color: black;
    margin-bottom: 20px;
`
const Desc = styled.div `
    font-size: 24px;
    font-weight: 200;
    margin-bottom: 20px;
`

export const Aboutus = () => {
    return ( <
        Container >
        <
        Title > About Us < /Title> <
        Desc >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim
        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <
        /Desc> < /
        Container >
    )
}
export default Aboutus
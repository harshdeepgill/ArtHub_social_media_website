import { Button } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Hero = () => {
    const theme = useSelector((store) => store.authReducer.theme);

    return (
        <DIV theme={theme}>
            <div>
                <h1 style={{ color: `${theme}` === "dark" ? "white" : "black" }}>Edit and UPLOAD</h1>
                <p style={{ color: `${theme}` === "dark" ? "white" : "black" }}>Edit and download with our efficient picture editing tool</p>
                <Button size="lg" bgColor="#91d9a8" mt="2rem" _hover={{ bgColor: "#ff7f50" }}><Link style={{}} to={"/edit"}>Edit Photo</Link></Button>
            </div>
        </DIV>
    )
}

export default Hero

const DIV = styled.div`
    height: 25rem;
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme === "dark" ? "#15191E" : "#edf2f7"};

    &> div{
        &> h1{
        font-size: 3.4rem;
        text-transform: uppercase;
        letter-spacing: 3px;
    }
    
        &> p{
        letter-spacing: 1px;
        font-size: 1.1rem;
    }
}
`;
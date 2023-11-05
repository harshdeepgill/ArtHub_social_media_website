import { Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Hero = () => {
    const theme = localStorage.getItem("theme");

    return (
        <DIV>
            <div>
                <h1>Edit and UPLOAD</h1>
                <p>Edit and download with our efficient picture editing tool</p>
                <Button size="lg" bgColor="#91d9a8" mt="2rem" _hover={{ bgColor: "#ff7f50" }}><Link style={{}} to={"/edit"}>Edit Photo</Link></Button>
            </div>
        </DIV>
    )
}

export default Hero

const DIV = styled.div`
    height: 70vh;
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;

    &>div{
        

        &>h1{
            font-size: 3.4rem;
            text-transform: uppercase;
            letter-spacing: 3px;
        }
    
        &>p{
            letter-spacing: 1px;
            font-size: 1.1rem;
        }
    }

    
`
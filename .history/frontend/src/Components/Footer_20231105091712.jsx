import React from 'react'
import { Grid, GridItem, Heading, Text, VStack, HStack, Image, Spacer, Stack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { FaCopyright, FaTwitter, FaYoutube, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import styled from 'styled-components';

const Footer = () => {
  const

  return (
    <div style={{ backgroundColor: "#edf2f7", marginTop: "2rem" }}>
      <Grid
        // bgColor="#e6dcc8"
        // bgColor="#edf2f7"
        gap={6}
        templateColumns={{ lg: "repeat(4,1fr)", md: "repeat(2,1fr)", sm: "repeat(1,1fr)" }}
        mb={6}
      >
        <GridItem mt={4}>
          <VStack spacing={3}>
            <Heading fontSize="1.2rem" mb={3}>Company</Heading>
            <Link to="/about"><Text fontSize="md" color={"blue.400"}>About us</Text></Link>
            <Text fontSize="md" color={"blue.400"}>Blog</Text>
            <Text fontSize="md" color={"blue.400"}>Careers</Text>
            <Link to="/contact"><Text fontSize="md" color={"blue.400"}>Contact us</Text></Link>
          </VStack>
        </GridItem>
        <GridItem mt={4}>
          <VStack spacing={3}>
            <Heading fontSize="1.2rem" mb={3}>Social</Heading>
            <Text fontSize="md" color={"blue.400"}>Help Center</Text>
            <Text fontSize="md" color={"blue.400"}>Facebook</Text>
            <Text fontSize="md" color={"blue.400"}>youtube</Text>
            <Text fontSize="md" color={"blue.400"}>Community Guidelines</Text>
          </VStack>
        </GridItem>
        <GridItem mt={4}>
          <VStack spacing={3}>
            <Heading fontSize="1.2rem" mb={3}>Legal</Heading>
            <Text fontSize="md" color={"blue.400"}>Cookies Policy</Text>
            <Text fontSize="md" color={"blue.400"}>Privacy Policy</Text>
            <Text fontSize="md" color={"blue.400"}>Terms and services</Text>
            <Text fontSize="md" color={"blue.400"}>Press Releases</Text>
          </VStack>
        </GridItem>
        <GridItem mt={4}>
          <VStack spacing={3}>
            <Heading fontSize="1.2rem" mb={3}>Install App</Heading>
            <Image src="https://trippy-time.vercel.app/static/media/google-play.a642dda447fd0d634216.png" w="10rem"></Image>
            <Image src='https://trippy-time.vercel.app/static/media/appstore.991016dd0c414dd7de02.png' w="10rem"></Image>
          </VStack>
        </GridItem>
      </Grid>
      <hr style={{ height: "1px", background: "black" }} />
      <Stack w="100%" pl={10} pr={20} mt="0.5rem" direction={{ lg: "row", md: "column", sm: "column" }} pt="1rem" pb="1rem">
        <FL>
          <HStack spacing={"2rem"} className='footer-logo-section'>
            <Image src="https://firebasestorage.googleapis.com/v0/b/festive-crayon.appspot.com/o/Posts%2FCraft_Ideas1-removebg.png029b92d9-75e9-48d1-b100-5b790f007a6c?alt=media&token=b496407b-289a-45d6-952d-9bb82d176b81" w="6rem"></Image>
            <HStack spacing={"1rem"}>
              <FaCopyright />
              <Text fontSize={"md"}>2023 All rights reserved.</Text>
            </HStack>
          </HStack>
        </FL>
        <Spacer></Spacer>
        <SL>
          <HStack spacing={6} className='social-logo-section' fontSize="2xl">
            <FaTwitter style={twitterIconStyle} />
            <FaYoutube style={youtubeIconStyle} />
            <FaInstagram style={instgramIconStyle} />
            <FaWhatsapp style={whatsappIconStyle} />
          </HStack>
        </SL>
      </Stack>
    </div>
  )
}

const FL = styled.div`
@media (max-width: 542px)
{
  .footer-logo-section
  {
    display: flex;
    flex-direction: column;
  }
}
`;

const SL = styled.div`

display: flex;
justify-content: center;

@media (max-width: 542px)
{
  .social-logo-section
  {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  }
}
`;

export default Footer
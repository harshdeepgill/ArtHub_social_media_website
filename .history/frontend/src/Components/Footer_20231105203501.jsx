import React, { useState } from 'react'
import { Grid, GridItem, Heading, Text, VStack, HStack, Image, Spacer, Stack, Box } from '@chakra-ui/react'
import { FaCopyright, FaTwitter, FaYoutube, FaInstagram, FaWhatsapp, FaGithub } from 'react-icons/fa';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Footer = () => {
  const [isTwitterHovered, setIsTwitterHovered] = useState(false);
  const [isYoutubeHovered, setIsYoutubeHovered] = useState(false);
  const [isInstagramHovered, setIsInstagramHovered] = useState(false);
  const [isWhatsappHovered, setIsWhatsappHovered] = useState(false);
  const [isGithubHovered, setIsGithubHovered] = useState(false);

  const theme = useSelector((store) => store.authReducer.theme);

  const iconStyle = {
    fontSize: '2xl',
    transition: 'color 0.3s',
  };

  const twitterIconStyle = {
    color: 'blue',
    cursor: "pointer",
    transition: 'color 0.3s',
  }

  const youtubeIconStyle = {
    color: "red",
    transition: 'color 0.3s',
    cursor: "pointer"
  }

  const instagramIconStyle = {
    color: "#fff",
    background: 'radial-gradient(circle farthest-corner at 35% 90%, #fec564, transparent 50%), radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%), radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent), linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%)',
    borderRadius: "30%",
    transition: 'background 0.3s',
    cursor: "pointer"
  }

  const whatsappIconStyle = {
    background: 'green',
    borderRadius: "30%",
    color: "white",
    transition: "background 0.3s",
    cursor: "pointer"
  }

  const githubIconStyle = {
    cursor: "pointer"
  }

  return (
    <div style={{ backgroundColor: `${theme}` === "dark" ? "#15191E" : "#edf2f7", paddingTop: "1rem" }}>
      <hr style={{ height: "1px", background: theme === "dark" ? "white" : "black" }} />
      <Grid
        gap={6}
        templateColumns={{ lg: "repeat(4,1fr)", md: "repeat(2,1fr)", sm: "repeat(1,1fr)" }}
        mb={6}
      >
        <GridItem mt={4}>
          <VStack spacing={3}>
            <Heading fontSize="1.2rem" mb={3} style={{ ...(theme === "dark" ? { color: "white" } : { color: "black" }) }}>Company</Heading>
            <Box fontSize="md" color={"blue.400"} style={{ ...(theme === "dark" ? { color: "coral" } : { color: "blue" }) }}>About us</Box>
            <Box fontSize="md" color={"blue.400"} style={{ ...(theme === "dark" ? { color: "coral" } : { color: "blue" }) }}>Blog</Box>
            <Box fontSize="md" color={"blue.400"} style={{ ...(theme === "dark" ? { color: "coral" } : { color: "blue" }) }}>Careers</Box>
            <Box fontSize="md" color={"blue.400"} style={{ ...(theme === "dark" ? { color: "coral" } : { color: "blue" }) }}>Contact us</Box>
          </VStack>
        </GridItem>
        <GridItem mt={4}>
          <VStack spacing={3}>
            <Heading fontSize="1.2rem" mb={3} style={{ ...(theme === "dark" ? { color: "white" } : { color: "black" }) }}>Social</Heading>
            <Box fontSize="md" color={"blue.400"} style={{ ...(theme === "dark" ? { color: "coral" } : { color: "blue" }) }}>Help Center</Box>
            <Box fontSize="md" color={"blue.400"} style={{ ...(theme === "dark" ? { color: "coral" } : { color: "blue" }) }}>Facebook</Box>
            <Box fontSize="md" color={"blue.400"} style={{ ...(theme === "dark" ? { color: "coral" } : { color: "blue" }) }}>youtube</Box>
            <Box fontSize="md" color={"blue.400"} style={{ ...(theme === "dark" ? { color: "coral" } : { color: "blue" }) }}>Community Guidelines</Box>
          </VStack>
        </GridItem>
        <GridItem mt={4}>
          <VStack spacing={3}>
            <Heading fontSize="1.2rem" mb={3} style={{ ...(theme === "dark" ? { color: "white" } : { color: "black" }) }}>Legal</Heading>
            <Box fontSize="md" color={"blue.400"} style={{ ...(theme === "dark" ? { color: "coral" } : { color: "blue" }) }}>Cookies Policy</Box>
            <Box fontSize="md" color={"blue.400"} style={{ ...(theme === "dark" ? { color: "coral" } : { color: "blue" }) }}>Privacy Policy</Box>
            <Box fontSize="md" color={"blue.400"} style={{ ...(theme === "dark" ? { color: "coral" } : { color: "blue" }) }}>Terms and services</Box>
            <Box fontSize="md" color={"blue.400"} style={{ ...(theme === "dark" ? { color: "coral" } : { color: "blue" }) }}>Press Releases</Box>
          </VStack>
        </GridItem>
        <GridItem mt={4}>
          <VStack spacing={3}>
            <Heading fontSize="1.2rem" mb={3} style={{ ...(theme === "dark" ? { color: "white" } : { color: "black" }) }}>Install App</Heading>
            <Image src="https://trippy-time.vercel.app/static/media/google-play.a642dda447fd0d634216.png" w="10rem"></Image>
            <Image src='https://trippy-time.vercel.app/static/media/appstore.991016dd0c414dd7de02.png' w="10rem"></Image>
          </VStack>
        </GridItem>
      </Grid>
      <hr style={{ height: "1px", background: theme === "dark" ? "white" : "black" }} />
      <FB>
        <Stack w="100%" pl={10} pr={20} mt="0.5rem" direction={{ lg: "row", md: "row", sm: "column" }} pt="1rem" pb="1rem" className='fb-section'>
          <FL>
            <HStack spacing={"2rem"} className='footer-logo-section' justifyContent={{ sm: "center" }}>
              <Image src="https://firebasestorage.googleapis.com/v0/b/festive-crayon.appspot.com/o/Posts%2FCraft_Ideas1-removebg.png029b92d9-75e9-48d1-b100-5b790f007a6c?alt=media&token=b496407b-289a-45d6-952d-9bb82d176b81" w="6rem" mb="1rem"></Image>
              <HStack spacing={"1rem"}>
                <FaCopyright style={{ ...(theme === "dark" ? { color: "white" } : { color: "black" }), marginBottom: "1rem" }} />
                <Text fontSize={"md"} style={{ ...(theme === "dark" ? { color: "white" } : { color: "black" }) }}>2023 All rights reserved.</Text>
              </HStack>
            </HStack>
          </FL>
          <Spacer></Spacer>
          <SL>
            <HStack spacing={6} className='social-logo-section' fontSize="2xl">
              <FaTwitter style={{ ...iconStyle, ...(theme === "dark" ? { color: "white" } : { color: "black" }), ...(isTwitterHovered ? twitterIconStyle : {}) }}
                onMouseEnter={() => setIsTwitterHovered(true)}
                onMouseLeave={() => setIsTwitterHovered(false)}
              />
              <FaYoutube style={{ ...iconStyle, ...(theme === "dark" ? { color: "white" } : { color: "black" }), ...(isYoutubeHovered ? youtubeIconStyle : {}) }}
                onMouseEnter={() => setIsYoutubeHovered(true)}
                onMouseLeave={() => setIsYoutubeHovered(false)} />
              <FaInstagram style={{ ...iconStyle, ...(theme === "dark" ? { color: "white" } : { color: "black" }), ...(isInstagramHovered ? instagramIconStyle : {}) }}
                onMouseEnter={() => setIsInstagramHovered(true)}
                onMouseLeave={() => setIsInstagramHovered(false)} />
              <FaWhatsapp style={{ ...iconStyle, ...(theme === "dark" ? { color: "white" } : { color: "black" }), ...(isWhatsappHovered ? whatsappIconStyle : {}) }}
                onMouseEnter={() => setIsWhatsappHovered(true)}
                onMouseLeave={() => setIsWhatsappHovered(false)} />
              <FaGithub style={{ ...iconStyle, ...(theme === "dark" ? { color: "white" } : { color: "black" }), ...(isGithubHovered ? githubIconStyle : {}) }}
                onMouseEnter={() => setIsGithubHovered(true)}
                onMouseLeave={() => setIsGithubHovered(false)} />
            </HStack>
          </SL>
        </Stack>
      </FB>
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

const FB = styled.div`
@media (max-width: 480px)
{
  .fb-section{
    display: flex;
    flex-direction: column;
  }
}
`;

const SL = styled.div`

display: flex;
justify-content: center;
margin-bottom: 1rem;

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
import React from 'react'

import { Text, Image, Box, Flex } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { Explore } from '../Components/Explore';
import Hero from '../Components/Hero';
import { useSelector } from 'react-redux';

// import PricingCard from '../Components/PricingCard';
// import PricingPage from './PricingPage';

import styled from 'styled-components';


const Home = () => {
  const theme = useSelector((store) => store.authReducer.theme);

  return (
    <>
      <HERO id='hero' style={{ backgroundColor: `${theme}` === "dark" ? "#15191E" : "#edf2f7", fontFamily: "Nunito" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem", color: `${theme}` === "dark" ? "white" : "black", paddingTop: "2rem" }}>
          <h1 className='head-text' style={{ marginTop: "3rem" }}>Create great designs</h1>
          <Text fontSize="xl">Turn ideas into outstanding designs with high-quality vectors, photos, videos, mockups, and more</Text>
        </div>
        <Flex justify={"center"}>
          <CUSTOMGRID>
            {/* <Flex gap="3rem" mt="4rem" justify="center" pl="1rem" pr="1rem" wrap="wrap"> */}
            <Box style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
              <Link to="/arts">
                <Image objectFit="cover" w="17rem" h="10rem" boxShadow='outline' src="https://firebasestorage.googleapis.com/v0/b/festive-crayon.appspot.com/o/Posts%2FAscendance%20of%20a%20Bookworm.png44370915-aedf-42a9-b51f-d132766b0191?alt=media&token=9835d4db-20cd-4be9-ad14-87b4d8528cc5" borderRadius="22px" _hover={{ outline: "3px solid coral", transform: "scale(1.05)", transition: "transform 0.3s ease-in-out" }} />
              </Link>
              <Text fontSize="xl" style={{ color: `${theme}` === "dark" ? "white" : "black" }}>Anime Art</Text>
            </Box>

            <Box style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
              <Link to="/arts">
                <Image objectFit="cover" w="17rem" h="10rem" boxShadow='outline' src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/390425ad-41fc-48d9-bbca-ad4a6f63256d/dfb6rg5-6ac75079-1a89-4950-8641-2d8dd28d3457.png/v1/fill/w_350,h_350,q_70,strp/the_metaverse_by_digitonaut_dfb6rg5-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTUzNiIsInBhdGgiOiJcL2ZcLzM5MDQyNWFkLTQxZmMtNDhkOS1iYmNhLWFkNGE2ZjYzMjU2ZFwvZGZiNnJnNS02YWM3NTA3OS0xYTg5LTQ5NTAtODY0MS0yZDhkZDI4ZDM0NTcucG5nIiwid2lkdGgiOiI8PTE1MzYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.vg-qmZ6d1JFUuztOoUEpfLvCgDEpZS12Hp9H4cpLBt4" borderRadius="22px" _hover={{ outline: "3px solid coral", transform: "scale(1.05)", transition: "transform 0.3s ease-in-out" }} />
              </Link>
              <Text fontSize="xl" style={{ color: `${theme}` === "dark" ? "white" : "black" }}>AI Art</Text>
            </Box>

            <Box style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
              <Link to="/arts">
                <Image objectFit="cover" w="17rem" h="10rem" boxShadow='outline' src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/51bad5a5-a63e-4bbf-9937-6b5b78416457/dcmh1mi-5fb2b2da-5d1c-45d3-aa8d-19aef8db8787.jpg/v1/fill/w_700,h_350,q_70,strp/mountain_landscape_by_allrichart_dcmh1mi-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTEyIiwicGF0aCI6IlwvZlwvNTFiYWQ1YTUtYTYzZS00YmJmLTk5MzctNmI1Yjc4NDE2NDU3XC9kY21oMW1pLTVmYjJiMmRhLTVkMWMtNDVkMy1hYThkLTE5YWVmOGRiODc4Ny5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.H4zpN-0muaAwnft2i3kYZxSn0i9AbabkIT4O62yRx6Q" borderRadius="22px" _hover={{ outline: "3px solid coral", transform: "scale(1.05)", transition: "transform 0.3s ease-in-out" }} />
              </Link>
              <Text fontSize="xl" style={{ color: `${theme}` === "dark" ? "white" : "black" }}>Nature Art</Text>
            </Box>

            <Box style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
              <Link to="/arts">
                <Image objectFit="cover" w="17rem" h="10rem" boxShadow='outline' src="https://img.freepik.com/free-photo/chocolate-cake-decorated-with-forest-fruits-blueberries-strawberries-blackberries-ai-generative_123827-24046.jpg?size=626&ext=jpg&uid=R121159570&ga=GA1.1.1797973341.1699101398&semt=sph" borderRadius="22px" _hover={{ outline: "3px solid coral", transform: "scale(1.05)", transition: "transform 0.3s ease-in-out" }} />
              </Link>
              <Text fontSize="xl" style={{ color: `${theme}` === "dark" ? "white" : "black" }}>Food Art</Text>
            </Box>
            {/* </Flex> */}
          </CUSTOMGRID>
        </Flex>
      </HERO>
      <Hero />
      <Explore />

    </>
  )
}

const CUSTOMGRID = styled.div`
display: grid;
grid-template-columns: 18rem 18rem 18rem 18rem;
margin-top: 2rem;
gap: 3rem;
@media screen and (max-width: 1260px) {
  grid-template-columns: repeat(2,1fr);
}
@media screen and (max-width: 650px) {
  grid-template-columns: repeat(1,1fr);
}
`;

const HERO = styled.section`

height: 28rem;

@media screen and (max-width: 1260px) {
  height: 45rem;
}

@media screen and (max-width: 650px) {
  height: 77rem;
}
`;

export default Home
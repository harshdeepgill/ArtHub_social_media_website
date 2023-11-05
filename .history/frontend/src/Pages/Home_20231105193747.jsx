import React from 'react'

import { Text, Image, VStack, Box, Flex, Button } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { Explore } from '../Components/Explore';
import Hero from '../Components/Hero';
import { useSelector } from 'react-redux';

const Home = () => {
  const theme = useSelector((store) => store.authReducer.theme);

  return (
    <>
      <section id='hero' style={{ height: "32rem", backgroundColor: `${theme}` === "dark" ? "#15191E" : "#f0eded", fontFamily: "Nunito" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem", color: `${theme}` === "dark" ? "white" : "black", paddingTop: "2rem" }}>
          <h1 className='head-text' style={{ marginTop: "3rem" }}>Create great designs</h1>
          <Text fontSize="xl">Turn ideas into outstanding designs with high-quality vectors, photos, videos, mockups, and more</Text>
        </div>
        <Flex gap="4rem" mt="4rem" justify="center" pl="4rem" pr="4rem" wrap="wrap">
          <Box style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
            <Link to="/arts">
              <Image objectFit="cover" w="20rem" h="12rem" boxShadow='outline' src="https://firebasestorage.googleapis.com/v0/b/festive-crayon.appspot.com/o/Posts%2FAscendance%20of%20a%20Bookworm.png44370915-aedf-42a9-b51f-d132766b0191?alt=media&token=9835d4db-20cd-4be9-ad14-87b4d8528cc5" borderRadius="22px" _hover={{ outline: "3px solid coral", transform: "scale(1.05)", transition: "transform 0.3s ease-in-out" }} />
            </Link>
            <Text fontSize="xl" style={{ color: `${theme}` === "dark" ? "white" : "black" }}>Anime Art</Text>
          </Box>

          <Box style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
            <Link to="/arts">
              <Image objectFit="cover" w="20rem" h="12rem" boxShadow='outline' src="https://img.freepik.com/free-photo/ai-nuclear-energy-background-future-innovation-disruptive-technology_53876-129783.jpg?w=996&t=st=1699109080~exp=1699109680~hmac=bf6a04c1ddc3b58acfe0dd62c996a68acf37abb6197903b6ef2943eadc460407" borderRadius="22px" _hover={{ outline: "3px solid coral", transform: "scale(1.05)", transition: "transform 0.3s ease-in-out" }} />
            </Link>
            <Text fontSize="xl" style={{ color: `${theme}` === "dark" ? "white" : "black" }}>AI Art</Text>
          </Box>

          <Box style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
            <Link to="/arts">
              <Image objectFit="cover" w="20rem" h="12rem" boxShadow='outline' src="https://img.freepik.com/free-photo/seljalandsfoss-waterfall-during-sunset-beautiful-waterfall-iceland_335224-596.jpg?w=996&t=st=1699109425~exp=1699110025~hmac=c7f0f48757bf877c024415e07e2b9cb61b9b3c22bbf137839927235caa5f3cdb" borderRadius="22px" _hover={{ outline: "3px solid coral", transform: "scale(1.05)", transition: "transform 0.3s ease-in-out" }} />
            </Link>
            <Text fontSize="xl" style={{ color: `${theme}` === "dark" ? "white" : "black" }}>Nature Art</Text>
          </Box>

          <Box style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
            <Link to="/arts">
              <Image objectFit="cover" w="20rem" h="12rem" boxShadow='outline' src="https://img.freepik.com/free-photo/chocolate-cake-decorated-with-forest-fruits-blueberries-strawberries-blackberries-ai-generative_123827-24046.jpg?size=626&ext=jpg&uid=R121159570&ga=GA1.1.1797973341.1699101398&semt=sph" borderRadius="22px" _hover={{ outline: "3px solid coral", transform: "scale(1.05)", transition: "transform 0.3s ease-in-out" }} />
            </Link>
            <Text fontSize="xl" style={{ color: `${theme}` === "dark" ? "white" : "black" }}>Food Art</Text>
          </Box>
        </Flex>
      </section>
      <Hero />
      <Explore />
    </>
  )
}

export default Home
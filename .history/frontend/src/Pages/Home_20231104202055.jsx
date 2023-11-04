import React from 'react'
import { Text, Image, VStack, Box, HStack } from "@chakra-ui/react";

const Home = () => {
  return (
    <section id='hero' style={{ height: "70vh", backgroundColor: "#91D9A8", fontFamily: "Nunito" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
        <h1 className='head-text' style={{ marginTop: "3rem" }}>Create great designs</h1>
        <Text fontSize="xl">Turn ideas into outstanding designs with high-quality vectors, photos, videos, mockups, and more</Text>
      </div>
      <HStack spacing="4rem" mt="4rem">
        <Box style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
          <Image objectFit="cover" w="20rem" h="12rem" boxShadow='outline' src="https://firebasestorage.googleapis.com/v0/b/festive-crayon.appspot.com/o/Posts%2FAscendance%20of%20a%20Bookworm.png44370915-aedf-42a9-b51f-d132766b0191?alt=media&token=9835d4db-20cd-4be9-ad14-87b4d8528cc5" borderRadius="22px" _hover={{ outline: "3px solid coral", transform: "scale(1.05)", transition: "transform 0.3s ease-in-out" }} />
          <Text fontSize="xl">Anime</Text>
        </Box>

        <Box style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
          <Image objectFit="cover" w="20rem" h="12rem" boxShadow='outline' src="https://img.freepik.com/free-photo/ai-nuclear-energy-background-future-innovation-disruptive-technology_53876-129783.jpg?w=996&t=st=1699109080~exp=1699109680~hmac=bf6a04c1ddc3b58acfe0dd62c996a68acf37abb6197903b6ef2943eadc460407" borderRadius="22px" _hover={{ outline: "3px solid coral", transform: "scale(1.05)", transition: "transform 0.3s ease-in-out" }} />
          <Text fontSize="xl">AI Art</Text>
        </Box>

        <Box style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
          <Image objectFit="cover" w="20rem" h="12rem" boxShadow='outline' src="https://img.freepik.com/premium-photo/winding-river-virgin-forest-valley-against-mountains_76964-970.jpg?w=1060" borderRadius="22px" _hover={{ outline: "3px solid coral", transform: "scale(1.05)", transition: "transform 0.3s ease-in-out" }} />
          <Text fontSize="xl">Nature Art</Text>
        </Box>
      </HStack>
    </section>
  )
}

export default Home
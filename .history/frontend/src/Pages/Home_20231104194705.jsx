import React from 'react'
import { Text, Image, VStack } from "@chakra-ui/react";

const Home = () => {
  return (
    <section id='hero' style={{ height: "70vh", backgroundColor: "#91D9A8", fontFamily: "Nunito" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
        <h1 className='head-text' style={{ marginTop: "3rem" }}>Create great designs</h1>
        <Text fontSize="xl">Turn ideas into outstanding designs with high-quality vectors, photos, videos, mockups, and more</Text>
      </div>
      <div style={{ display: 'flex', gap: "1rem", justifyContent: "space-evenly", flexWrap: "wrap", marginTop: "2rem" }}>
        <VStack>
          <Image objectFit="cover" w="20%" src="https://firebasestorage.googleapis.com/v0/b/festive-crayon.appspot.com/o/Posts%2FAscendance%20of%20a%20Bookworm.png44370915-aedf-42a9-b51f-d132766b0191?alt=media&token=9835d4db-20cd-4be9-ad14-87b4d8528cc5" borderRadius="full" style={{ border: "2px solid coral" }} />
          <Text>Anime</Text>
        </VStack>

      </div>
    </section>
  )
}

export default Home
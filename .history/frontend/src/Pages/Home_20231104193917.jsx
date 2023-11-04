import React from 'react'
import { Text } from "@chakra-ui/react";

const Home = () => {
  return (
    <section id='hero' style={{ height: "70vh", backgroundColor: "#91D9A8", fontFamily: "Nunito" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
        <h1 className='head-text' style={{ marginTop: "3rem" }}>Create great designs</h1>
        <Text fontSize="xl">Turn ideas into outstanding designs with high-quality vectors, photos, videos, mockups, and more</Text>
      </div>
      <div style={{ display: 'flex', gap: "1rem", justifyContent: "space-evenly", flexWrap: "wrap" }}>

      </div>
    </section>
  )
}

export default Home
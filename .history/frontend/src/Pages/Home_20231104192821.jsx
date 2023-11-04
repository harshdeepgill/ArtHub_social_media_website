import React from 'react'
import { Text } from "@chakra-ui/react";

const Home = () => {
  return (
    <section id='hero' style={{ height: "70vh", backgroundColor: "#91D9A8", fontFamily: "Nunito" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h1 className='head-text'>Create great designs</h1>
        <Text>Turn ideas into outstanding designs with high-quality vectors, photos, videos, mockups, and more</Text>
      </div>
    </section>
  )
}

export default Home
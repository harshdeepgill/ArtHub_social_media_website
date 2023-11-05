import React from 'react'
import { Box, Text, VStack } from "@chakra-ui/react";

const SearchCard = () => {
  return (
    <Box key={data[i]._id} className={`div`} onClick={() => handleView(data[i]._id, data[i].views)}>
      <LazyLoadImage src={data[i].image} className="div-img" alt={data[i].title} effect="blur" />
      <Text className="title">{data[i].title}</Text>
      <VStack className="opacity">
        <Text display={"flex"} alignItems={"center"} gap={"5px"}>{data[i].views} <ViewIcon /></Text>
        <Text display={"flex"} alignItems={"center"} gap={"5px"}>{data[i].favorite} <StarIcon /></Text>
      </VStack>
    </Box>
  )
}

export default SearchCard
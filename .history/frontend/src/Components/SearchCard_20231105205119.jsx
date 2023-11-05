import React from 'react'
import { Box, Text, VStack } from "@chakra-ui/react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const SearchCard = () => {
  const data = localStorage.getItem("searchResult");

  return (
    // <Box key={data[i]._id} className={`div`} onClick={() => handleView(data[i]._id, data[i].views)}>
    //   <LazyLoadImage src={data[i].image} className="div-img" alt={data[i].title} effect="blur" />
    //   <Text className="title">{data[i].title}</Text>
    //   <VStack className="opacity">
    //     <Text display={"flex"} alignItems={"center"} gap={"5px"}>{data[i].views} <ViewIcon /></Text>
    //     <Text display={"flex"} alignItems={"center"} gap={"5px"}>{data[i].favorite} <StarIcon /></Text>
    //   </VStack>
    // </Box>
    <div>SearchCard</div>
  )
}

export default SearchCard
import React from 'react'
import { Box, Text, VStack } from "@chakra-ui/react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const SearchCard = () => {
  const data = localStorage.getItem("searchResult");

  const renderData1 = () => {
    const ele = []
    for (let i = 0; i < data?.length; i += 4) {
      ele.push(<Box key={data[i]._id} className={`div`} onClick={() => handleView(data[i]._id, data[i].views)}>
        <LazyLoadImage src={data[i].image} className="div-img" alt={data[i].title} effect="blur" />
        <Text className="title">{data[i].title}</Text>
        <VStack className="opacity">
          <Text display={"flex"} alignItems={"center"} gap={"5px"}>{data[i].views} <ViewIcon /></Text>
          <Text display={"flex"} alignItems={"center"} gap={"5px"}>{data[i].favorite} <StarIcon /></Text>
        </VStack>
      </Box>)
    }
    return ele;
  }

  return (
    { renderData1() }
  )
}

export default SearchCard
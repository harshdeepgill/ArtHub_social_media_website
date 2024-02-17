import React from 'react'
import { Box, Text, VStack } from "@chakra-ui/react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useNavigate } from 'react-router-dom';
import { ViewIcon, StarIcon } from "@chakra-ui/icons"

const SearchCard = () => {
  const data = localStorage.getItem("searchResult");
  const navigate = useNavigate();

  const handleView = (id, view) => {
    const newView = { views: view + 1 };
    fetch(`https://artsphere.onrender.com/arts/view/${id}`, {
      method: "PATCH",
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
        "Content-type": "application/json"
      },
      body: JSON.stringify(newView)
    })
      .then((res) => {
        if (res.status === 200) {
          data.map((el) => {
            return el._id === id ? el.views++ : el
          })
          navigate(`/art/${id}`)
        }
      })
      .catch((err) => console.log(err))
  }

  const renderData1 = () => {
    const ele = []
    for (let i = 0; i < data?.length; i += 1) {
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
    <div>
      {renderData1()}
    </div>
  )
}

export default SearchCard
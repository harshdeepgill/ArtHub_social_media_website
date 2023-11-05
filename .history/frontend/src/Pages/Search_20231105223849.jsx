import React from 'react'
import { Text, VStack, Box, GridItem, Grid } from "@chakra-ui/react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useNavigate } from 'react-router-dom';
import { ViewIcon, StarIcon } from "@chakra-ui/icons"
import styled from 'styled-components';

const Search = () => {
  const data = JSON.parse(localStorage.getItem("searchResult"));
  console.log(data);
  const navigate = useNavigate();

  const handleView = (id, view) => {
    const newView = { views: view + 1 };
    fetch(`https://gifted-kit-cow.cyclic.app/arts/view/${id}`, {
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

  const renderData = () => {
    const ele = []
    for (let i = 0; i < data.length; i++) {
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

  let gridData = renderData();

  return (
    <Grid>
      {/* <GRID>
        <GridItem className="grid">
          {renderData1()}
        </GridItem>
      </GRID> */}
      {
        gridData.map((el, index) => {
          return <GridItem key={index}>
            {el}
          </GridItem>
        })
      }
    </Grid>
  )
}

const GRID = styled.div`
    .grid{
display: flex;
flex-direction: column;
gap: 1rem;
}
  .div {
    position: relative;
    height: auto;
    width: auto;
  }

  .div-img {
    width: 100%;
    height: auto;
    object-fit: cover;
    opacity: 1;
    transition: opacity 0.3s;
  }

  .div .title {
    position: absolute;
    top: 0%;
    left: 0%;
    color: #fff;
    padding: 10px;
    visibility: hidden;
    transition: opacity 1s;
    text-align: center;
    cursor: default;
  }

  .opacity{
    position: absolute;
    bottom: 0%;
    right: 0%;
    color: #fff;
    padding: 10px;
    visibility: hidden;
    transition: opacity 0.3s;
    text-align: center;
    cursor: default;
  }

  .div:hover .div-img {
    opacity: 0.6;
  }

  .div:hover .title,
  .div:hover .opacity {
    visibility: visible;
  }
`;

export default Search
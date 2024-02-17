import React from 'react'
import { Text, VStack, Box, GridItem, Grid } from "@chakra-ui/react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useNavigate } from 'react-router-dom';
import { ViewIcon, StarIcon } from "@chakra-ui/icons"
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Search = () => {
  const data = JSON.parse(localStorage.getItem("searchResult"));
  const navigate = useNavigate();
  const theme = useSelector(store => store.authReducer.theme);

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
    <div style={{ padding: "3rem", background: theme === "dark" ? "#15191E" : "#f0eded" }}>
      {
        gridData.length > 0 ?
          (<div style={{ display: "flex", justifyContent: "center" }}>
            <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
              gap="2rem" mt="2rem" mb="2rem">
              {
                gridData.map((el, index) => {
                  return <GRID key={index}><GridItem>{el}</GridItem></GRID>
                })
              }
            </Grid>
          </div>)
          :
          (<div style={{ display: "flex", justifyContent: "center" }}>
            <Box fontSize="xl" color={`${theme}` === "dark" ? "white" : "black"}>No data found </Box>
          </div>)
      }
    </div>
  )
}

// const GRIDCONTAINER = styled.div`
// display: grid;
// grid-template-columns: repeat(4,1fr);
// gap: 3rem;
// margin: 2rem 0;

// @media screen and(max-width: 1290px){
//   grid-template-columns: repeat(3,1fr);
// }

// @media screen and(max-width: 980px){
//   grid-template-columns: repeat(2,1fr);
// }

// @media screen and(max-width: 500px){
//   grid-template-columns: repeat(1,1fr);
// }
// `;

const GRID = styled.div`
  .grid {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .div {
    position: relative;
    /* height: auto;
    width: auto; */
    height: 12rem;
    width: 20rem;
    overflow: hidden;
  }

  .div-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* object-position: center center; */
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

// const GRID = styled.div`
//   .grid {
//     display: grid;
//     grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); /* Adjust the minimum and maximum width as needed */
//     gap: 1rem;
//   }

//   .div {
//     position: relative;
//     width: 100%;
//     aspect-ratio: 1; /* Set a fixed aspect ratio for each grid item */
//   }

//   .div-img {
//     width: 100%;
//     height: auto;
//     object-fit: cover; /* Make the image fill the container dimensions while maintaining its aspect ratio */
//     opacity: 1;
//     transition: opacity 0.3s;
//   }

//   .div .title {
//     position: absolute;
//     top: 0%;
//     left: 0%;
//     color: #fff;
//     padding: 10px;
//     visibility: hidden;
//     transition: opacity 1s;
//     text-align: center;
//     cursor: default;
//   }

//   .opacity {
//     position: absolute;
//     bottom: 0%;
//     right: 0%;
//     color: #fff;
//     padding: 10px;
//     visibility: hidden;
//     transition: opacity 0.3s;
//     text-align: center;
//     cursor: default;
//   }

//   .div:hover .div-img {
//     opacity: 0.6;
//   }

//   .div:hover .title,
//   .div:hover .opacity {
//     visibility: visible;
//   }
// `;

export default Search
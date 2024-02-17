import { Box, Button, Flex, Grid, GridItem, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { ViewIcon, StarIcon } from "@chakra-ui/icons"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ArtPage = () => {
    const [curr, setCurr] = useState("");
    const [data, setData] = useState();
    const navigate = useNavigate();
    const theme = useSelector(store => store.authReducer.theme);
    const handleClick = (e) => {
        setCurr(e.target.value)
    }
    const fetchTheData = () => {
        let url;
        if (curr === "") {
            url = "https://artsphere.onrender.com/admin/arts"
        }
        else {
            url = `https://artsphere.onrender.com/arts/all/?category=${curr}`
        }
        fetch(url, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then((res) => res.json())
            .then((res) => { console.log("artpage data :", res); setData(res.reverse()) })
            .catch((err) => console.log(err))
    }
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
    const renderData2 = () => {
        const ele = [];
        for (let i = 1; i < data?.length; i += 4) {
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
    const renderData3 = () => {
        const ele = [];
        for (let i = 2; i < data?.length; i += 4) {
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
    const renderData4 = () => {
        const ele = [];
        for (let i = 3; i < data?.length; i += 4) {
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
    useEffect(() => {
        fetchTheData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [curr]);
    return <Box w={"100%"} bgColor={theme === "dark" ? "#15191E" : "#edf2f7"} color={theme === "dark" ? "white" : "black"}>
        <Box w={"90%"} m={"auto"} padding={"1rem"}>
            <Grid w={"100%"} m={"auto"} templateColumns={["repeat(2,1fr)", "repeat(3,1fr)", "repeat(5,1fr)", "repeat(7,1fr)", "repeat(9,1fr)"]} columnGap={"1rem"} rowGap={"0.5rem"} templateRows={"auto"} p={"1rem"}>
                <GridItem>
                    <Button w={"100%"} variant={"outline"} value={""} borderColor={curr === "" ? "#00ff51" : "#ffb89e"} _hover={{ opacity: 0.8 }} colorScheme={"#15191E"} onClick={handleClick} borderRadius={"5px"} _active={{ color: "none" }}>For You</Button>
                </GridItem>
                <GridItem>
                    <Button w={"100%"} variant={"outline"} borderColor={curr === "AIArt" ? "#00ff51" : "#ffb89e"} value={"AIArt"} _hover={{ opacity: 0.8 }} colorScheme={"#15191E"} onClick={handleClick} borderRadius={"5px"}>AI Art</Button>
                </GridItem>
                <GridItem>
                    <Button w={"100%"} variant={"outline"} borderColor={curr === "Digital Art" ? "#00ff51" : "#ffb89e"} value={"Digital Art"} _hover={{ opacity: 0.8 }} colorScheme={"#15191E"} onClick={handleClick} borderRadius={"5px"}>Digital Art</Button>
                </GridItem>
                <GridItem>
                    <Button w={"100%"} variant={"outline"} borderColor={curr === "Anime" ? "#00ff51" : "#ffb89e"} value={"Anime"} _hover={{ opacity: 0.8 }} colorScheme={"#15191E"} onClick={handleClick} borderRadius={"5px"}>Anime</Button>
                </GridItem>
                <GridItem>
                    <Button w={"100%"} variant={"outline"} borderColor={curr === "Drawings" ? "#00ff51" : "#ffb89e"} value={"Drawings"} _hover={{ opacity: 0.8 }} colorScheme={"#15191E"} onClick={handleClick} borderRadius={"5px"}>Drawings</Button>
                </GridItem>
                <GridItem>
                    <Button w={"100%"} variant={"outline"} borderColor={curr === "Fan Art" ? "#00ff51" : "#ffb89e"} _hover={{ opacity: 0.8 }} value={"Fan Art"} colorScheme={"#15191E"} onClick={handleClick} borderRadius={"5px"}>Fan Art</Button>
                </GridItem>
                <GridItem>
                    <Button w={"100%"} variant={"outline"} borderColor={curr === "Nature" ? "#00ff51" : "#ffb89e"} _hover={{ opacity: 0.8 }} value={"Nature"} colorScheme={"#15191E"} onClick={handleClick} borderRadius={"5px"}>Nature</Button>
                </GridItem>
                <GridItem>
                    <Button w={"100%"} variant={"outline"} borderColor={curr === "Fantasy" ? "#00ff51" : "#ffb89e"} _hover={{ opacity: 0.8 }} value={"Fantasy"} colorScheme={"#15191E"} onClick={handleClick} borderRadius={"5px"}>Fantasy</Button>
                </GridItem>
                <GridItem>
                    <Button w={"100%"} variant={"outline"} borderColor={curr === "Photography" ? "#00ff51" : "#ffb89e"} _hover={{ opacity: 0.8 }} colorScheme={"#15191E"} onClick={handleClick} borderRadius={"5px"} value={"Photography"}>Photography</Button>
                </GridItem>
            </Grid>
            {!data && <Flex height="80vh" align="center" justify="center">
                <Image src="https://i.ibb.co/68zbKqX/output-onlinegiftools.gif" w={"10%"} h={"10%"} />
            </Flex>}
            {data?.length === 0 && <Box>
                <Heading textAlign={"center"}>There is no data present.</Heading>
            </Box>}
            <Grid gap={"1rem"} templateColumns={["repeat(1,1fr)", "repeat(1,1fr)", "repeat(2,1fr)", "repeat(2,1fr)", "repeat(4,1fr)"]}>
                <GRID>
                    <GridItem className="grid">
                        {renderData1()}
                    </GridItem>
                </GRID>
                <GRID>
                    <GridItem className="grid">
                        {renderData2()}
                    </GridItem>
                </GRID>
                <GRID>
                    <GridItem className="grid">
                        {renderData3()}
                    </GridItem>
                </GRID>
                <GRID>
                    <GridItem className="grid">
                        {renderData4()}
                    </GridItem>
                </GRID>
            </Grid>
        </Box>
    </Box>
}
export default ArtPage;

const GRID = styled.div`
    .grid{
display: flex;
flex-direction: column;
gap: 1rem;
}
  .div {
    max-height: fit-content;
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
`
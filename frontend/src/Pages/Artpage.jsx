import { Box, Button, Flex, Grid, GridItem, Image, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { ViewIcon, StarIcon } from "@chakra-ui/icons"
import { useNavigate } from "react-router-dom";
const ArtPage = () => {
    const [curr, setCurr] = useState("");
    const [data, setData] = useState();
    const navigate = useNavigate();
    const handleClick = (e) => {
        setCurr(e.target.value)
    }
    const fetchTheData = () => {
        fetch(`https://gifted-kit-cow.cyclic.app/arts/${curr}`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InBhcmFzIiwiaWF0IjoxNjk5MTA5MDAzLCJleHAiOjE2OTk3MTM4MDN9.J6J2TNTFERx0Cs1PUpuQUSjtRU4mQVYLLd6Coy7wXuY`
            }
        })
            .then((res) => res.json())
            .then((res) => setData(res.reverse()))
            .catch((err) => console.log(err))
    }
    console.log(data);
    const handleView = (id, view) => {
        const newView = { views: view + 1 };
        console.log(newView.views);
        fetch(`https://gifted-kit-cow.cyclic.app/arts/view/${id}`, {
            method: "PATCH",
            headers: {
                "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InBhcmFzIiwiaWF0IjoxNjk5MTA5MDAzLCJleHAiOjE2OTk3MTM4MDN9.J6J2TNTFERx0Cs1PUpuQUSjtRU4mQVYLLd6Coy7wXuY`,
                "Content-type": "application/json"
            },
            body: JSON.stringify(newView)
        })
            .then((res) => {
                if (res.status == 200) {
                    data.map((el) => {
                        return el._id == id ? el.views++ : el
                    })
                    navigate(`/art/${id}`)
                }
            })
            .catch((err) => console.log(err))
    }
    useEffect(() => {
        fetchTheData();
    }, [curr])
    if (data == null) {
        return <Flex height="80vh" align="center" justify="center">
            <Image src="https://cdn.slidevision.io/www/14304000000085015_loader.gif" w={"10%"} />
        </Flex>
    }
    return <Box w={"100%"} bgColor={"#15191E"} color={"white"}>
        <Box w={"90%"} m={"auto"}>
            <Grid w={"100%"} m={"auto"} templateColumns={["repeat(2,1fr)", "repeat(3,1fr)", "repeat(5,1fr)", "repeat(7,1fr)", "repeat(9,1fr)"]} columnGap={"1rem"} rowGap={"0.5rem"} templateRows={"auto"} p={"1rem"}>
                <GridItem>
                    <Button w={"100%"} variant={"outline"} value={""} borderColor={curr == "" ? "#00ff51" : "#ffb89e"} _hover={{ opacity: 0.8 }} colorScheme={"#15191E"} onClick={handleClick} borderRadius={"5px"} _active={{ color: "none" }}>For You</Button>
                </GridItem>
                <GridItem>
                    <Button w={"100%"} variant={"outline"} borderColor={curr == "AIArt" ? "#00ff51" : "#ffb89e"} value={"AIArt"} _hover={{ opacity: 0.8 }} colorScheme={"#15191E"} onClick={handleClick} borderRadius={"5px"}>AI Art</Button>
                </GridItem>
                <GridItem>
                    <Button w={"100%"} variant={"outline"} borderColor={curr == "SkyScapes" ? "#00ff51" : "#ffb89e"} value={"SkyScapes"} _hover={{ opacity: 0.8 }} colorScheme={"#15191E"} onClick={handleClick} borderRadius={"5px"}>Skyscapes</Button>
                </GridItem>
                <GridItem>
                    <Button w={"100%"} variant={"outline"} borderColor={curr == "Anime" ? "#00ff51" : "#ffb89e"} value={"Anime"} _hover={{ opacity: 0.8 }} colorScheme={"#15191E"} onClick={handleClick} borderRadius={"5px"}>Anime</Button>
                </GridItem>
                <GridItem>
                    <Button w={"100%"} variant={"outline"} borderColor={curr == "Drawings" ? "#00ff51" : "#ffb89e"} value={"Drawings"} _hover={{ opacity: 0.8 }} colorScheme={"#15191E"} onClick={handleClick} borderRadius={"5px"}>Drawings</Button>
                </GridItem>
                <GridItem>
                    <Button w={"100%"} variant={"outline"} borderColor={curr == "OnePiece" ? "#00ff51" : "#ffb89e"} _hover={{ opacity: 0.8 }} value={"OnePiece"} colorScheme={"#15191E"} onClick={handleClick} borderRadius={"5px"}>One Piece</Button>
                </GridItem>
                <GridItem>
                    <Button w={"100%"} variant={"outline"} borderColor={curr == "Nature" ? "#00ff51" : "#ffb89e"} _hover={{ opacity: 0.8 }} value={"Nature"} colorScheme={"#15191E"} onClick={handleClick} borderRadius={"5px"}>Nature</Button>
                </GridItem>
                <GridItem>
                    <Button w={"100%"} variant={"outline"} borderColor={curr == "Architecture" ? "#00ff51" : "#ffb89e"} _hover={{ opacity: 0.8 }} value={"Architecture"} colorScheme={"#15191E"} onClick={handleClick} borderRadius={"5px"}>Architecture</Button>
                </GridItem>
                <GridItem>
                    <Button w={"100%"} variant={"outline"} borderColor={curr == "Photography" ? "#00ff51" : "#ffb89e"} _hover={{ opacity: 0.8 }} colorScheme={"#15191E"} onClick={handleClick} borderRadius={"5px"} value={"Photography"}>Photography</Button>
                </GridItem>
            </Grid>
            {/* <Box display={"flex"} flexWrap={"wrap"} gap={"1rem"}>
                {data.length > 0 && data.map((el) => {
                    return <Box key={el._id} position={"relative"} w={"auto"} h={"auto"}>
                        <Image src={el.image} position={"relative"} objectFit={"cover"} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
                        <Text noOfLines={1} position={"absolute"} bottom={0} left={0} backgroundColor={"transparent"} color={"white"} padding={"5px"} visibility={"hidden"} transition={"visibility 0.2s"} className="image-title" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>{el.title}</Text>
                        {/* <Text>{el.views}</Text> */}
            {/* <Text>{el.favorite}</Text> */}
            {/* </Box> */}
            {/* })} */}
            {/* </Box> * /} */}
            <GRID className="grid">
                {data.length > 0 && data.map((el) => {
                    return <Box key={el._id} className={`div`} onClick={() => handleView(el._id, el.views)}>
                        <Image src={el.image} className="div-img" />
                        <Text className="title">{el.title}</Text>
                        <VStack className="opacity">
                            <Text display={"flex"} alignItems={"center"} gap={"5px"}>{el.views} <ViewIcon /></Text>
                            <Text display={"flex"} alignItems={"center"} gap={"5px"}>{el.favorite} <StarIcon /></Text>
                        </VStack>
                    </Box>
                })}
                {/* <div></div>
                <div></div>
                <div></div> */}
            </GRID>
        </Box >
    </Box >
}
export default ArtPage;
const GRID = styled.div`
    display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: auto;
  grid-auto-flow: dense;
  height: auto;
  
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
    top: 92%;
    left: 3%;
    color: #fff;
    padding: 10px;
    visibility: hidden;
    transition: opacity 0.3s;
    text-align: center;
  }

  .opacity{
    position: absolute;
    top: 85%;
    right: 5%;
    color: #fff;
    padding: 10px;
    visibility: hidden;
    transition: opacity 0.3s;
    text-align: center;
  }

  .div:hover .div-img {
    opacity: 0.8;
  }

  .div:hover .title,
  .div:hover .opacity {
    visibility: visible;
  }
`
import { Box, Button, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
const ArtPage = () => {
    const [curr, setCurr] = useState("foryou");
    const [data, setData] = useState();
    const handleClick = (e) => {
        setCurr(e.target.value)
    }
    const fetchTheData = () => {
        fetch("https://artsphere.onrender.com/arts", {
            method: "GET",
            headers: {
                "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InBhcmFzIiwiaWF0IjoxNjk5MDIyMzgzLCJleHAiOjE2OTk2MjcxODN9.8My3_Cj6z1f8Cksqa4tMndDwMpnWGJMjTCTooXQwtWY`
            }
        })
            .then((res) => res.json())
            .then((res) => setData(res))
            .catch((err) => console.log(err))
    }
    console.log(data);
    const handleMouseEnter = () => {
        document.querySelector('.image-title').style.visibility = 'visible';
    };

    const handleMouseLeave = () => {
        document.querySelector('.image-title').style.visibility = 'hidden';
    };
    useEffect(() => {
        fetchTheData();
    }, [])
    if (data == null) {
        return <Flex height="80vh" align="center" justify="center">
            <Image src="https://cdn.slidevision.io/www/14304000000085015_loader.gif" w={"10%"} />
        </Flex>
    }
    return <Box w={"100%"} bgColor={"#15191E"} color={"white"}>
        <Box w={"90%"} m={"auto"}>
            <Grid w={"100%"} m={"auto"} templateColumns={["repeat(2,1fr)", "repeat(3,1fr)", "repeat(5,1fr)", "repeat(7,1fr)", "repeat(9,1fr)"]} columnGap={"1rem"} rowGap={"0.5rem"} templateRows={"auto"} p={"1rem"}>
                <GridItem>
                    <Button w={"100%"} variant={"outline"} value={"foryou"} borderColor={curr == "foryou" ? "#00ff51" : "#ffb89e"} _hover={{ opacity: 0.8 }} colorScheme={"#15191E"} onClick={handleClick} borderRadius={"5px"} _active={{ color: "none" }}>For You</Button>
                </GridItem>
                <GridItem>
                    <Button w={"100%"} variant={"outline"} borderColor={curr == "alart" ? "#00ff51" : "#ffb89e"} value={"alart"} _hover={{ opacity: 0.8 }} colorScheme={"#15191E"} onClick={handleClick} borderRadius={"5px"}>AI Art</Button>
                </GridItem>
                <GridItem>
                    <Button w={"100%"} variant={"outline"} borderColor={curr == "skyscapes" ? "#00ff51" : "#ffb89e"} value={"skyscapes"} _hover={{ opacity: 0.8 }} colorScheme={"#15191E"} onClick={handleClick} borderRadius={"5px"}>Skyscapes</Button>
                </GridItem>
                <GridItem>
                    <Button w={"100%"} variant={"outline"} borderColor={curr == "animefanart" ? "#00ff51" : "#ffb89e"} value={"animefanart"} _hover={{ opacity: 0.8 }} colorScheme={"#15191E"} onClick={handleClick} borderRadius={"5px"}>Anime Fan Art</Button>
                </GridItem>
                <GridItem>
                    <Button w={"100%"} variant={"outline"} borderColor={curr == "drawingsandpaintings" ? "#00ff51" : "#ffb89e"} value={"drawingsandpaintings"} _hover={{ opacity: 0.8 }} colorScheme={"#15191E"} onClick={handleClick} borderRadius={"5px"}>Drawings and Paintings</Button>
                </GridItem>
                <GridItem>
                    <Button w={"100%"} variant={"outline"} borderColor={curr == "onepiece" ? "#00ff51" : "#ffb89e"} _hover={{ opacity: 0.8 }} value={"onepiece"} colorScheme={"#15191E"} onClick={handleClick} borderRadius={"5px"}>One Piece</Button>
                </GridItem>
                <GridItem>
                    <Button w={"100%"} variant={"outline"} borderColor={curr == "nature" ? "#00ff51" : "#ffb89e"} _hover={{ opacity: 0.8 }} value={"nature"} colorScheme={"#15191E"} onClick={handleClick} borderRadius={"5px"}>Nature</Button>
                </GridItem>
                <GridItem>
                    <Button w={"100%"} variant={"outline"} borderColor={curr == "architecture" ? "#00ff51" : "#ffb89e"} _hover={{ opacity: 0.8 }} value={"architecture"} colorScheme={"#15191E"} onClick={handleClick} borderRadius={"5px"}>Architecture</Button>
                </GridItem>
                <GridItem>
                    <Button w={"100%"} variant={"outline"} borderColor={curr == "photography" ? "#00ff51" : "#ffb89e"} _hover={{ opacity: 0.8 }} colorScheme={"#15191E"} onClick={handleClick} borderRadius={"5px"} value={"photography"}>Photography</Button>
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
                    return <div key={el._id} className={`div`} >
                        <img src={el.image} className="div-img" />
                    </div>
                })}
            </GRID>
        </Box >
    </Box >
}
export default ArtPage;
const GRID = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit,minmax(300px,1fr));
    grid-template-rows: auto;
    grid-auto-flow: dense;
`
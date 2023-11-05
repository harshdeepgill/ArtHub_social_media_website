import { Box, Button, HStack, IconButton, Image, Stack, Link as ChakraLink, Text, VStack, Spinner, Icon, Tag, Textarea, Grid, Flex } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { StarIcon, ChatIcon, DownloadIcon, ViewIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { useSelector } from "react-redux";
const SingleProduct = () => {
    const { id } = useParams();
    const auth = useSelector(store => store.authReducer);
    console.log(auth)
    const fetchThedata = () => {
        fetch(`https://gifted-kit-cow.cyclic.app/arts/${id}`, {
            method: "GET",
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InBhcmFzIiwiaWF0IjoxNjk5MTA5MDAzLCJleHAiOjE2OTk3MTM4MDN9.J6J2TNTFERx0Cs1PUpuQUSjtRU4mQVYLLd6Coy7wXuY"
            }
        })
            .then((res) => res.json())
            .then((res) => setData(res[0]))
            .catch((err) => console.log(err))
    }
    const [data, setData] = useState();
    const [commentSection, setcommentSection] = useState(false);
    const [comments, setComments] = useState("");
    const loader = () => {
        setTimeout(() => {
            setLoading(false);
        }, 1000)
    }
    useEffect(() => {
        loader();
        fetchThedata();
    }, [])
    const [loading, setLoading] = useState(true);
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = data.image;
        link.download = "downloaded_image.png";
        link.click();
    };
    return <Box >
        {loading ?
            <Flex height="80vh" align="center" justify="center">
                <Image src="https://cdn.slidevision.io/www/14304000000085015_loader.gif" w={"10%"} />
            </Flex> :
            <Box w={"90%"} m={"1rem auto"} >
                <Stack display={"flex"} direction={["column", "column", "column", "row", "row"]}>
                    <Box w={"60%"} mb={"1rem"}>
                        <Image src={data.image} w={"90%"} objectFit={"cover"} />
                        <Stack display={"flex"} w={"90%"} mt={"1rem"} direction={"row"} justifyContent={"space-between"}>
                            <HStack>
                                <Button leftIcon={<AiOutlineStar />} bgColor={"#FF7F50"} color={"white"} _hover={{ bgColor: "none" }} _active={{ transform: "scale(0.95)" }}>Add to Favourites</Button>
                                <Button leftIcon={<BiCommentDetail />} bgColor={"#8FDBA7"} _hover={{ bgColor: "none" }} onClick={() => setcommentSection(!commentSection)} _active={{ transform: "scale(0.95)" }}>Comments</Button >
                            </HStack>
                            <HStack>
                                <ChakraLink href={data.image} download onClick={handleDownload}>
                                    <IconButton icon={<DownloadIcon color={"white"} />} bgColor={"#FF7F50"} _hover={{ bgColor: "none" }} _active={{ transform: "scale(0.95)" }} />
                                </ChakraLink>
                            </HStack>
                        </Stack>
                        {commentSection && <Box w={"100%"} m={"auto"} p={"5"} >
                            <Box w={"100%"} display={"flex"} m={"auto"} >
                                <Image src={auth.avatar} w={"10%"} h={"10%"} />
                                <Textarea size={"sm"} border={"1px solid black"} _hover={{ border: "1px solid black" }} focusBorderColor="coral" placeholder="Add a new comment..." value={comments} onChange={(e) => setComments(e.target.value)} />
                            </Box>
                            <Stack direction={"row"} display={"flex"} justifyContent={"flex-end"} >
                                <Button border={"none"} variant={"outline"} _hover={{ border: "none" }} onClick={() => setcommentSection(!commentSection)}>Cancel</Button>
                                <Button border={"none"} variant={"outline"} _hover={{ border: "none" }}>Comment</Button>
                            </Stack>
                        </Box>}
                        <Box display={"flex"} w={"100%"} m={"auto"} p={"5"} justifyContent={"space-between"} >
                            <Box display={"flex"} m={"auto"} w={"50%"} gap={"0.5rem"}>
                                <Image src={auth.avatar} w={"20%"} h={"20%"} />
                                <Stack gap={"auto"} direction={"column"} columnGap={"0px"}>
                                    <Text mt={"auto"} fontSize={"20px"} fontWeight={500} >{data.title}</Text>
                                    <Text mb={"auto"} >by <span style={{ fontSize: "20px", fontWeight: "500" }}>{auth.userName} <Tag mt={"1"} bgColor={"#FF7F50"} color={"white"}>Premium</Tag></span></Text>
                                </Stack>
                            </Box>
                            <Text m={"auto"} fontSize={"20px"} fontWeight={500} display={"flex"} alignItems={"center"} gap={"5px"}><ViewIcon /> {data.views}</Text>
                            <Text m={"auto"} fontSize={"20px"} fontWeight={500} display={"flex"} alignItems={"center"} gap={"5px"}><StarIcon /> {data.favorite}</Text>
                        </Box>
                        <Box w={"100%"} m={"auto"} mt={"3"}>
                            {data.tags?.length > 0 && data.tags.map((el) => {
                                return <Button variant='solid' backgroundColor={"#8FDBA7"} ml={"10px"} key={el} _hover={{ color: "none" }}>{el}</Button>
                            })}
                        </Box>
                    </Box>
                    <Box w={"40%"} border={"1px solid black"}>
                        <Box p={"5"}>
                            <Box display={"flex"} alignItems={"center"} gap={"1"}>
                                <Text fontSize={"md"} fontWeight={500}>More by {data.username}</Text>
                                <Tag bgColor={"#FF7F50"} color={"white"}>Premium</Tag>
                            </Box>
                            <Grid>

                            </Grid>
                        </Box>
                    </Box>
                </Stack >
            </Box >
        }
    </Box >
}
export default SingleProduct;
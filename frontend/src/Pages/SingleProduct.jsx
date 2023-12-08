import { Box, Button, HStack, IconButton, Image, Stack, Link as ChakraLink, Text, VStack, Spinner, Icon, Tag, Textarea, Grid, Flex, GridItem } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { StarIcon, ChatIcon, DownloadIcon, ViewIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { useSelector } from "react-redux";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const SingleProduct = () => {
    const { id } = useParams();
    const theme = useSelector(store => store.authReducer.theme);
    const userName = useSelector(store => store.authReducer.userName);
    const userID = useSelector(store => store.authReducer.userID);
    const avatar = useSelector(store => store.authReducer.avatar);
    const fetchThedata = () => {
        fetch(`https://artsphere.onrender.com/arts/${id}`, {
            method: "GET",
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InBhcmFzIiwiaWF0IjoxNjk5MTA5MDAzLCJleHAiOjE2OTk3MTM4MDN9.J6J2TNTFERx0Cs1PUpuQUSjtRU4mQVYLLd6Coy7wXuY"
            }
        })
            .then((res) => res.json())
            .then((res) => {
                setData(res[0])
                fetchTheComments(res[0]._id);
                otherData(res[0].category);
            })
            .catch((err) => console.log(err))
    }
    const fetchTheComments = (id) => {
        fetch(`https://artsphere.onrender.com/comments/${id}`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then((res) => res.json())
            .then((res) => setComments(res))
            .catch((err) => console.log(err))
    }
    const [data, setData] = useState();
    const [otherArt, setOtherArt] = useState();
    const [commentSection, setcommentSection] = useState(false);
    const [commentInput, setCommentInput] = useState("");
    const [comments, setComments] = useState();
    console.log(comments);
    const postComment = () => {
        const payload = {
            body: commentInput,
            postId: data._id,
            userID: localStorage.getItem("userID"),
            username: userName,
            userAvatar: avatar,
            time: Date()
        }
        fetch(`https://artsphere.onrender.com/comments/${data._id}/create`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`,
                "Content-type": "application/json"
            },
            body: JSON.stringify(payload)
        })
            .then((res) => res.json())
            .then((res) => {
                setComments(res)
                setCommentInput("");
            })
            .catch((err) => console.log(err))
    }
    const otherData = (category) => {
        const url = `https://artsphere.onrender.com/arts/all/?category=${category}`
        fetch(url, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then((res) => res.json())
            .then((res) => setOtherArt(res.reverse()))
            .catch((err) => console.log(err))
    }
    const loader = () => {
        setTimeout(() => {
            setLoading(false);
        }, 1000)
    }
    useEffect(() => {
        loader();
        fetchThedata();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const [loading, setLoading] = useState(true);
    return <Box bgColor={theme === "dark" ? "#15191E" : "#edf2f7"} color={theme === "dark" ? "white" : "black"}>
        {!comments ?
            <Flex height="80vh" align="center" justify="center" >
                <Image src="https://i.ibb.co/68zbKqX/output-onlinegiftools.gif" w={"10%"} h={"10%"} />
            </Flex> :
            <Box w={"90%"} m={"auto"} p={"1rem"}>
                <Stack display={"flex"} direction={["column", "column", "row", "row", "row"]} justifyContent={"center"}>
                    <Box w={["90%", "90%", "60%", "60%", "60%"]} m={["auto", "auto", "auto", "1rem", "1rem"]} position={"relative"} justifyContent={"center"} textAlign={"center"} >
                        <LazyLoadImage src={data.image} effect="blur" alt={data.title} style={{ margin: "auto", justifySelf: "center" }} />
                        {data.premium === true && <Text position={"absolute"} letterSpacing={"1px"} top={0} left={0} bgColor={"#FF7F50"}>PREMIUM</Text>}
                        <Stack display={"flex"} w={"100%"} mt={"1rem"} direction={"row"} justifyContent={"space-between"}>
                            <HStack>
                                <Button leftIcon={<AiOutlineStar />} bgColor={"#FF7F50"} color={"white"} _hover={{ bgColor: "none" }} _active={{ transform: "scale(0.95)" }}>Add to Favourites</Button>
                                <Button leftIcon={<BiCommentDetail />} bgColor={"#8FDBA7"} _hover={{ bgColor: "none" }} onClick={() => setcommentSection(!commentSection)} _active={{ transform: "scale(0.95)" }}>Comments</Button>
                            </HStack>
                            <HStack>
                                <ChakraLink href={data.image} rel="norefferer noopener" target="_blank" >
                                    <IconButton icon={<DownloadIcon color={"white"} />} bgColor={"#FF7F50"} _hover={{ bgColor: "none" }} _active={{ transform: "scale(0.95)" }} />
                                </ChakraLink>
                            </HStack>
                        </Stack>
                        {commentSection && <Box w={"100%"} m={"auto"} p={"5"} >
                            <Box w={"100%"} display={"flex"} m={"auto"} gap={"0.5rem"}>
                                <Image src={avatar} w={"10%"} h={"10%"} />
                                <Textarea size={"sm"} border={"1px solid black"} _hover={{ borderColor: "none" }} focusBorderColor="coral" placeholder="Add a new comment..." value={commentInput} onChange={(e) => setCommentInput(e.target.value)} borderColor={theme === "dark" ? "white" : "black"} />
                            </Box>
                            <Stack direction={"row"} display={"flex"} justifyContent={"flex-end"} >
                                <Button border={"none"} variant={"outline"} _hover={{ border: "none" }} color={theme === "dark" ? "white" : "black"} onClick={() => setcommentSection(!commentSection)}>Cancel</Button>
                                <Button border={"none"} variant={"outline"} _hover={{ border: "none" }} color={theme === "dark" ? "white" : "black"} onClick={postComment} disabled={commentInput === ""}>Comment</Button>
                            </Stack>
                        </Box>}
                        <Box display={"flex"} w={"100%"} m={"auto"} p={"5"} justifyContent={"space-between"} >
                            <Box display={"flex"} m={"auto"} w={"50%"} gap={"0.5rem"}>
                                <Image src={data.useravatar} w={"20%"} h={"20%"} />
                                <Stack gap={"auto"} direction={"column"} columnGap={"0px"}>
                                    <Text mt={"auto"} fontSize={"20px"} fontWeight={500} >{data.title}</Text>
                                    <Text mb={"auto"} >by {data.username}</Text>
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
                        <Box m={"1rem"}>
                            {comments?.length == 0 && <Box h={"20vh"} display={"flex"} alignItems={"center"} justifyContent={"center"} >
                                <Text textAlign={"center"} fontSize={"xl"} fontWeight={500}>No comments are present, be first to comment on this post.</Text>
                            </Box>
                            }
                            {comments.length > 0 && comments.map((el) => {
                                return <Box w={"100%"} m={"3px"} p={"5"} border={"1px solid"} borderColor={theme == "dark" ? "white" : "black"} borderRadius={"10px"} >
                                    <Box w={"100%"} display={"flex"} m={"auto"} gap={"1rem"} alignItems={"center"}>
                                        <Image src={el.userAvatar} w={"10%"} h={"10%"} />
                                        <VStack w={"50%"} align={"flex-start"}>
                                            <Text>{el.username}</Text>
                                            <Text>{el.body}</Text>
                                        </VStack>
                                        <Text w={"40%"}>
                                            Commented at:- {el.time}
                                        </Text>
                                    </Box>
                                </Box>
                            })}
                        </Box>
                    </Box>
                    <Box w={["90%", "90%", "40%", "40%", "40%"]} >
                        <Box p={"5"}>
                            <Box display={"flex"} alignItems={"center"} gap={"1"}>
                                <Text fontSize={"md"} fontWeight={500}>More in this category</Text>
                            </Box>
                            <Grid templateColumns={"repeat(3,1fr)"} gap={"0.5rem"}>
                                {otherArt?.length > 0 && otherArt.map((el) => {
                                    return <GridItem key={el._id}>
                                        <LazyLoadImage src={el.image} className="div-img" alt={el.title} effect="blur" />
                                        <Text className="title">{el.title}</Text>
                                        <HStack className="opacity">
                                            <Text display={"flex"} alignItems={"center"} gap={"5px"}>{el.views} <ViewIcon /></Text>
                                            <Text display={"flex"} alignItems={"center"} gap={"5px"}>{el.favorite} <StarIcon /></Text>
                                        </HStack>
                                    </GridItem>
                                })}
                            </Grid>
                        </Box>
                    </Box>
                </Stack>
            </Box>
        }
    </Box>
}
export default SingleProduct;
import { Link as RouteLink } from "react-router-dom"
import { Box, Stack, Image, Input, InputGroup, InputRightElement, Button, IconButton, Link as ChakraLink } from "@chakra-ui/react"
import { useState } from "react";
import { SearchIcon, SunIcon, MoonIcon } from "@chakra-ui/icons";

const Navbar = () => {
    const [search, setSearch] = useState("");
    const [theme, setTheme] = useState("dark");
    const changeTheme = () => {
        setTheme(theme == "dark" ? "light" : "dark")
    }
    return <Box w={"100%"} bgColor={theme == "dark" ? "black" : "white"} color={theme == "dark" ? "white" : "black"}>
        <Stack w={"90%"} m={"auto"} direction={"row"} display={"flex"} justifyContent={"space-between"} alignItems={"center"} p={"1"}>
            <Image src="https://firebasestorage.googleapis.com/v0/b/festive-crayon.appspot.com/o/Posts%2FCraft_Ideas1-removebg.png029b92d9-75e9-48d1-b100-5b790f007a6c?alt=media&token=b496407b-289a-45d6-952d-9bb82d176b81" alt="logo" objectFit={"cover"} w={"10%"} />
            <InputGroup w={"30%"}>
                <Input value={search} placeholder="Search" focusBorderColor="coral" onChange={(e) => setSearch(e.target.value)} />
                <InputRightElement >
                    <IconButton icon={<SearchIcon />} size={"sm"} p={"1"} />
                </InputRightElement>
            </InputGroup>
            <Box display={"flex"} justifyContent={"space-between"} w={"16%"} alignItems={"center"}>
                <IconButton icon={theme == "dark" ? <SunIcon /> : <MoonIcon />} fontSize={"2xl"} onClick={changeTheme} />
                <Button>
                    <ChakraLink as={RouteLink} style={{ textDecoration: "none", fontSize: "xl" }}>Subscibe</ChakraLink>
                </Button>
                <Button>
                    <ChakraLink style={{ textDecoration: "none" }}>Login</ChakraLink>
                </Button>
            </Box>
        </Stack>
    </Box>
}
export default Navbar;
import React, { useState } from 'react'
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage'
import { v4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { storage } from '../Redux/firebase';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Radio,
  RadioGroup,
  Select,
  Stack,
} from '@chakra-ui/react'
import axios from 'axios';
import { FaRegTimesCircle } from "react-icons/fa";

const AddPost = () => {
  const theme = useSelector(store => store.authReducer.theme);
  const avatar = useSelector(store => store.authReducer.avatar);
  const [tag, setTag] = useState("");

  const dispatch = useDispatch();

  const { image, title, tags, premium, category } = useSelector(store => {
    return {
      image: store.postReducer.image,
      title: store.postReducer.title,
      tags: store.postReducer.tags,
      premium: store.postReducer.premium,
      category: store.postReducer.category
    }
  })

  const postPicHandler = e => {
    const imagePathInFirebase = e.target.files[0].name + v4()
    const imageRef = ref(storage, `Posts/${imagePathInFirebase}`)
    uploadBytes(imageRef, e.target.files[0]).then(() => {
      listAll(ref(storage, 'Posts/')).then(res => {
        res.items.forEach(el => {
          if (el._location.path_ === `Posts/${imagePathInFirebase}`) {
            getDownloadURL(el).then(url => {
              dispatch({ type: 'IMAGE', payload: url });
              console.log(url);
            })
          }
        })
      })
    })
  }

  const loadImage = (e) => {
    const inputFile = document.getElementById("file-input-addpost");
    const previewImg = document.getElementById("preview-img-addpost");
    let file = inputFile.files[0];
    if (!file) {
      return
    }
    previewImg.src = URL.createObjectURL(file);
    postPicHandler(e);
  }

  const tagHandler = () => {
    dispatch({ type: "TAG", payload: tag });
    setTag(prev => prev = "");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://artsphere.onrender.com/arts/add", {
      image,
      title,
      tags,
      category,
      premium,
      views: 0,
      favorite: 0,
      userID: localStorage.getItem("userID") || "anonymous",
      username: localStorage.getItem("userName"),
      useravatar: avatar
    }, {
      headers: {
        "Content-type": "application/json",
        "authorization": `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then(res => {
        console.log("upload response :", res.data);
        dispatch({ type: "REMOVE" })
      })
      .catch(err => {
        console.log(err.message);
      })
    console.log({ image, title, tags, category, premium });
  }

  const handleRemoveTag = (i) => {
    const newTag = [...tags];

    newTag.splice(i, 1);

    dispatch({ type: "REMTAG", payload: newTag });
  }

  return (
    <Box bgColor={theme === "dark" ? "#15191E" : "#edf2f7"} color={theme === "dark" ? "white" : "black"}>
      <Box mx="auto" w="95%">
        <Stack mx="auto" justifyContent="space-between" direction={["column-reverse", "column-reverse", "column-reverse", "row ", "row"]} w="75%">
          <form onSubmit={handleSubmit}>
            <FormControl style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <FormLabel>Title</FormLabel>
              <Input onChange={(e) => { dispatch({ type: "TITLE", payload: e.target.value }) }} type='text' value={title} boxShadow="outline" />
              <FormLabel>Category</FormLabel>
              <Select onChange={(e) => { dispatch({ type: "CATAGORY", payload: e.target.value }) }} bgColor={theme === "dark" ? "#15191E" : "#edf2f7"} color={theme === "dark" ? "white" : "black"} placeholder='Select option' boxShadow="outline">
                <option value='AIArt' style={{ backgroundColor: `${theme}` === "dark" ? "#15191E" : "#f0eded" }}>AIArt</option>
                <option value='Digital Art' style={{ backgroundColor: `${theme}` === "dark" ? "#15191E" : "#f0eded" }}>Digital Art</option>
                <option value='Fan Art' style={{ backgroundColor: `${theme}` === "dark" ? "#15191E" : "#f0eded" }}>Fan Art</option>
                <option value='Photography' style={{ backgroundColor: `${theme}` === "dark" ? "#15191E" : "#f0eded" }}>Photography</option>
                <option value='Fantasy' style={{ backgroundColor: `${theme}` === "dark" ? "#15191E" : "#f0eded" }}>Fantasy</option>
                <option value='Anime' style={{ backgroundColor: `${theme}` === "dark" ? "#15191E" : "#f0eded" }}>Anime</option>
                <option value='Nature' style={{ backgroundColor: `${theme}` === "dark" ? "#15191E" : "#f0eded" }}>Nature</option>
                <option value='Drawings' style={{ backgroundColor: `${theme}` === "dark" ? "#15191E" : "#f0eded" }}>Drawings</option>
              </Select>
              <FormLabel>Choose Art</FormLabel>
              <Input onChange={loadImage} id='file-input-addpost' type='file' boxShadow="outline" />
              <FormLabel>Tags</FormLabel>
              <Box display={"flex"} gap={"5px"} direction={"row"}>
                {tags?.map((el, i) => <Box display={"flex"} alignItems={"center"} padding={"10px"} key={i}>{el} <FaRegTimesCircle onClick={() => { handleRemoveTag(i) }} /></Box>)}
              </Box>
              <InputGroup size="md">
                <Input onChange={(e) => { setTag(e.target.value) }} value={tag} type='text' boxShadow="outline" />
                <InputRightElement w="4.5rem">
                  <Button size="md" onClick={tagHandler}>Add Tag</Button>
                </InputRightElement>
              </InputGroup>
              <FormLabel>Version</FormLabel>
              <RadioGroup onChange={(e) => { dispatch({ type: "VERSION", payload: e }) }}>
                <Stack direction='row'>
                  <Radio value='free'>Free</Radio>
                  <Radio value='premium'>Premium</Radio>
                </Stack>
              </RadioGroup>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Button type='submit' value="Add Post">Add Post</Button>
              </div>
            </FormControl>
          </form>
          <Box boxSize={["sm", "sm", "lg", "lg", "lg"]} mx="auto">
            <Image id='preview-img-addpost' src='https://placehold.co/600x400' alt='Dan Abramov' mx="auto" />
          </Box>
        </Stack>
      </Box>
    </Box>
  )
}

export default AddPost

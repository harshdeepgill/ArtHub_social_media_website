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
  HStack
} from '@chakra-ui/react'
import axios from 'axios'

const AddPost = () => {

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
    setTag("");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://gifted-kit-cow.cyclic.app/arts/add", {
      image,
      title,
      tags,
      category,
      premium,
      views: 0,
      favorite: 0,
      // userID: "6544ed8e677444857d9d6228"
    }, {
      headers: {
        "Content-type": "application/json",
        "authorization": `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then(res => {
        console.log("upload response :", res.data);
      })
      .catch(err => {
        console.log(err.message);
      })
    console.log({ image, title, tags, category, premium });
  }

  return (
    <Box mx="auto" w="95%">
      <HStack mx="auto" direction={"row"} w="95%">
        <form onSubmit={handleSubmit}>
          <FormControl style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <FormLabel>Title</FormLabel>
            <Input onChange={(e) => { dispatch({ type: "TITLE", payload: e.target.value }) }} type='text' value={title} boxShadow="outline" />
            <FormLabel>Category</FormLabel>
            <Select onChange={(e) => { dispatch({ type: "CATAGORY", payload: e.target.value }) }} placeholder='Select option' boxShadow="outline">
              <option value='AI Art'>AI Art</option>
              <option value='Digital Art'>Digital Art</option>
              <option value='Fan Art'>Fan Art</option>
              <option value='Photography'>Photography</option>
              <option value='Fantasy'>Fantasy</option>
              <option value='Anime'>Anime</option>
            </Select>
            <FormLabel>Choose Art</FormLabel>
            <Input onChange={loadImage} id='file-input-addpost' type='file' boxShadow="outline" />
            <FormLabel>Tags</FormLabel>
            <Box>
              {tags.split(" ")?.map((el, i) => <Box key={i}>{el}</Box>)}
            </Box>
            <InputGroup size="md">
              <Input onChange={(e) => { setTag(e.target.value) }} type='text' boxShadow="outline" />
              <InputRightElement w="4.5rem">
                <Button size="md" mr="1rem" onClick={tagHandler}>Add Tag</Button>
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
        <Box w="50%" boxSize='lg'>
          <Image id='preview-img-addpost' src='https://placehold.co/600x400' alt='Dan Abramov' />
        </Box>
      </HStack>
    </Box>
  )
}

export default AddPost

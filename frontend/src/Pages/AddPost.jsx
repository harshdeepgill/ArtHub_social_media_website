import React from 'react';
import {ref, uploadBytes, listAll, getDownloadURL} from "firebase/storage";
import {v4} from "uuid";
import { useDispatch } from 'react-redux';
import { storage } from '../Redux/firebase';

const AddPost = () => {

const dispatch = useDispatch();

const postPicHandler = e => {
  const imagePathInFirebase = e.target.files[0].name + v4()
  const imageRef = ref(storage, `Posts/${imagePathInFirebase}`)
  uploadBytes(imageRef, e.target.files[0]).then(() => {
    listAll(ref(storage, 'Posts/'))
    .then(res => {
      res.items.forEach(el => {
        if (el._location.path_ === `Posts/${imagePathInFirebase}`) {
          getDownloadURL(el)
          .then(url => {
            dispatch({ type: 'IMAGE', payload: url })
            alert('image uploaded!')
            console.log(url)
          })
        }
      })
    })
  })
}



  return (
    <div>
        <input onChange={postPicHandler}  type='file'/>
    </div>
  )
}

export default AddPost
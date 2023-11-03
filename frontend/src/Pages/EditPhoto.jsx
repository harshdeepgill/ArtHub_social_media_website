import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { FaArrowRotateLeft, FaArrowRotateRight } from "react-icons/fa6";
import { TbFlipVertical, TbFlipHorizontal } from "react-icons/tb";
import {ref, uploadBytes, listAll, getDownloadURL} from "firebase/storage";
import {v4} from "uuid";
import { storage } from '../Redux/firebase';

const EditPhoto = () => {
    // const [slider, setSlider] = useState(100);
    const [filter, setFilter] = useState("");

    const [brightness, setBrightness] = useState(100);
    const [saturation, setSaturation] = useState(100);
    const [inversion, setInversion] = useState(0);
    const [grayscale, setGrayscale] = useState(0);
    const [rotate, setRotate] = useState(0);
    const [flipHorizontal, setFlipHorizontal] = useState(1);
    const [flipVertical, setFlipVertical] = useState(1);


    const handleFileInput = () => {
        const inputFile = document.getElementById("file-input");
        inputFile.click();
    }

    const loadImage = () => {
        const inputFile = document.getElementById("file-input");
        const previewImg = document.getElementById("preview-img");
        let file = inputFile.files[0];
        if (!file) {
            return
        }
        previewImg.src = URL.createObjectURL(file);
    }

    const handleDefault = () => {
        setBrightness(100);
        setSaturation(100);
        setInversion(0);
        setGrayscale(0);
        setRotate(0);
        setFlipHorizontal(1);
        setFlipVertical(1);
    }

    const postPicHandler = (img) => {
        const imagePathInFirebase = v4()
        const imageRef = ref(storage, `Posts/${imagePathInFirebase}`)
        uploadBytes(imageRef, img).then(() => {
          listAll(ref(storage, 'Posts/'))
          .then(res => {
            res.items.forEach(el => {
              if (el._location.path_ === `Posts/${imagePathInFirebase}`) {
                getDownloadURL(el)
                .then(url => {
                //   dispatch({ type: 'IMAGE', payload: url })
                  alert('image uploaded!')
                  console.log(url)
                })
              }
            })
          })
        })
      }

    const handleSaveImage = () => {
        const canvas = document.getElementById("image-canvas");
        const previewImg = document.getElementById("preview-img");
        const ctx = canvas.getContext("2d");

        canvas.width = previewImg.naturalWidth;
        canvas.height = previewImg.naturalHeight;

        if(rotate !== 0){
            ctx.rotate(rotate * Math.PI/180);
        }
        ctx.translate(canvas.width/2, canvas.height/2)
        ctx.scale(flipHorizontal, flipVertical);
        ctx.filter = `brightness(${brightness}%) saturate(${saturation}%) invert(${inversion}%) grayscale(${grayscale}%)`
        ctx.drawImage(previewImg, -canvas.width /2, -canvas.height/ 2, canvas.width, canvas.height);
        
        const link = document.createElement("a");
        const abc  = ctx.getImageData(0, 0,canvas.width, canvas.height );
        postPicHandler(abc);

    }


  return (
    <div style={{padding:"40px"}}>
        <h2>Image Editor</h2>
        <DIV>
            <div>
                <EDITORPANNEL>
                    <TITLEDIV>
                        <label>Title</label>
                        <input type="text" />
                        <label>Tags</label>
                        <input type="text" />
                        <button>Add</button>
                    </TITLEDIV>
                        <label >Filters</label>
                    <SLIDER>
                        <div>
                            <p>Brightness</p>
                            <p>{brightness}%</p>
                        </div>
                        <input onChange={(e) => {setBrightness(e.target.value)}} type="range" value={brightness} min={"0"} max={"200"} id='input-slider' />
                        <div>
                            <p>Saturation</p>
                            <p>{saturation}%</p>
                        </div>
                        <input onChange={(e) => {setSaturation(e.target.value)}} type="range" value={saturation} min={"0"} max={"200"} id='input-slider' />
                        <div>
                            <p>Inversion</p>
                            <p>{inversion}%</p>
                        </div>
                        <input onChange={(e) => {setInversion(e.target.value)}} type="range" value={inversion} min={"0"} max={"100"} id='input-slider' />
                        <div>
                            <p>Grayscale</p>
                            <p>{grayscale}%</p>
                        </div>
                        <input onChange={(e) => {setGrayscale(e.target.value)}} type="range" value={grayscale} min={"0"} max={"100"} id='input-slider' />
                    </SLIDER>
                    <ROTATE>
                        <label>Rotate & Flip</label>
                        <div>
                            <button onClick={()=> {setRotate(prev => prev-90)}}>
                                <FaArrowRotateLeft/>
                            </button>
                            <button onClick={()=> {setRotate(prev => prev+90)}}>
                                <FaArrowRotateRight/>
                            </button>
                            <button onClick={()=> {setFlipHorizontal(prev => {return(prev == 1 ? -1 : 1)})}}>
                                <TbFlipVertical/>
                            </button>
                            <button onClick={()=> {setFlipVertical(prev => {return(prev == 1 ? -1 : 1)})}}>
                                <TbFlipHorizontal/>
                            </button>
                        </div>
                    </ROTATE>
                </EDITORPANNEL>
                <IMGDIV>
                    <IMG flipHorizontal={flipHorizontal} flipVertical={flipVertical} rotate={rotate} brightnes={brightness} saturation={saturation} inversion={inversion} grayscale={grayscale} id='preview-img' src="https://placehold.co/600x400" alt="" /> 
                    <canvas hidden id='image-canvas'></canvas>
                </IMGDIV>

            </div>
            <BOTTOMDIV>
            <button onClick={handleDefault}>Restore Defaults</button>
                    <div>
                        <input onChange={loadImage} type="file" id='file-input' accept='image/*' hidden />
                        <button onClick={handleFileInput}>Choose Image</button>
                        <button onClick={handleSaveImage}>Save Image</button>
                    </div>
                </BOTTOMDIV>
            </DIV>
        </div>
    )
}

export default EditPhoto

const TITLEDIV = styled.div`
    
    &>label{
        display: block;
        font-size: 14px;
    }
    &>input{
        height: 30px;
        outline: none;
        border: 1px solid #6C757D;
        padding: 10px;
    }
`

const IMG = styled.img`
    filter: brightness(${props => props.brightnes}%) saturate(${props => props.saturation}%) invert(${props => props.inversion}%) grayscale(${props => props.grayscale}%);
    transform: rotate(${props => props.rotate}deg) scale(${props => props.flipHorizontal}, ${props => props.flipVertical});
`

const DIV = styled.div`
    min-height: 75vh;

    &>div:nth-child(1){ //main flexed div
        display: flex;
        margin: 20px 0;
    }
`

const EDITORPANNEL = styled.div`
    width: 43rem;

    &>label{
        font-size: 15px;
    }
`

const OPTIONS = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    
    & button{
        height: 40px;
        font-size: 14px;
        color: #6C757D;
        width: calc(100%/2 - 7px);
        margin-bottom: 14px;
        border: 1px solid #aaa;
        background-color: white;
    }
`

const SLIDER = styled.div`
    font-size: 14px;

    &>div{
        display: flex;
        justify-content: space-between;
    }

    &>input{
        accent-color: var(--color-primary);
        width: 100%;
        height: 8px;
    }
`

const ROTATE = styled.div`
    
    &>label{
        font-size: 14px;
    }
    &>div{
        display: flex;
        justify-content: space-between;
    }
    & button{
        width: calc(100%/4 - 14px);
        height: 55px;
        background-color: white;
        border: 1px solid #ccc;
        font-size: 25px;
        color: #6C757D;
    }
`

const IMGDIV = styled.div`
    margin-left: 20px;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    &>img{
        max-width: 500px;
        max-height: 525px;
        object-fit: contain;
        width: 100%;
        height: 100%;
    }
`


const BOTTOMDIV = styled.div`
    display: flex;
    justify-content: space-between;

    & button {
        height:40px;
        font-size: 14px;
        color: #6C757D;
        border: 1px solid #aaa;
        background-color: white;
        width: 140px;
    }

    & div{
        display: flex;
        gap: 20px;
    }
`
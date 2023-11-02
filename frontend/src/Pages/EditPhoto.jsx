import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { FaArrowRotateLeft, FaArrowRotateRight } from "react-icons/fa6";
import { TbFlipVertical, TbFlipHorizontal } from "react-icons/tb";


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
        if(!file){
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


  return (
    <div style={{padding:"4rem"}}>
        <h2>Image Editor</h2>
        <DIV>
            <div>
                <EDITORPANNEL>
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
                </IMGDIV>
            </div>
            <BOTTOMDIV>
            <button onClick={handleDefault}>Restore Defaults</button>
                    <div>
                        <input onChange={loadImage} type="file" id='file-input' accept='image/*' hidden />
                        <button onClick={handleFileInput}>Choose Image</button>
                        <button>Save Image</button>
                    </div>
            </BOTTOMDIV>
        </DIV>
    </div>
  )
}

export default EditPhoto

const IMG = styled.img`
    filter: brightness(${props => props.brightnes}%) saturate(${props => props.saturation}%) invert(${props => props.inversion}%) grayscale(${props => props.grayscale}%);
    transform: rotate(${props => props.rotate}deg) scale(${props => props.flipHorizontal}, ${props => props.flipVertical});
`

const DIV = styled.div`
    min-height: 75vh;

    &>div:nth-child(1){ //main flexed div
        display: flex;
        margin: 2rem 0;
    }
`

const EDITORPANNEL = styled.div`
    width: 43rem;

    &>label{
        font-size: 1.5rem;
    }
`

const OPTIONS = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    
    & button{
        height: 4rem;
        font-size: 1.4rem;
        color: #6C757D;
        width: calc(100%/2 - 0.7rem);
        margin-bottom: 1.4rem;
        border: 1px solid #aaa;
        background-color: white;
    }
`

const SLIDER = styled.div`
    font-size: 1.4rem;

    &>div{
        display: flex;
        justify-content: space-between;
    }

    &>input{
        accent-color: var(--color-primary);
        width: 100%;
        height: 0.8rem;
    }
`

const ROTATE = styled.div`
    
    &>label{
        font-size: 1.4rem;
    }
    &>div{
        display: flex;
        justify-content: space-between;
    }
    & button{
        width: calc(100%/4 - 1.4rem);
        height: 5.5rem;
        background-color: white;
        border: 1px solid #ccc;
        font-size: 2.5rem;
        color: #6C757D;
    }
`

const IMGDIV = styled.div`
    margin-left: 2rem;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    &>img{
        max-width: 50rem;
        max-height: 52.5rem;
        object-fit: contain;
        width: 100%;
        height: 100%;
    }
`


const BOTTOMDIV = styled.div`
    display: flex;
    justify-content: space-between;

    & button {
        height: 4rem;
        font-size: 1.4rem;
        color: #6C757D;
        border: 1px solid #aaa;
        background-color: white;
        width: 14rem;
    }

    & div{
        display: flex;
        gap: 2rem;
    }
`
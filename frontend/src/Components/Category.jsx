import React from 'react';
import styled from 'styled-components'

export const Category = () => {

    return <DIV>
        <div id="category">
            <div className='box'>
                <div className="inner-box">
                    <div className="pic">
                        <div className='child bg-one'></div>
                    </div>
                </div>
                <h4>Vectors</h4>
            </div>
            <div className='box'>
                <div className="inner-box">
                    <div className="pic">
                        <div className='child bg-two'></div>
                    </div>
                </div>
                <h4>Vectors</h4>
            </div>
            <div className='box'>
                <div className="inner-box">
                    <div className="pic">
                        <div className='child bg-three'></div>
                    </div>
                </div>
                <h4>Vectors</h4>
            </div>
            <div className='box'>
                <div className="inner-box">
                    <div className="pic">
                        <div className='child bg-four'></div>
                    </div>
                </div>
                <h4>Vectors</h4>
            </div>
            <div className='box'>
                <div className="inner-box">
                    <div className="pic">
                        <div className='child bg-five'></div>
                    </div>
                </div>
                <h4>Vectors</h4>
            </div>

        </div>

    </DIV>

}

const DIV = styled.div`
    

#category{
    width: 95%;
    display: flex;
    justify-content: space-evenly;
    width: 85%;
    margin: auto;
}
.box{
    margin: auto;
    text-align: center;
}
.inner-box{
    width: 180px;
    height: 95px;
    border-radius: 20px;
    border: 2px solid black;
    margin: auto;
}
.pic{
    width: 170px;
    height: 85px;
    border-radius: 20px;
    overflow: hidden;
    position: relative;
    display: inline-block;
    cursor: pointer;
    padding: 3px;
    margin:2px;
}
.child{
    width: 100%;
    height: 100%;
    transition: 1.1s all;
    background-size:cover;
    margin:auto;
    border-radius: 20px;
}

.bg-one{
    background-image: url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b6a4b47a-f4a6-44b3-a9c2-87fccad05c51/dftuxt2-54c9ecb1-9e7e-441c-9998-ccad41ba0a29.jpg/v1/fit/w_375,h_250,q_70,strp/nights_in_quadratum_by_caelynxcosplay_dftuxt2-375w.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2I2YTRiNDdhLWY0YTYtNDRiMy1hOWMyLTg3ZmNjYWQwNWM1MVwvZGZ0dXh0Mi01NGM5ZWNiMS05ZTdlLTQ0MWMtOTk5OC1jY2FkNDFiYTBhMjkuanBnIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.HPHlEjs3tCnLAuyg0PBtrgBDcYygGLMG6bujfLbKUI8);
    object-fit:cover;
    object-position: center;
}

.bg-two{
    background-image: url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f2b10ed1-1af0-4c09-8e36-52f5129417cb/dgcasmq-db4845a0-e4d0-4457-957a-9a66d2d683c7.png/v1/fill/w_255,h_200,q_70,strp/the_fallen_by_chikiwi2016_dgcasmq-200h.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2YyYjEwZWQxLTFhZjAtNGMwOS04ZTM2LTUyZjUxMjk0MTdjYlwvZGdjYXNtcS1kYjQ4NDVhMC1lNGQwLTQ0NTctOTU3YS05YTY2ZDJkNjgzYzcucG5nIiwiaGVpZ2h0IjoiPD02MjgiLCJ3aWR0aCI6Ijw9ODAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLndhdGVybWFyayJdLCJ3bWsiOnsicGF0aCI6Ilwvd21cL2YyYjEwZWQxLTFhZjAtNGMwOS04ZTM2LTUyZjUxMjk0MTdjYlwvY2hpa2l3aTIwMTYtNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.cYuaBvUySDMMEIpYsO_wgTQBiYfYpPbX8ja3VB76tbQ);
}
.bg-three{
    background-image: url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f7bdc15d-4655-4e62-ab73-b33a12c92f7b/dgblt3e-5713f72c-2598-479a-bb39-c155af4fe8ac.jpg/v1/fill/w_276,h_350,q_70,strp/pumpkin_cake_picnic_by_eevanikunen_dgblt3e-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcL2Y3YmRjMTVkLTQ2NTUtNGU2Mi1hYjczLWIzM2ExMmM5MmY3YlwvZGdibHQzZS01NzEzZjcyYy0yNTk4LTQ3OWEtYmIzOS1jMTU1YWY0ZmU4YWMuanBnIiwid2lkdGgiOiI8PTgwNyJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.PTXdAz-gZmCcTdJuf9NcTL8jQC5Xh788QydXGklOr9E);
}
.bg-four{
    background-image: url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/033606f5-f3e5-4d42-a573-b68a562e3769/dgdk9sp-d5caa90f-4a00-4662-9ecf-6d076ea392f2.jpg/v1/fit/w_750,h_1128,q_70,strp/wednesday_addams_by_rinokocosplay_dgdk9sp-375w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTkyNCIsInBhdGgiOiJcL2ZcLzAzMzYwNmY1LWYzZTUtNGQ0Mi1hNTczLWI2OGE1NjJlMzc2OVwvZGdkazlzcC1kNWNhYTkwZi00YTAwLTQ2NjItOWVjZi02ZDA3NmVhMzkyZjIuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.uDoHKjxBA6gD6zmxcjP1Z8uwN2fXwrlMzxCK_Q-NUTU);
}
.bg-five{
    background-image: url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d125df43-37f9-4450-a601-50d3aa7fa501/dgbydya-caa6ae29-2c4c-4403-9bee-144ce7d39781.png/v1/fill/w_836,h_956,q_70,strp/halloween_stitch_by_tsaoshin_dgbydya-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTIwMCIsInBhdGgiOiJcL2ZcL2QxMjVkZjQzLTM3ZjktNDQ1MC1hNjAxLTUwZDNhYTdmYTUwMVwvZGdieWR5YS1jYWE2YWUyOS0yYzRjLTQ0MDMtOWJlZS0xNDRjZTdkMzk3ODEucG5nIiwid2lkdGgiOiI8PTEwNTAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.p2frmsJ7IsONchKrj_jLcaclE0gyrRDxJpUAlpNpYBY);
}
.pic:hover .child{
    transform: scale(1.4);
}

`
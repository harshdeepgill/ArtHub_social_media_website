import React from 'react'
// import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';

// type:"Basic",
//     price:"0",
//     MonetiztionFees:"12.5%",
//     storage:20,
//     AccessMonetization:false,
//     commissionFees:3,
//     freeMonthlyPrompt:20,
//     platformFees:15,
//     createPrivateCollections:true,
//     ArtProtect:true,
//     analyticsAndInsight:false,
export default function PricingCard({type,price,MonetiztionFees,storage,AccessMonetization,commissionFees,analyticsAndInsight,ArtProtect,freeMonthlyPrompt,platformFees,createPrivateCollections}) {
  return (
    <div className='container'>
        {/* <PriceCard className='priceCard'>
        <h2>{type}</h2>
        <h4>${price}</h4>
        <button>{price=="0"?"Get Started":"Upgrade"}</button>
        
        <div className='priceCardDetails'>
        <p>{MonetiztionFees} Monetization Fee</p>
        <p>{storage}GB storage</p>
        <p>{commissionFees}% Commission Fee</p>
        <p>{freeMonthlyPrompt} Free Monthly Prompts</p>
        <p>{platformFees}% Platform Fee</p>
        <p>{ArtProtect?"Art Protect":""}</p>
        </div>
        
      
        </PriceCard>
        
        */}
        <div className='row row-cols-2 row-cols-md-3 my-5 d-flex justify-content-center align-items-center'>
            <div className='col w-75'>
                <div className='card text-center '>
                    <div className='card-header'>
                        <h4 className='fw-normal'>{type}</h4>
                    </div>
                    <div className='card-body'>
                        <h1 className='card-title'>
                            {price}₹/Month
                        </h1>
                        <ul className='list-unstyled py-3'>
                            <li>{MonetiztionFees} Monetization Fee</li>
                            <li>{storage}GB storage</li>
                            <li>{commissionFees}% Commission Fee</li>
                            <li>{freeMonthlyPrompt} Free Monthly Prompts</li>
                            <li>{platformFees}% Platform Fee</li>
                            <li>{ArtProtect?"Art Protect":""}</li>
                        </ul>
                        <button className='btn text-white btn-success btn-lg w-100 btn-outline-success'>{price==="0"?"Get Started":"Upgrade"}</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
// const PriceCard=styled.div`
// margin-top: 20px;
// margin-bottom: 30px;
// border-radius: 13px;
// padding: 15px;
// background-color: #353434;
// h2{
//     font-size: 30px;
// }
// h4{
//     font-size: 25px;
// }
// button{
//     background-color: #91D9A8;
//     padding: 10px;
//     border-radius: 9px;
//     font-size: 20px;
//     font-weight: 200;
// }
// button:hover{
//     cursor: pointer;
// }
// .priceCardDetails{


//     box-sizing: border-box;
//     text-align: center;
//     padding: 10px;
//     p{
//        font-size: 15px;
      
//     }
// }

// `

// const DIV=styled.div`
// .priceCard:hover{
//     transform: scale(1.1);
//     box-shadow: rgba(194, 192, 192, 0.35) 0px 5px 15px;   
// 
//`}

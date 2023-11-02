import React from 'react'

import styled from 'styled-components'
import PricingCard from '../Components/PricingCard'



const cardDetails=[
  {
    type:"Basic",
    price:"0",
    MonetiztionFees:"12.5%",
    storage:20,
    AccessMonetization:false,
    commissionFees:3,
    freeMonthlyPrompt:20,
    platformFees:15,
    createPrivateCollections:true,
    ArtProtect:true,
    analyticsAndInsight:false,
  },
  {
    type:"Premium",
    price:"399",
    MonetiztionFees:"5.5%",
    storage:20,
    AccessMonetization:true,
    commissionFees:1.5,
    freeMonthlyPrompt:100,
    platformFees:10,
    createPrivateCollections:true,
    ArtProtect:true,
    analyticsAndInsight:true,
  },
  {
    type:"Elite",
    price:"799",
    MonetiztionFees:"2.5%",
    storage:20,
    AccessMonetization:true,
    commissionFees:0,
    freeMonthlyPrompt:"Unlimited",
    platformFees:0,
    createPrivateCollections:true,
    ArtProtect:true,
    analyticsAndInsight:true,
  }
]
export default function PricingPage() {
  return (
    <DIV >
      
      <h1>Upgrade your Plan</h1>
      <h3>Limited time offer : Get 50% OFF on plans</h3>
      <PriceContainer>
        {cardDetails.map((ele)=>{
          return <PricingCard {...ele} />
        })}
      </PriceContainer>



    </DIV>
  )
}

const DIV=styled.div`
 

  background-image: url(${"https://st.deviantart.net/eclipse/package-picker/background-sale-updated.webp?1"});
  text-align: center;
  color: white;
  padding: 10px;
  font-family: Mulish;
  h1{
    font-size: 35px;
  }
  h3{
    font-size: 20px;
  }

  
`
const PriceContainer=styled.div`
font-family:'Mulish';
display: flex;
gap:25px;
justify-content: center;

  
`
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components'
import { useSelector } from 'react-redux';

const basic = {
  type: "Basic",
  price: "0",
  MonetiztionFees: "12.5%",
  storage: 20,
  AccessMonetization: false,
  commissionFees: 3,
  freeMonthlyPrompt: 20,
  platformFees: 15,
  createPrivateCollections: true,
  ArtProtect: true,
  analyticsAndInsight: false,
};
const premium = {
  type: "Premium",
  price: "399",
  MonetiztionFees: "5.5%",
  storage: 20,
  AccessMonetization: true,
  commissionFees: 1.5,
  freeMonthlyPrompt: 100,
  platformFees: 10,
  createPrivateCollections: true,
  ArtProtect: true,
  analyticsAndInsight: true,
};

const elite = {
  type: "Elite",
  price: "799",
  MonetiztionFees: "2.5%",
  storage: 20,
  AccessMonetization: true,
  commissionFees: 0,
  freeMonthlyPrompt: "Unlimited",
  platformFees: 0,
  createPrivateCollections: true,
  ArtProtect: true,
  analyticsAndInsight: true,
}

export default function PricingPage() {
  const theme = useSelector(store => store.authReducer.theme);
  const subscription = useSelector(store => store.authReducer.subscription);

  return (
    <DIV theme={theme}>

      <h1 style={{ color: `${theme}` === "dark" ? "white" : "black" }}>Upgrade your Plan</h1>
      <h3 style={{ color: `${theme}` === "dark" ? "white" : "black" }}>Limited time offer : Get 50% OFF on plans</h3>

      <div className='row row-cols-1 row-cols-md-3 my-5 w-75 m-auto'>
        <div className='col '>
          <div className='card text-center'>
            <div className='card-header'>
              <h4 className='fw-normal'>{basic.type}</h4>
            </div>
            <div className='card-body'>
              <h1 className='card-title'>
                Free for 1st Month
              </h1>
              <ul className='list-unstyled py-3'>
                <li>{basic.MonetiztionFees} Monetization Fee</li>
                <li>{basic.storage}GB storage</li>
                <li>{basic.commissionFees}% Commission Fee</li>
                <li>{basic.freeMonthlyPrompt} Free Monthly Prompts</li>
                <li>{basic.platformFees}% Platform Fee</li>
                <li>{basic.ArtProtect ? "Art Protect" : ""}</li>
              </ul>
              <button className='btn btn-lg w-100 btn-success'>{subscription === "basic" ? "Current Plan" : subscription === "premium" ? "Change Plan" : subscription === "elite" ? "Change Plan" : ""}</button>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className='card text-center '>
            <div className='card-header'>
              <h4 className='fw-normal'>{premium.type}</h4>
            </div>
            <div className='card-body'>
              <h1 className='card-title'>
                {premium.price}₹/Month
              </h1>
              <ul className='list-unstyled py-3'>
                <li>{premium.MonetiztionFees} Monetization Fee</li>
                <li>{premium.storage}GB storage</li>
                <li>{premium.commissionFees}% Commission Fee</li>
                <li>{premium.freeMonthlyPrompt} Free Monthly Prompts</li>
                <li>{premium.platformFees}% Platform Fee</li>
                <li>{premium.ArtProtect ? "Art Protect" : ""}</li>
              </ul>
              <button className='btn btn-success btn-lg w-100 btn-success'>{subscription === "basic" ? "Upgrade" : subscription === "premium" ? "Current Plan" : subscription === "elite" ? "Change Plan" : ""}</button>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className='card text-center '>
            <div className='card-header'>
              <h4 className='fw-normal'>{elite.type}</h4>
            </div>
            <div className='card-body'>
              <h1 className='card-title'>
                {elite.price}₹/Month
              </h1>
              <ul className='list-unstyled py-3'>
                <li>{elite.MonetiztionFees} Monetization Fee</li>
                <li>{elite.storage}GB storage</li>
                <li>{elite.commissionFees}% Commission Fee</li>
                <li>{elite.freeMonthlyPrompt} Free Monthly Prompts</li>
                <li>{elite.platformFees}% Platform Fee</li>
                <li>{elite.ArtProtect ? "Art Protect" : ""}</li>
              </ul>
              <button className='btn btn-success btn-lg w-100 btn-success'>{subscription === "basic" ? "Upgrade" : subscription === "premium" ? "Upgrade" : subscription === "elite" ? "Current Plan" : ""}</button>
            </div>
          </div>
        </div>
      </div>

      <h1 className='text-center fw-normal my-5' style={{ color: `${theme}` === "dark" ? "white" : "black" }}>Compare Plan</h1>
      <div className='w-75  m-auto'>
        <table className='table text-center'>
          <thead>
            <tr>
              <th style={{ width: "34%" }}></th>
              <th style={{ width: "22%" }}>{basic.type}</th>
              <th style={{ width: "22%" }}>{premium.type}</th>
              <th style={{ width: "22%" }}>{elite.type}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Access Monetization</th>
              <td>❌</td>
              <td className='text-success fs-4 text'>&#10003;</td>
              <td className='text-success fs-4 text'>&#10003;</td>
            </tr>
            <tr>
              <th>create Private Collections</th>
              <td className='text-success fs-4 text'>&#10003;</td>
              <td className='text-success fs-4 text'>&#10003;</td>
              <td className='text-success fs-4 text'>&#10003;</td>
            </tr>
            <tr>
              <th>ArtProtect</th>
              <td className='text-success fs-4 text'>&#10003;</td>
              <td className='text-success fs-4 text'>&#10003;</td>
              <td className='text-success fs-4 text'>&#10003;</td>
            </tr>
            <tr>
              <th>analytics And Insight</th>
              <td>❌</td>
              <td className='text-success fs-4 text'>&#10003;</td>
              <td className='text-success fs-4 text'>&#10003;</td>
            </tr>
          </tbody>
        </table>
      </div>
    </DIV>
  )
}

const DIV = styled.div`
  text-align: center;
  color: white;
  padding: 10px;
  font-family: Mulish;
  padding-bottom: 50px;
  padding-top: 50px;
  background: ${props => props.theme === "dark" ? "#15191E" : "#edf2f7"};

  h1{
    font-size: 35px;
  }
  h3{
    font-size: 20px;
  }
`;
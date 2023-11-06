import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from '../Pages/Home';
import EditPhoto from '../Pages/EditPhoto';
import AddPost from '../Pages/AddPost';
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ArtPage from "../Pages/Artpage";
import SingleProduct from '../Pages/SingleProduct';
import { PrivateRouter } from './PrivateRoute';
import UserPage from '../Pages/UserPage';
import PricingPage from '../Pages/PricingPage';
import Search from "../Pages/Search";


const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/arts" element={
          <ArtPage />
        } />
        <Route path='/user' element={
          <PrivateRouter>
            <UserPage/>
          </PrivateRouter>
        } />
        <Route path='/edit' element={
          <PrivateRouter>
            <EditPhoto />
          </PrivateRouter>
        } />
        <Route path='/upload' element={
          <PrivateRouter>
            <AddPost />
          </PrivateRouter>
        } />
        <Route path='/plans' element={<PricingPage />} />
        <Route path='/search' element={<Search />} />
        <Route path='/art/:id' element={
          <PrivateRouter>
            <SingleProduct />
          </PrivateRouter>
        } />
      </Routes>
    </div>
  )
}

export default AllRoutes
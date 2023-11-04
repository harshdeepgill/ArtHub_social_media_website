import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from '../Pages/Home';
import EditPhoto from '../Pages/EditPhoto';
import AddPost from '../Pages/AddPost';
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ArtPage from "../Pages/Artpage";
import Plans from "../Pages/Plans";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/art" element={<ArtPage />} />
        <Route path='/edit' element={<EditPhoto />} />
        <Route path='/upload' element={<AddPost />} />
        <Route path='/plans' element={<Plans />} />
      </Routes>
    </div>
  )
}

export default AllRoutes
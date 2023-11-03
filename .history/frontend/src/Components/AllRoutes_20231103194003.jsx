import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from '../Pages/Home';
import EditPhoto from '../Pages/EditPhoto';
import Login from '../Pages/Login';
import Register from '../Pages/Register';

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='upload' element={<EditPhoto />} />
      </Routes>
    </div>
  )
}

export default AllRoutes
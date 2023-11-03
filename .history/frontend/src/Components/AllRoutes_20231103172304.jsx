import React from 'react'
import {Route, Routes} from "react-router-dom";
import Home from '../Pages/Home';
import EditPhoto from '../Pages/EditPhoto';

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            {/* <Route path='/login' element={<Login/>}/> */}
            <Route path='upload' element={<EditPhoto/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes
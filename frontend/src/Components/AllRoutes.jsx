import React from 'react'
import {Route, Routes} from "react-router-dom";
import Home from '../Pages/Home';
import EditPhoto from '../Pages/EditPhoto';
import AddPost from '../Pages/AddPost';

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            {/* <Route path='/login' element={<Login/>}/> */}
            <Route path='upload' element={<AddPost/>}/>
            <Route path='edit' element={<EditPhoto/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes
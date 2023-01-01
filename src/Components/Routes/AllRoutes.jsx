import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home/Home'
import Login from '../Login/Login'
import Register from '../Register/Register'

const AllRoutes = () => {

    return (
        <>    
            <Routes>
            <Route path='/' element={<Register />} />
            <Route path='/home' element={<Home />} />
            <Route path='/login' element={<Login />} />
            </Routes>
        </>
    )
}

export default AllRoutes

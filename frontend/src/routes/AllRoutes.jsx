import React from 'react'
import {Route,Routes} from "react-router-dom"
import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Profile from '../pages/Profile'
import Feehistory from '../pages/Feehistory'
import Timetable from '../pages/Timetable'
import PrivateRoute from '../private/PrivateRoute'

const AllRoutes = () => {
  return (
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/profile" element={<PrivateRoute><Profile/></PrivateRoute>}/>
    <Route path="/feehistory" element={<PrivateRoute><Feehistory/></PrivateRoute>}/>
    <Route path="/timetable" element={<PrivateRoute><Timetable/></PrivateRoute>}/>
  </Routes>
  )
}

export default AllRoutes
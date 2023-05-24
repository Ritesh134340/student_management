import React from 'react'
import {Navigate} from "react-router-dom"
import {useSelector} from "react-redux"

const PrivateRoute = ({children}) => {
  const token=useSelector((state)=>state.AuthReducer.token)
  if(!token){
    return <Navigate to="/login" />
  }
  else{
     return children
  }
}

export default PrivateRoute
import * as types from "./actionTypes"
import axios from "axios"

export const login=(payload)=>(dispatch)=>{
    dispatch({type:types.LOGIN_REQUEST})
    return axios.post(`${process.env.REACT_APP_SERVER_ADDRESS}/auth/login`,payload)
    .then((res)=>{
 
      return dispatch({type:types.LOGIN_SUCCESS,payload:res.data,status:res.status})
    })
    .catch((err)=>{
    
        return dispatch({type:types.LOGIN_FAILURE,status:err.response.status,mesg:err.response.data.mesg})
    })
}




export const signup=(payload)=>(dispatch)=>{
  dispatch({type:types.SIGNUP_REQUEST})
  return axios.post(`${process.env.REACT_APP_SERVER_ADDRESS}/auth/signup`,payload)
  .then((res)=>{
    return dispatch({type:types.SIGNUP_SUCCESS,payload:res.data,status:res.status})
  })
  .catch((err)=>{
      return dispatch({type:types.SIGNUP_FAILURE,status:err.response.status,mesg:err.response.data.mesg})
  })
}


export const logout=()=>(dispatch)=>{
  return dispatch({type:types.LOGOUT_REQUEST})
}


export const getProfile=(userId)=>(dispatch)=>{
  dispatch({type:types.GET_PROFILE_REQUEST})
  return axios.get(`${process.env.REACT_APP_SERVER_ADDRESS}/auth/profile/${userId}`)
  .then((res)=>{
  return dispatch({type:types.GET_PROFILE_SUCCESS,status:res.status,payload:res.data})
  })
  .catch((err)=>{
    return dispatch({type:types.GET_PROFILE_FAILURE,status:err.response.status,mesg:err.response.data.mesg})
  })
}

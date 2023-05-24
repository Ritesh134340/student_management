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


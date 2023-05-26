import React from 'react'
import * as types from "./actionTypes"
const data=JSON.parse(localStorage.getItem("studentData")) || {}
const authToken=data?.token || ""

const initialState={
    loading:false,
    error:false,
    token:authToken,
    userData:data,
    profile:{}
}

const reducer = (state=initialState,action) => {
    const {type,payload} = action;
     switch (type) {
        case types.LOGIN_REQUEST : return {...state,loading:true,error:false}
        case types.LOGIN_SUCCESS : 
        localStorage.setItem("studentData",JSON.stringify(payload.studentData))
        return {...state,loading:false,error:false,token:payload.studentData.token,userData:payload.studentData}

        case types.LOGIN_FAILURE : return {...state,loading:false,error:true}


        case types.SIGNUP_REQUEST : return {...state,loading:true,error:false}
        case types.SIGNUP_SUCCESS : return {...state,loading:false,error:false}
        case types.SIGNUP_FAILURE : return {...state,loading:false,error:true}


        case types.LOGOUT_REQUEST :
            localStorage.removeItem("studentData")
             return {...state,token:""}


       case types.GET_PROFILE_REQUEST : return {...state,loading:true,error:false}
       case types.GET_PROFILE_SUCCESS : return {...state,loading:false,error:false,profile:payload}
       case types.GET_PROFILE_FAILURE : return {...state,loading:false,error:true}

        default: return state;
     }
}

export {reducer}
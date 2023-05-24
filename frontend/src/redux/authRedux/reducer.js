import React from 'react'
import * as types from "./actionTypes"
const myToken=localStorage.getItem("studentToken")

const initialState={
    loading:false,
    error:false,
    token:myToken || ""
}

const reducer = (state=initialState,action) => {
    const {type,payload} = action;
     switch (type) {
        case types.LOGIN_REQUEST : return {...state,loading:true,error:false}
        case types.LOGIN_SUCCESS : 
        localStorage.setItem(JSON.stringify("studentData",payload.studentData))
        return {...state,loading:false,error:false}
        case types.LOGIN_FAILURE : return {...state,loading:false,error:true}


        case types.SIGNUP_REQUEST : return {...state,loading:true,error:false}
        case types.SIGNUP_SUCCESS : return {...state,loading:false,error:false}
        case types.SIGNUP_FAILURE : return {...state,loading:false,error:true}


        default: return state;
     }
}

export {reducer}
import axios from "axios"
import * as types from "./actionTypes"

export const addHomework=(payload)=>(dispatch)=>{
    dispatch({type:types.ADD_HOME_WORK_REQUEST})
   return  axios.post(`${process.env.REACT_APP_SERVER_ADDRESS}/app/add/homework`,payload)
    .then((res)=>{
        return dispatch({type:types.ADD_HOME_WORK_SUCCESS,payload:res.data,status:res.status})
    })
    .catch((err)=>{
        return dispatch({type:types.ADD_HOME_WORK_FAILURE,status:err.response.status,mesg:err.response.data.mesg})
    })
}


export const addTimetable=(payload)=>(dispatch)=>{
    dispatch({type:types.ADD_TIME_TABLE_REQUEST})
    return axios.post(`${process.env.REACT_APP_SERVER_ADDRESS}/app/add/timetable`,payload)
    .then((res)=>{
    return   dispatch({type:types.ADD_TIME_TABLE_SUCCESS,payload:res.data,status:res.status})
    })
    .catch((err)=>{
    return dispatch({type:types.ADD_TIME_TABLE_FAILURE,status:err.response.status,mesg:err.response.data})
    })
}
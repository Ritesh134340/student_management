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


export const getPaymenthistory=(payload)=>(dispatch)=>{
    dispatch({type:types.PAYMENT_HISTORY_REQUEST})
    return axios.get(`${process.env.REACT_APP_SERVER_ADDRESS}/app/payments/history`,payload)
    .then((res)=>{
       return dispatch({type:types.PAYMENT_HISTORY_SUCCESS,status:res.status,payload:res.data})
    })
    .catch((err)=>{
        return dispatch({type:types.PAYMENT_HISTORY_FAILURE,status:err.response.status,mesg:err.response.data.mesg})
    })
}




export const getHomeworkData=(payload)=>(dispatch)=>{
    dispatch({type:types.HOMEWORK_DATA_REQUEST});
    return axios.get(`${process.env.REACT_APP_SERVER_ADDRESS}/app/homework/data`,payload)
    .then((res)=>{
    
      return dispatch({type:types.HOMEWORK_DATA_SUCCESS,payload:res.data,status:res.status})
    })
    .catch((err)=>{
       return  dispatch({type:types.HOMEWORK_DATA_FAILURE,status:err.response.status,mesg:err.response.data.mesg})
    })
}


export const getTimetableData=(payload)=>(dispatch)=>{
  
    dispatch({type:types.GET_TIMETABLE_DATA_REQUEST});
    return axios.get(`${process.env.REACT_APP_SERVER_ADDRESS}/app/timetable/data`,payload)
    .then((res)=>{
       
        return dispatch({type:types.GET_TIMETABLE_DATA_SUCCESS,payload:res.data,status:res.status})
      })
    .catch((err)=>{
        return  dispatch({type:types.GET_TIMETABLE_DATA_FAILURE,status:err.response.status,mesg:err.response.data.mesg})
     })
}
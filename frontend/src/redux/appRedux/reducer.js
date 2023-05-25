import React from 'react'
import * as types from "./actionTypes"
const initialState={
   loading:false,
   error:false,
   homeworkData:[]

}

const reducer = (state=initialState,action) => {
    const {type,payload} = action;
     switch (type) {
       
         case types.ADD_HOME_WORK_REQUEST : return {...state,loading:true,error:false}
         case types.ADD_HOME_WORK_SUCCESS : return {...state,loading:false,error:false}
         case types.ADD_HOME_WORK_FAILURE : return {...state,loading:false,error:true}


         case types.ADD_TIME_TABLE_REQUEST : return {...state,loading:true,error:false}
         case types.ADD_TIME_TABLE_SUCCESS : return {...state,loading:false,error:false}
         case types.ADD_TIME_TABLE_FAILURE : return {...state,loading:false,error:true}




        default: return state;
     }
}

export {reducer}
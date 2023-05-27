
import * as types from "./actionTypes"
const initialState={
   loading:false,
   error:false,
   paymentData:[],
   homeworkData:{},
   timetable:{}
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



         case types.PAYMENT_HISTORY_REQUEST : return {...state,loading:true,error:false}
         case types.PAYMENT_HISTORY_SUCCESS : return {...state,loading:false,error:false,paymentData:payload.feeHistory}
         case types.PAYMENT_HISTORY_FAILURE : return {...state,loading:false,error:true}


         case types.HOMEWORK_DATA_REQUEST : return {...state,loading:true,error:false}
         case types.HOMEWORK_DATA_SUCCESS : return {...state,loading:false,error:false,homeworkData:payload}
         case types.HOMEWORK_DATA_FAILURE : return {...state,loading:false,error:true}




         case types.GET_TIMETABLE_DATA_REQUEST :
      
         return {...state,loading:true,error:false}
         case types.GET_TIMETABLE_DATA_SUCCESS :
        
         return {...state,loading:false,error:false,timetable:payload.timetable}
         case types.GET_TIMETABLE_DATA_FAILURE :
         
         return {...state,loading:false,error:true}




        default: return state;
     }
}

export {reducer}
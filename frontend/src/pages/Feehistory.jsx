import React,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from "react-redux"
import { getPaymenthistory } from '../redux/appRedux/action'
import Loading from '../components/Loading'
import {useNavigate} from "react-router-dom"

const Feehistory = () => {
  const navigate=useNavigate()
  const token=useSelector((state)=>state.AuthReducer.token)
  const loading=useSelector((state)=>state.AppReducer.loading)
  const dispatch=useDispatch()
  const paymentData=useSelector((state)=>state.AppReducer.paymentData)

   useEffect(()=>{
      if(paymentData.length>0){
        return 
      }
       const payload={headers:{'Authorization':`Bearer ${token}`}}
       dispatch(getPaymenthistory(payload))
   },[])

   const  handleLink=(status)=>{
    if(status!=="Paid"){
      navigate("/payment")
    }
   }

  return (
   loading ? <Loading/> :<div>
 <h2
          style={{
            width: "30%",
            margin: "auto",
            textAlign: "center",
            marginTop: "20px",
            paddingBottom: "8px",
            borderBottom: "0.5px solid gray",
            color: "gray",
          }}
        >
         Payment History
        </h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",width:"66%",margin:"auto",marginTop:"50px",marginBottom:"30px",gap:"45px 35px"}}>
     
     {
       paymentData && paymentData.map((ele)=>{
         return (
         <div key={ele._id} style={{borderRadius:"8px",boxShadow:" rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",padding:"15px 25px 10px 25px"}}>
            <p style={{fontSize:"21px",fontWeight:"700"}}>{ele.month}</p>
            <p><span style={{fontSize:"19px",fontWeight:"600"}}>Amount : </span>{ele.amount}</p>
            <p style={{marginBottom:"35px",color:`${ele.status==="Paid" ? "green" : "red"}`,fontWeight:"bold"}}>{ele.status}</p>
          

            <button onClick={()=>handleLink(ele.status)} disabled={ele.status==="Paid"} style={{margin:"auto",marginBottom:"10px",display:"block",borderRadius:"4px",padding:"5px 8px",outline:"none",border:"none",color:"white",
            cursor:"pointer",
            backgroundColor:`${ele.status==="Paid"? "gray":"blue"}`,fontWeight:"600"}}>  {ele.status==="Paid" ? "Paid" : "Pay Now"}</button>
            
           
         </div>)
       })
     }
   </div>

   </div> 
  )
}

export default Feehistory
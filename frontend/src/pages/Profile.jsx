import React,{useEffect,useState} from 'react'
import { getProfile } from '../redux/authRedux/action'
import {useDispatch,useSelector} from "react-redux"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../components/Loading';

const Profile = () => {
  const userProfile=useSelector((state)=>state.AuthReducer.profile)
  const userData=useSelector((state)=>state.AuthReducer.userData)
  const dispatch=useDispatch()
  const loading=useSelector((state)=>state.AuthReducer.loading);

  useEffect(()=>{
    if(Object.keys(userProfile).length>0){
      return;
    }
   dispatch(getProfile(userData?.id))
  },[])
  const date = userProfile?.updatedAt;
  const created = date ? new Date(date).toLocaleDateString() : '';
 
  return (
   loading ? <Loading/> : <div>
      <div style={{margin:"auto",marginTop:"50px",padding:"15px  20px 20px 15px",width:"35%",boxShadow:" rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}}>
         <h3 style={{textAlign:"center",paddingBottom:"10px",borderBottom:"0.2px solid gray",marginBottom:"20px"}}>User Profile Details</h3>
         <p><span style={{fontSize:"18px",paddingRight:"5px"}}>Reg No :</span>{userProfile._id}</p>
         <p><span style={{fontSize:"18px",paddingRight:"5px"}}>Name : </span>{userProfile.name}</p>
         <p><span style={{fontSize:"18px",paddingRight:"5px"}}>Email :</span>{userProfile.email}</p>
         <p><span style={{fontSize:"18px",paddingRight:"5px"}}>Reg Date :</span>{created}</p>
      </div>
      <ToastContainer/>
    </div>
  )
}

export default Profile
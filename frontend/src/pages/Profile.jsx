import React,{useEffect,useState} from 'react'
import { getProfile } from '../redux/authRedux/action'
import {useDispatch,useSelector} from "react-redux"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../components/Loading';

const Profile = () => {
  const [userProfile,setUserProfile]=useState({})
  const userData=useSelector((state)=>state.AuthReducer.userData)
  const dispatch=useDispatch()
  const loading=useSelector((state)=>state.AuthReducer.loading);

  useEffect(()=>{
   dispatch(getProfile(userData?.id))
   .then((res)=>{
    if(res.status===200){
     setUserProfile(res.payload)
    }
    else{
      toast.error(res.mesg, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }
   })
  },[])


  return (
   loading ? <Loading/> : <div>
      <div style={{margin:"auto",marginTop:"30px",padding:"15px  20px 20px 15px",width:"30%",boxShadow:" rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}}>
         <p><span style={{fontSize:"18px",paddingRight:"5px"}}>Name : </span>{userProfile.name}</p>
         <p><span style={{fontSize:"18px",paddingRight:"5px"}}>Email :</span>{userProfile.email}</p>
      </div>
      <ToastContainer/>
    </div>
  )
}

export default Profile
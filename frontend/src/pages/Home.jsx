import React, { useState,useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Userdashboard from "../components/Userdashboard";
import Homeworkform from "../components/Homeworkform";
import Timetableform from "../components/Timetableform";
import Loading from "../components/Loading";

const Home = () => {
  const token = useSelector((state) => state.AuthReducer.token);
  const loading=useSelector((state)=>state.AppReducer.loading)
  
  if (token) {
    return (
      loading ? <Loading/> :<div>
         <Userdashboard/>
         <ToastContainer/>
      </div>
    );
  }

  return (
    <div>
      <h2
        style={{
          width: "30%",
          margin: "auto",
          textAlign: "center",
          marginTop: "28px",
          paddingBottom: "13px",
          borderBottom: "2px solid gray",
          color: "gray",
        }}
      >
        Admin Dashboard
      </h2>


      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px",
        }}
      >
       <Homeworkform/>
       <Timetableform/>
      </div>
      <ToastContainer/>
    </div>
  );
  
};

export default Home;

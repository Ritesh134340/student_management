import React,{useEffect } from 'react'
import { getHomeworkData } from '../redux/appRedux/action'
import { useSelector,useDispatch } from "react-redux";

const Userdashboard = () => {
    const dispatch=useDispatch()
    const token = useSelector((state) => state.AuthReducer.token);
    const homeworkData=useSelector((state)=>state.AppReducer.homeworkData)
    const profile=useSelector((state)=>state.AuthReducer.userData)
   

    useEffect(()=>{
        if(Object.keys(homeworkData).length>0){
          return 
        }
        const payload={
          headers:{'Authorization':`Bearer ${token}`}
        }
       dispatch(getHomeworkData(payload))
      },[])

      function getRandomColor() {
        const red = Math.floor(Math.random() * 256);    
        const green = Math.floor(Math.random() * 256); 
        const blue = Math.floor(Math.random() * 256);   
      
        const color = `rgb(${red}, ${green}, ${blue})`;
        return color;
      }
      
     
     
      

  return (
    <div>
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
          Student Dashboard
        </h2>
        <div style={{backgroundColor:"#F1F6F9",margin:"auto",marginTop:"30px",width:"70%",padding:"20px 15px 20px 15px",borderRadius:"8px",boxShadow: "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"}}>
          <p style={{marginBottom:"0px",fontSize:"18px"}}><span style={{fontWeight:"600"}}>Name : </span>{profile?.name?.toUpperCase()}</p>
          <p style={{fontSize:"15px",fontWeight:"600",marginTop:"5px"}}><span>Email : </span>{profile.email}</p>
          <p style={{marginBottom:"0px"}}><span style={{fontWeight:"600"}}>Class  : </span>{profile.className}</p>
          <p style={{marginBottom:"0px"}}><span style={{fontWeight:"600"}}>Roll no  : </span>{profile.rollNo}</p>
        </div>
        <p style={{width:"70%",margin:"auto",marginTop:"50px",marginBottom:"35px",fontSize:"21px",fontWeight:"bold"}}>Today's Homework</p>
         { 
          homeworkData?.subjects && homeworkData.subjects.map((ele)=>{
            const randomColor = getRandomColor();
            return(
               <div key={ele._id} style={{width:"70%",color:"white",backgroundColor:`${randomColor}`,borderRadius:"8px",padding:"15px",margin:"auto",marginBottom:"25px"}}>
               <p style={{fontSize:"25px",fontWeight:"600"}}>{ele.sub}</p>
               <p style={{fontSize:"18px"}}>{ele.homework}</p>
               </div>
            )
           })
           }
        </div>
  )
}

export default Userdashboard
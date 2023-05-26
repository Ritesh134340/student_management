import React, { useState} from "react";
import { useSelector,useDispatch } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {addTimetable } from "../redux/appRedux/action";

const Timetableform = () => {
    const dispatch=useDispatch()
    const [day,setDay]=useState("")
    const [tsub,setTsub]=useState("")
    const [tStd,setTStd]=useState("")
    const [ins,setInst]=useState("")
    const [startTime,setStartTime]=useState("")
  
    const [endTime,setEndTime]=useState("")
    const [tpayload, setTPayload] = useState([]);
    const date = new Date().toLocaleDateString();
    const token = useSelector((state) => state.AuthReducer.token);

    const handleSubmitTimeTable=(e)=>{
        e.preventDefault();
         
       }

    const handleDayAdd=(e)=>{
        e.preventDefault();
        if(!day || !tStd || !tsub || !ins || !startTime || !endTime){
          toast.warn("Please fill all details!", {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
          return ;
        }
    
        const obj = {
          subject:tsub,
          day:day,
          startTime:startTime,
          endTime:endTime,
          instructor:ins
        };
    
        const index = tpayload.findIndex((ele) => ele.day === obj.day);
    
        if (index !== -1) {
          const updatedPayload = [...tpayload];
          updatedPayload[index] = obj;
          setTPayload(updatedPayload);
          toast.success("Timetable added!", {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
          
            
        } else {
          setTPayload([...tpayload, obj]);
          toast.success("Homework added!", {
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
      }
    
  return (
    <div
    style={{
      width: "35%",
      margin: "auto",
      marginTop: "38px",
      padding: "25px 25px 25px 25px",
      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      borderRadius: "8px",
    }}
  >
    <p
      style={{
        margin: "auto",
        textAlign: "center",
        color: "gray",
        fontWeight: "bold",
        paddingBottom: "35px",
        fontSize: "18px",
      }}
    >
      Add Time Table
    </p>

    <form>
      <div
        style={{
          margin: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          padding: "5px 3px",
          width: "100%",
        }}
      >
        <select
          name="class"
          style={{
            padding: "5px 10px",
            borderRadius: "4px",
            outline: "none",
          }}
          value={tStd}
          onChange={(e)=>setTStd(e.target.value)}
        >
          <option value="#">Select Class</option>
          <option value="I">I</option>
          <option value="II">II</option>
          <option value="III">III</option>
          <option value="IV">IV</option>
          <option value="V">V</option>
          <option value="VI">VI</option>
        </select>
        <select
          name="tsubject"
          style={{
            padding: "5px 10px",
            borderRadius: "4px",
            outline: "none",
          }}
          onChange={(e) => setDay(e.target.value)}
          value={day}
        >
          <option value="#">Day</option>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
          <option value="Sunday">Sunday</option>
        </select>
        <select
          name="subject"
          style={{
            padding: "5px 10px",
            borderRadius: "4px",
            outline: "none",
          }}
          value={tsub}
          onChange={(e) => setTsub(e.target.value)}
         
        >
          <option value="#">Subject</option>
          <option value="Hindi">Hindi</option>
          <option value="English">English</option>
          <option value="Science">Science</option>
          <option value="Mathematics">Mathematics</option>
          <option value="Social">Social</option>
          <option value="Music">Music</option>
        </select>
      </div>
      <label>Instructor</label><br/>
       <input value={ins} type="text" onChange={(e)=>setInst(e.target.value)}/>
      <br />
      <label>Start Time</label><br/>
       <input type="time" value={startTime} onChange={(e)=>setStartTime(e.target.value)} />
      <br />
      <label>End Time</label><br/>
       <input value={endTime} onChange={(e)=>setEndTime(e.target.value)} type="time" />
      <br />
      <button onClick={handleDayAdd}>Add</button>
      <button onClick={handleSubmitTimeTable}>Submit</button>
    </form>
  </div>
  )
}

export default Timetableform
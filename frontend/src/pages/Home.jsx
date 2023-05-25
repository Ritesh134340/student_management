import React, { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addHomework,addTimetable } from "../redux/appRedux/action";

const Home = () => {
  const dispatch=useDispatch()
  const [day,setDay]=useState("")
  const [tsub,setTsub]=useState("")
  const [tStd,setTStd]=useState("")
  const [ins,setInst]=useState("")
  const [startTime,setStartTime]=useState("")
  const [endTime,setEndTime]=useState("")
  const [std, setStd] = useState("");
  const [subject, setSubject] = useState("");
  const [homeWorkText, setHomeWorkText] = useState("");
  const token = useSelector((state) => state.AuthReducer.token);
  const date = new Date().toLocaleDateString();
  const [payload, setPayload] = useState([]);
  const [tpayload, setTPayload] = useState([]);
  console.log(tpayload)
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

  const handleSubjectAdd = (e) => {
    e.preventDefault();
    if(!subject || !homeWorkText){
      toast.warn("Please fill required data!", {
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
      sub: subject,
      homework: homeWorkText,
    };

    const index = payload.findIndex((ele) => ele.subject === obj.subject);

    if (index !== -1) {
      const updatedPayload = [...payload];
      updatedPayload[index] = obj;
      setPayload(updatedPayload);
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
        setSubject("")
        setHomeWorkText("")
    } else {
      setPayload([...payload, obj]);
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
        setSubject("")
        setHomeWorkText("")
    }
  };
 

 const handleSubmitHomeWork=(e)=>{
   e.preventDefault()
   if(!std || !date || payload.length===0){
    toast.warn("Required field can't be empty!", {
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
   const data={
      className:std,
      date:date,
      subjects:payload
   }
   dispatch(addHomework(data)).then((res)=>{
    if(res.status===201){
      setSubject("")
      setHomeWorkText("")
      setStd("")
      setPayload([])
      alert(res.payload.mesg)
    }
    else{
     alert(res.mesg)
    }
 
   })


 }

  if (token) {
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
          Student Dashboard
        </h2>
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
            Add Home Work for {date}
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
                value={std}
                onChange={(e)=>setStd(e.target.value)}
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
                name="subject"
                style={{
                  padding: "5px 10px",
                  borderRadius: "4px",
                  outline: "none",
                }}
                onChange={(e) => setSubject(e.target.value)}
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

            <textarea
              value={homeWorkText}
              onChange={(e) => setHomeWorkText(e.target.value)}
              style={{
                borderRadius: "5px",
                paddingLeft: "10px",
                marginTop: "20px",
                marginBottom: "15px",
                outline: "none",
                paddingTop: "10px",
                width: "100%",
              }}
              name="english"
              cols="30"
              rows="6"
              placeholder="Enter home work for selected subject..."
            ></textarea>
            <br />
            <button onClick={handleSubjectAdd}>Add</button>
            <button onClick={handleSubmitHomeWork}>Submit</button>
          </form>
        </div>

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

      </div>
      <ToastContainer/>
    </div>
  );
};

export default Home;

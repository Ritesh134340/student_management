import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addTimetable } from "../redux/appRedux/action";
import { updateTimetable } from "../utils/updatedtable";
import { formatTime } from "../utils/formattime";

const Timetableform = () => {
  const dispatch = useDispatch();
  const [day, setDay] = useState("");
  const [sub, setSub] = useState("");
  const [std, setStd] = useState("");
  const [ins, setInst] = useState("");
  const [stTime, setStartTime] = useState("");
  const [enTime, setEndTime] = useState("");
  const [payload, setPayload] = useState({});

  

  const handleSubmitTimeTable = (e) => {
    e.preventDefault();
    if (!std || !sub || !day || !setDay || !stTime || !enTime || !ins) {

       
      toast.error("Please fill all details !", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      return;
    }
     

    dispatch(addTimetable(payload)).then((res) => {
      if (res.status === 201) {
        toast.success(res.payload.mesg, {
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
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    let startTime = formatTime(stTime);
    let endTime = formatTime(enTime);

    if (!std || !sub || !day || !setDay || !startTime || !endTime || !ins) {
      toast.error("Please fill all details !", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }

    const data = updateTimetable(std, sub, day, startTime, endTime, ins);

    setPayload(data);
    toast.success("Data Modified,click submit to update !", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

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
        Update Time Table
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
            onChange={(e) => setStd(e.target.value)}
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
            name="day"
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
            name="sub"
            style={{
              padding: "5px 10px",
              borderRadius: "4px",
              outline: "none",
            }}
            value={sub}
            onChange={(e) => setSub(e.target.value)}
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
        <label>Instructor</label>
        <br />
        <input
          value={ins}
          type="text"
          onChange={(e) => setInst(e.target.value)}
        />
        <br />

        <label>Start Time</label>
        <br />
        <input
          type="time"
          value={stTime}
          onChange={(e) => {
            setStartTime(e.target.value);
          }}
        />
        <br />
        <label>End Time</label>
        <br />
        <input
          value={enTime}
          onChange={(e) => {
            setEndTime(e.target.value);
          }}
          type="time"
        />
        <br />
        <button onClick={handleUpdate} style={{margin:"auto",marginBottom:"10px",marginRight:"15px",
        marginTop:"20px",borderRadius:"4px",padding:"5px 8px",outline:"none",border:"none",color:"white",
             cursor:"pointer",
             backgroundColor:"teal",fontWeight:"600"}}>Update</button>
        <button onClick={handleSubmitTimeTable}  style={{margin:"auto",marginBottom:"10px",borderRadius:"4px",padding:"5px 8px",outline:"none",border:"none",color:"white",
             cursor:"pointer",
             backgroundColor:"teal",fontWeight:"600"}}>Submit</button>
      </form>
    </div>
  );
};

export default Timetableform;

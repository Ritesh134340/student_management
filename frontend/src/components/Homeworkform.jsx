import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addHomework } from "../redux/appRedux/action";

const Homeworkform = () => {
  const dispatch = useDispatch();
  const [payload, setPayload] = useState([]);
  const date = new Date().toLocaleDateString();
  const [homeWorkText, setHomeWorkText] = useState("");
  const [std, setStd] = useState("");
  const [subject, setSubject] = useState("");

  const handleSubjectAdd = (e) => {
    e.preventDefault();
    if (!subject || !homeWorkText) {
      toast.warn("Please fill required details !", {
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
    const obj = {
      sub: subject,
      homework: homeWorkText,
    };

    const index = payload.findIndex((ele) => ele.sub === obj.sub);

    if (index !== -1) {
      const updatedPayload = [...payload];
      updatedPayload[index] = obj;
      setPayload(updatedPayload);
      toast.success("Data added,click on submit to add !", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setSubject("");
      setHomeWorkText("");
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
      setSubject("");
      setHomeWorkText("");
    }
  };

  const handleSubmitHomeWork = (e) => {
    e.preventDefault();
    if (!std || !date || payload.length === 0) {
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
      return;
    }
    const data = {
      className: std,
      date: date,
      subjects: payload,
    };
    dispatch(addHomework(data)).then((res) => {
      if (res.status === 201) {
        setSubject("");
        setHomeWorkText("");
        setStd("");
        setPayload([]);
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
        Update Home Work for {date}
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
        <button onClick={handleSubjectAdd} style={{margin:"auto",marginBottom:"10px",marginRight:"15px",borderRadius:"4px",padding:"5px 8px",outline:"none",border:"none",color:"white",
             cursor:"pointer",
             backgroundColor:"teal",fontWeight:"600"}}>Add</button>
        <button onClick={handleSubmitHomeWork}  style={{margin:"auto",marginBottom:"10px",borderRadius:"4px",padding:"5px 8px",outline:"none",border:"none",color:"white",
             cursor:"pointer",
             backgroundColor:"teal",fontWeight:"600"}}>Submit</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Homeworkform;

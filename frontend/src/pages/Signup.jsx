import React,{useState} from "react";
import { Link } from "react-router-dom";
import {signup} from "../redux/authRedux/action"
import {useDispatch,useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from "../components/Loading";


const Signup = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [std,setStd]=useState("")
  const [password, setPassword] = useState("")
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const loading=useSelector((state)=>state.AuthReducer.loading)
  const handleSignup = () => {
    const payload={
      name:name,
      email:email,
      password:password,
      std:std
    }
    if(!name || !email || !password || !std){
      toast.warn("Required field can't be empty !", {
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

   dispatch(signup(payload)).then((res)=>{
   
     if(res.status===201){
   
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

        setTimeout(() => {
          navigate("/login")
        }, 1200);
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

  };

  return (
   loading ? <Loading/> : <div
      style={{
        width: "30%",
        margin: "auto",
        marginTop: "40px",
        padding: "13px 25px 30px 25px",
        boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 25px",
        borderRadius: "8px",
      }}
    >
      <h4
        style={{
          textAlign: "center",
          marginBottom: "20px",
          color: "gray",
          fontWeight: "600",
        }}
      >
        Sign Up
      </h4>
      <form>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
           
            placeholder="Enter email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <select style={{padding:"5px 10px",marginBottom:"8px",borderRadius:"5px"}} name="standard" id="standard" onChange={(e)=>setStd(e.target.value)}>
            <option value="#">Select</option>
            <option value="I">I</option>
            <option value="II">II</option>
            <option value="III">III</option>
            <option value="IV">IV</option>
            <option value="V">V</option>
            <option value="VI">VI</option>
          </select>
        </div>
        <div style={{ marginBottom: "15px" }}>
          <Link to="/login" style={{ color: "gray", textDecoration: "none" }}>
            Already have an account? Sign in
          </Link>
        </div>

        <button type="button" className="btn btn-dark" onClick={handleSignup}>
          Sign up
        </button>
      </form>
      <ToastContainer/>
    </div>
  );
};

export default Signup;

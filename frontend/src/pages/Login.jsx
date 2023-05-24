import React,{useState} from "react";
import {Link} from "react-router-dom"
import { login } from "../redux/authRedux/action";
import {useDispatch} from "react-redux"

const Login = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const dispatch=useDispatch()

    const handleLogin=()=>{
       const payload={
        email:email,
        password:password
       }
      dispatch(login(payload)).then((res)=>{
        console.log(res)
      })
    }

  return (
    <div style={{width:"30%",margin:"auto",marginTop:"80px",padding:"13px 25px 30px 25px",boxShadow:" rgba(0, 0, 0, 0.35) 0px 5px 25px",borderRadius:"8px"}}>
        <h4 style={{textAlign:"center",marginBottom:"20px",color:"gray",fontWeight:"600"}}>Log In</h4>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <div style={{marginBottom:"15px"}}>
        <Link to="/signup" style={{color:"gray",textDecoration:"none"}}>Don't have an account? Sign up</Link>
        </div>
       
        <button style={{userSelect:"none"}} type="button" className="btn btn-dark" onClick={handleLogin}>
          Log in
        </button>
      </form>
    </div>
  );
};

export default Login;

import React,{useState} from "react";
import {Link} from "react-router-dom"
import { login } from "../redux/authRedux/action";
import {useDispatch,useSelector} from "react-redux"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from "react-router-dom"
import Loading from "../components/Loading";

const Login = () => {
    const [email,setEmail]=useState("")
    const loading=useSelector((state)=>state.AuthReducer.loading)
    const [password,setPassword]=useState("")
    const dispatch=useDispatch()
    const navigate=useNavigate()

    const handleLogin=()=>{
       const payload={
        email:email,
        password:password
       }
       if(!email || !password){
        toast.warn("Email / Password can't be empty !", {
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
      dispatch(login(payload)).then((res)=>{

        if(res.status===200){
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
              navigate("/")
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
    }

  return (
    loading ? <Loading/> : <div style={{width:"27%",margin:"auto",marginTop:"80px",padding:"13px 25px 30px 25px",boxShadow:" rgba(0, 0, 0, 0.35) 0px 5px 25px",borderRadius:"8px"}}>
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
            required
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
        
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            required
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
        <div style={{marginBottom:"15px"}}>
        <Link to="/signup" style={{color:"gray",textDecoration:"none",userSelect:"none"}}>Don't have an account? Sign up</Link>
        </div>
       
        <button style={{userSelect:"none"}} type="button" className="btn btn-dark" onClick={handleLogin}>
          Log in
        </button>
      </form>
      <ToastContainer/>
    </div>
  );
};

export default Login;

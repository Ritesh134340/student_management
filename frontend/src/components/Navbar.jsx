import React from 'react'
import {Link} from "react-router-dom"
import {useSelector,useDispatch} from "react-redux"
import {useNavigate} from "react-router-dom"
import { logout } from '../redux/authRedux/action'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Navbar = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
 const token=useSelector((state)=>state.AuthReducer.token)
 const handleLogout=()=>{
  dispatch(logout())
  toast.success("Logout successful !", {
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
  return (
    <nav className="navbar navbar-expand-lg  navbar-dark bg-dark ">
    <Link to="/" className="navbar-brand">SM</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link to="/" className="nav-link">Dashboard<span className="sr-only">(current)</span></Link>
        </li>
        <li className="nav-item">
          <Link to="/timetable" className="nav-link">Time Table</Link>
        </li>
        <li className="nav-item">
          <Link to="/feehistory" className="nav-link">Fee History</Link>
        </li>
        <li className="nav-item">
          <Link to="/profile" className="nav-link">Profile</Link>
        </li>
      </ul>
     {!token &&  <span className="navbar-text">
       <Link to="/login"><button style={{marginRight:"30px",borderRadius:"5px",padding:"3px 15px",cursor:"pointer",fontWeight:"600",border:"none",outline:"none"}}>Log in</button></Link>
      </span>}

     {token && <span className="navbar-text">
      <button style={{marginRight:"30px",borderRadius:"5px",padding:"3px 15px",cursor:"pointer",fontWeight:"600",border:"none",outline:"none"}} onClick={handleLogout}>Log out</button>
      </span>}
    </div>
    <ToastContainer/>
  </nav>
  )
}

export default Navbar
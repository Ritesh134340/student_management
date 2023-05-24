import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
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
      <span className="navbar-text">
       <Link to="/login"><button style={{marginRight:"30px",borderRadius:"5px",padding:"3px 15px",cursor:"pointer",fontWeight:"600",border:"none",outline:"none"}}>Log in</button></Link>
      </span>
    </div>
  </nav>
  )
}

export default Navbar
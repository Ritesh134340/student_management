import React from 'react'
import {Link} from "react-router-dom"
const Payment = () => {
  return (
    <div style={{textAlign:"center",width:"50%",margin:"auto"}}>
        <p style={{marginTop:"150px",fontWeight:"700",fontSize:"35px"}}> Payment Page</p>
       <Link to="/feehistory">
       <button style={{margin:"auto",marginBottom:"10px",display:"block",borderRadius:"4px",padding:"5px 8px",outline:"none",border:"none",color:"white",
             cursor:"pointer",
             backgroundColor:"teal",fontWeight:"600"}}>Back</button>
       </Link>
      
    </div>
  )
}

export default Payment
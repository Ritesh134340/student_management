import React, {useState, useEffect } from "react";
import { getTimetableData } from "../redux/appRedux/action";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading";

const Timetable = () => {
  const loading = useSelector((state) => state.AppReducer.loading);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.AuthReducer.token);
  const timetableData = useSelector((state) => state.AppReducer.timetable);
  const [change,setChange]=useState({})
 
 useEffect(()=>{
  (timetableData && timetableData?.days) && setChange( timetableData?.days[0])
 },[timetableData])

  const handleChange=(selected)=>{
     
     const arr=timetableData?.days?.filter((ele)=>{
       return ele.dayName===selected
     })
     const selectedData=arr[0]
     setChange(selectedData)
  }

  useEffect(() => {
    if (Object.keys(timetableData).length > 0) {
      return;
    }
    const payload = {
      headers: { Authorization: `Bearer ${token}` },
    };
    dispatch(getTimetableData(payload));
  }, []);

  return loading ? <Loading /> : <div>
     <p style={{textAlign:"center",marginTop:"30px",borderBottom:"0.5px solid gray",paddingBottom:"15px",fontWeight:"600",fontSize:"25px"}}> <span style={{fontSize:"22px",fontWeight:"500"}}>Showing Schedule for Std. - </span>{timetableData?.className}, Day :  {change?.dayName}</p>
    
    <select  style={{
              marginLeft:"50px",
              marginBottom:"30px",
              padding: "5px 10px",
              borderRadius: "4px",
              outline: "none",
            }} id="day" onChange={(e)=>handleChange(e.target.value)}>
      
      <option value="Monday">MON</option>
      <option value="Tuesday">TUE</option>
      <option value="Wednesday">WED</option>
      <option value="Thursday">THU</option>
      <option value="Friday">FRI</option>
      <option value="Saturday">SAT</option>
   
    </select>
    <table style={{ margin: 'auto', width: '60%', borderCollapse: 'collapse', borderRadius: '8px' }}>
  <thead>
    <tr>
      {change &&
        change?.subject?.map((ele) => {
          return (
            <th
              key={ele._id}
              style={{
                fontWeight: 'bold',
                textAlign: 'center',
                backgroundColor: '#f2f2f2',
                padding: '10px',
              }}
            >
              {ele.subjectName}
            </th>
          );
        })}
    </tr>
  </thead>
  <tbody>
    <tr>
      {change &&
        change?.subject?.map((ele, index) => {
          return (
            <td
              key={ele._id}
              style={{
                backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#ffffff',
                textAlign: 'center',
                padding: '15px',
              }}
            >
              {ele.time}
            </td>
          );
        })}
    </tr>
    <tr>
      {change &&
        change?.subject?.map((ele, index) => {
          return (
            <td
              key={ele._id}
              style={{
                backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#ffffff',
                textAlign: 'center',
                padding: '15px',
              }}
            >
              {ele.ins}
            </td>
          );
        })}
    </tr>
  </tbody>
</table>

  </div>;
};

export default Timetable;

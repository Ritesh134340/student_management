import Navbar from "./components/Navbar";
import AllRoutes from "./routes/AllRoutes";
import {Link} from "react-router-dom"

function App() {
  return (
    <div style={{fontFamily:"sans-serif"}}>
      <Navbar/>
      <AllRoutes/>
    </div>
     
   
  );
}

export default App;

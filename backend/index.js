const express = require("express");
require("dotenv").config();
const app = express();
const connection =require("./config/db")

const cors = require("cors");
const PORT = process.env.PORT || 8000;

const authRouter=require("./routes/auth.route")
const appRouter=require("./routes/app.route")

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.get("/api",(req,res)=>{
    res.status(200).send("Welcome to Management Server !")
})

app.use("/api/auth",authRouter)
app.use("/api/app",appRouter)

app.listen(PORT, async() => {
    try{
        await connection;
        console.log("Connected to Database !")
    }
    catch(err){
        console.log("Database connction Error :",err)
    }
  console.log("Server is running on port :", PORT);
});

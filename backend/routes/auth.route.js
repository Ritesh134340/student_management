const {Router}=require("express")
const auth=Router();
const Student=require("../models/students.model")
const bcrypt = require('bcrypt');
const jwt=require("jsonwebtoken")

const paymentData=[
    {
     month:"May",
     status:"Paid",
     amount:1200
    },
    {
        month:"June",
        status:"Due",
        amount:1200
       },
       {
        month:"July",
        status:"Due",
        amount:1200
       },
       {
        month:"August",
        status:"Due",
        amount:1200
       },
       {
        month:"September",
        status:"Due",
        amount:1200
       }
]

auth.post("/login",async(req,res)=>{
  try{
     const {email,password} = req.body;
   
     const document=await Student.findOne({email:email})
     if(!document){
        return res.status(403).send({mesg:"User not found,please signup !"})
     }
     else{
       
        bcrypt.compare(password, document.password, async function(err, result) {
            
            if(!result){
                
                res.status(404).send({mesg:"Invalid credentials!"})
                return;
            }
          
               const  token =jwt.sign({ email:document.email,id:document._id}, process.env.SECRET_KEY);

                const payload={
                    id:document._id,
                    name:document.name,
                    email:document.email,
                    token:token,
                    className:document.className,
                    rollNo:document.rollNo
                }

                res.status(200).send({mesg:"Login successful!",studentData:payload})
        });
     }
  }
  catch(err){
    console.log("Error from login route",err)
    res.status(500).send({mesg:"Internal server error !"})
  }
   
})

auth.post("/signup",async(req,res)=>{
   const {name,email,password,std} = req.body;
    try{
        const check=await Student.findOne({email:email})

        if(check){
         res.status(409).send({mesg:"Student already registered, please login !"})
        }
        else{
            bcrypt.hash(password,3, async function(err, hash) {
               if(err){
                return res.status(500).send({mesg:"Something went wrong.Please try again !"})
               }

               const rollNo=await Student.countDocuments({className:std}) + 1

                const payload={
                    name:name,
                    email:email,
                    password:hash,
                    rollNo:rollNo,
                    className:std,  
                    feehistory:paymentData
                }
                const newStudent=new Student(payload)
                await newStudent.save()

                res.status(201).send({mesg:"Student registered successfully!"})

               
            });
        }
    }
    catch(err){
        console.log("Error from signup route",err)
        res.status(500).send({mesg:"Internal server error !"})
    }
})

auth.get("/profile/:id",async(req,res)=>{
    try{
      const userId=(req.params.id)
      const user=await Student.findOne({_id:userId})
     
      res.status(200).send(user)
    }
    catch(err){
        console.log("Error from get profile route",err)
        res.status(500).send({mesg:"Internal server error !"})
    }
})

module.exports=auth;
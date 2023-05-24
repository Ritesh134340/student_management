const {Router}=require("express")
const auth=Router();
const Student=require("../models/students.model")
const bcrypt = require('bcrypt');
const jwt=require("jsonwebtoken")



auth.post("/login",(req,res)=>{

   
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
                    className:std  
    
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

module.exports=auth;
const {Router}=require("express")
const app=Router();
const Homework=require("../models/homework.model")
const Timetable=require("../models/timetable.model");
const authenticate =require("../middlewares/authentication")
const Student=require("../models/students.model")


app.post("/add/homework",async(req,res)=>{
    try{ 
        const {className}=req.body
      
        const check=await Homework.findOne({className:className})

        if(check){
           
            await Homework.findOneAndUpdate({className:className},req.body)
            res.status(201).send({mesg:"Home work addded successfully!"})
        }
        else{
        
            const newHomework=new Homework(req.body);
            await newHomework.save()
            res.status(201).send({mesg:"Home work addded successfully!"})
        }
      
    }
    catch(err){
        console.log("Error from add homework route",err)
        res.status(500).send({mesg:"Internal server error !"})  
    }
})


app.post("/add/timetable",async(req,res)=>{
    try{
     console.log(req.body)
    }
    catch(err){
        console.log("Error from add timetable route",err)
        res.status(500).send({mesg:"Internal server error !"})  
    }
})


app.get("/payments/history", authenticate,async(req,res)=>{
    try{
   
       const document=await Student.findOne({_id:req.body.id})
       const data=(document.feehistory)
       res.status(200).send({mesg:"Ok",feeHistory:data})
    }
    catch(err){
        console.log("Error from get payment history route",err)
        res.status(500).send({mesg:"Internal server error !"}) 
    }
 })

 app.get("/homework/data",authenticate,async(req,res)=>{
    try{
        const studentDocument=await Student.findOne({_id:req.body.id})
       const studentClass=studentDocument.className;
       const homework=await Homework.findOne({className:studentClass});
       res.status(200).send(homework)
    }
    catch(err){
        console.log("Error from get homework data route",err)
        res.status(500).send({mesg:"Internal server error !"}) 
    }
 })


module.exports =app
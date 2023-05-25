const {Router}=require("express")
const app=Router();
const Homework=require("../models/homework.model")
const Timetable=require("../models/timetable.model")


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


module.exports =app
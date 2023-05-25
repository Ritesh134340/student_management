const mongoose=require("mongoose");

const detailsSchema=new mongoose.Schema({
     day:{type:String},
     subject:{type:String},
     startTime:{type:String},
     endTime:{type:String},
     instructor:{type:String},
})

const timeSchema=new mongoose.Schema({
   className:{type:String,required:true},
   details:[detailsSchema]
},{timestamps:true})


const Timetable=mongoose.model("timetable",timeSchema)

module.exports=Timetable


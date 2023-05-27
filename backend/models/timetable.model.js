const mongoose=require("mongoose");

const subjectSchema=new mongoose.Schema({
    subjectName:String,
    time:String,
    ins:String

})

const indvDaySchema=new mongoose.Schema({
   dayName:String,
   subject:[subjectSchema]
})

const timetableSchema=new mongoose.Schema({
    className:String,
    days:[indvDaySchema]
})

const Timetable=mongoose.model("timetable",timetableSchema)

module.exports=Timetable


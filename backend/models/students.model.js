const mongoose=require("mongoose");




const studentSchema=mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    className:{type:String,required:true},
    rollNo:{type:String,required:true}
},{timestamps:true})


const Student=mongoose.model('student',studentSchema)


module.exports = Student
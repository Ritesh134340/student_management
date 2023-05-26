const mongoose=require("mongoose");


const feeSchema=new mongoose.Schema({
    month:String,
    status:String,
    amount:Number,
},{timestamps:true})

const studentSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    className:{type:String,required:true},
    rollNo:{type:String,required:true},
    feehistory:[feeSchema]
},{timestamps:true})


const Student=mongoose.model('student',studentSchema)


module.exports = Student
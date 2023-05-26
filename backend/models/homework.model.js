const mongoose=require("mongoose");


const subjSchema=new mongoose.Schema({
    sub:{type:String,required:true},
    homework:{type:String}
})
const homeWorkSchema=new mongoose.Schema({
    className:{type:String,required:true},
    date:{type:String,required:true},
    subjects:[subjSchema]
},{timestamps:true})

const Homework=mongoose.model("homework",homeWorkSchema)

module.exports=Homework
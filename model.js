const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    description:{
        type:String,
        required:true
    }
})

const Todo=mongoose.model('Todo',userSchema)

module.exports=Todo
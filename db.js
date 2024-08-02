const mongoose =require('mongoose')


const connectDB=async(req,res)=>{
    try {
        const ins=await mongoose.connect('mongodb://localhost:27017/demo')
    } catch (error) {
        console.log(error.message)
    }
}

module.exports= connectDB;
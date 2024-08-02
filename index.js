const connectDB  = require("./db")

const express=require('express')
const cors=require('cors')
const app=express()

const Todo=require('./model.js')
app.use(cors())
app.use(express.json())


//create
app.post('/todo',async(req,res)=>{
    try {
        const {description}=req.body
        const newtodo=await Todo.create({description})
        res.json(newtodo)
    } catch (error) {
        console.log(error.message)
    }
})
//get all
app.get('/todo',async(req,res)=>{
    const todos=await Todo.find()
    res.json(todos)
})

app.get('/todo/:id',async(req,res)=>{
    const todo=await Todo.findById(req.params.id)
    if(!todo){
        return res.status(404).json({msg:"Todo not found"})

    }
    res.json(todo)
})

app.put('/todo/:id',async(req,res)=>{
    const {description}=req.body
    const toodo=await Todo.findByIdAndUpdate(req.params.id,{description})
    res.json(toodo)
})
app.delete('/todo/:id',async(req,res)=>{
    const todo =await Todo.findByIdAndDelete(req.params.id)
    res.json("todo deleted succesfully")
})
connectDB().then(()=>{
    app.listen(3000,(req,res)=>{
        console.log('server connected at 3000')
    })
})
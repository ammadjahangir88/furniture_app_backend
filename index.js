const express=require('express')
const app=express()
const dotenv=require('dotenv')
const mongoose=require('mongoose')
require('./config/db')

const cors = require('cors');
const productRouter=require('./routes/ProductRoutes')
app.use(cors());
app.get('/',(req,resp)=>{
    resp.json("Hello World")
})
app.use(express.json())
app.use("/api/products",productRouter)
dotenv.config()
port=8000
app.listen(port,()=>{
    console.log("Listening on port",port)
})
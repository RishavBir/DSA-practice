
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

app.use(bodyParser.json())


mongoose.connect('mongodb+srv://Aman300:ByXZ2qfTNQNWF7Uj@cluster0.o4rcy.mongodb.net/aman-basic-DB?retryWrites=true&w=majority')
.then(() =>{
    console.log('monog db connected')
})
.catch(() =>{
    console.log('not connected mongo db')
})


const userSchema = new mongoose.Schema({
    
    fname:{
        type:String,
    },
    lname:{
        type:String,
    },
    email:{
        type:String,
    },
    password:{
        type:String,
    },
})

let model = mongoose.model('User', userSchema)


app.get('/',   async function(req,res){
    let data = await model.find()
    res.send(data)
})

app.get('/post', async function(req,res){
    let bodyData =  {
        fname:"Aman",
        lname:"kumar",
        email:"aman42434@gmail.com",
        password:"237498",
    }
    let data = await model.create(bodyData)
    res.send(data)
})



app.listen(process.env.port || 3000, function(){
    console.log('express is running on this port', process.env.port || 3000)
})
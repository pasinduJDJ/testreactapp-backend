const express = require('express');
const app = express();
const cors = require('cors');
const app = require("./app");
const port = 3001;
const host = '127.0.0.1';
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());

const uri ='mongodb+srv://mngodb:mongodbpwd@notesapp.qdo1q.mongodb.net/?retryWrites=true&w=majority&appName=notesapp';

const connect  = async ()=>{
    try{
        await mongoose.connect(uri);
        console.log('mongodb Connected');
    }
    catch(error){
        console.log(error);
    }
}

connect();

const server = app.listen(port, host, ()=>{
    console.log("Node Server is Working.");
})
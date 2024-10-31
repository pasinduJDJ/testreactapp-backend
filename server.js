const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;
const host = '127.0.0.1';
const mongoose = require('mongoose');
const router = require('./router');

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://user:userpwd@cluster0.qdo1q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';


const connect = async () => {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB Connected');
    } catch (error) {
        console.error('Connection error', error);
    }
};

connect();

const server = app.listen(port, host, () => {
    console.log("Node Server is Working.");
});

app.use('/api', router);
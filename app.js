const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.use(
    express.urlencoded({
        extends: 'true',
    })
)

app.use(express.json());

module.exports = app;
const express = require('express');
const env = require('dotenv')


console.log(process.env.PORT); //express app

/*
ToDo:Create a express app, listen on specific end point, start end point
*/

const app = express(); 

//pre defined end point
app.get('./', function(req,res){
    console.log(`a new api call`);
    res.sendStatus(200);
    res.end('hello appi');
});

//app listening on a specific port
app.listen(process.env.PORT, () => {
    console.log(`API listening on port ${process.env.PORT}`);
});


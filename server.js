const express = require('express');
const env = require('dotenv')

/*
ToDo:Create a express app, listen on specific end point, start end point
*/

//set up configuration
env.config({path:'config/config.env'});

const app = express(); 

//pre defined end point
app.get('/', async(req, res) =>{
    console.log('a new api call');
  //  res.sendStatus(200); //blocks all the up coming cmds
  res.status(200).json({
      success:true,
      message:'user added'
  })
});

app.get('/api/v1/user/list', (req, res) =>{
    console.log('list all users in the DB');
    res.status(200).json({
        success:true,
        message:'will be our user list'
    })
})

//app listening on a specific port
app.listen(process.env.PORT, () => {
    console.log(`API listening on port ${process.env.PORT}`);
});


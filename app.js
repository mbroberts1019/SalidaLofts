// jshint esversion: 6

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000
app.get("/", (req,res)=>{
    res.sendFile(__dirname +"/index.html");
});

app.listen(PORT, (err)=>{
    if(err){
       console.error(err)
    }else{
        console.log("Server started on port " + PORT);
    }    
});
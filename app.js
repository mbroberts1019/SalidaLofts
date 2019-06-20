// jshint esversion: 6

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// EJS
app.set('view engine', 'ejs');

// Use Body Parser
app.use(bodyParser.urlencoded({ extended: true}));

// allow static pages to be accessed
app.use(express.static("public"));

app.get("/", (req,res)=>{
    res.render('home');
});


let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port, ()=>{ 
    console.log("Server started on port " + port); 
});
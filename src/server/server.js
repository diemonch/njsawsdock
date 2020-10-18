const express = require('express');
const app = express();
const config = require ('../../lib/config.js')

app.get('/', (req,res)=>{
    res.send("This is Dev Box: Hello there => if you see this from AWS you did a good job, have a beer");
});

app.get('/offers', (req,res)=>{
    res.send("just to tell you you have come to offers page");
});
var port = process.env.PORT || 3000;
app.listen(port, ()=>{
console.log("Server is Up and Running");
});
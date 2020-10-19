const express = require('express');
const config = require ('../../lib/config.js')
const courses= require('./courses')
const app= express();
app.use('/api/courses', courses);

app.listen(config.port, ()=>{
console.log("Server is Up and Running");
});
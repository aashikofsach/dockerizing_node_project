const express = require('express');
const dotenv = require('dotenv') ;
dotenv.config() ;


const app =express() 

app.get("/home", (req, res)=>{
    return res.json({
        message : "Hanji"
    })
})

app.listen(process.env.PORT , ()=>{
    console.log("server is running ")
})
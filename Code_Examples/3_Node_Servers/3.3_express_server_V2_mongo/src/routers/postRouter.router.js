const express = require("express");
const router= express.Router()
const data = require("../../data");

router.post('/adduser',(req,res)=>{
    let userData= req.body
    console.log(req.body);
    data.users.push(userData)
    res.send({users:data.users})
})



module.exports=router
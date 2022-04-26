// 1 Importation express
const express = require("express");
// 2 Importation Instence
const router= express.Router()
// 3 require schema model
const Contact=require("../model/Contact")
// 4 CRUD's creation
/* get:test
 * path:http://localhost:1100/api/contacts/test 
*/ 
router.get("/test",(req,res)=>{
    res.send("hello f3")
})
/* post:add
 * path:http://localhost:1100/api/contacts/add
 * req.body 
*/ 
router.post("/add",async(req,res)=>{
    const {name,email,age}=req.body
    //handling errors
    if (!name.length || !email.length) {
        res.status(400).send({msg:"name w email lazem tzidhom"})
}
    //handling error email is unique
    const contact=await Contact.findOne({email:email})
    if (contact){
        res.status(400).send({msg:"email mawjoud"})
        }
    try {
        const newcontact=new Contact({name,email,age})
        await newcontact.save()
        res.status(200).send({msg:"contact tzed",newcontact})
    } catch (error) {
        res.status(400).send({msg:"contact matzedech",error})
    }
})

module.exports=router
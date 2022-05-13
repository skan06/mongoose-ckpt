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
/* post:get all
 * path:http://localhost:1100/api/contacts/
 *  
*/ 
router.get("/",async(req,res)=>{
    try {
        const contactlist=await Contact.find()
        res.status(200).send({msg:"This is our list",contactlist})
    } catch (error) {
        res.status(400).send({msg:"There's no list",error})
    }
})
/* post:get one
 * path:http://localhost:1100/api/contacts/:_id
 * req.params 
*/ 
router.get("/:_id",async(req,res)=>{
    try {
        const {_id}=req.params;
        let contactToGet= await Contact.findOne({_id})
        res.status(200).send({msg:"This is our contact",contactToGet})
    } catch (error) {
        res.status(400).send({msg:"Contact unavailable",error})
    }
})
/* post:update
 * path:http://localhost:1100/api/contacts/edit/:_id
 * req.params && req.body
*/ 
router.put("/edit/:_id",async (req,res)=>{
try {
    let {name,email,age}=req.body;
    let {_id}=req.params
    await Contact.updateOne({_id},{$set:{...req.body}})
    res.status(200).send({msg:"Seccessful update"})
} catch (error) {
    res.status(400).send({msg:"Update failed",error})
}
})
/* post:delete
 * path:http://localhost:1100/api/contacts/delete/:_id
 * req.params
*/ 
router.delete("/delete/:_id",async (req,res)=>{
    try {
        let {_id}=req.params;
        await Contact.deleteOne({_id})
        res.status(200).send({msg:"Contact deleted"})
    } catch (error) {
        res.status(400).send({msg:"Contact not deleted",error})
    }
})

module.exports=router
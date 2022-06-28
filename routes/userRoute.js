const express=require('express')
var app=express()
const Usermodel=require('../models/usermodel')

const router=express.Router()
router.post("/loginuser", async (req, res) => {
    try {
      const result = await Usermodel.findOne({
        username: req.body.username,
        password: req.body.password,
      });
  
      if (result) {
        res.send(result);
      } else {
        res.status(400).json("Login failed");
      }
    } catch (error) {
      res.status(400).json(error);
    }
  });
  
router.post('/registeruser',(req,res)=>{   
    var newuser=new Usermodel({username:req.body.username,password:req.body.password})
    newuser.save(function(err){
        if(err){
            res.status(400).json("something error occured")
        }
        else{
                res.send("user registration succesful")
            }
        })
    })
router.post("/update", async (req, res) => {
      try {
        await Usermodel.findOneAndUpdate({ _id: req.body._id }, req.body);
        const user = await Usermodel.findOne({ _id: req.body._id });
        res.send(user);
      } catch (error) {
        res.status(400).json(error);
      }
    });
module.exports=router;
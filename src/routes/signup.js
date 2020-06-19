const express=require('express');


const signupRouter=express.Router();

signupRouter.get('/',(req,res)=>{
    res.render('signup',{
        nav,
        title:'Library'
    });
});

module.exports=signupRouter;
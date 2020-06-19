const express=require('express');


const loginRouter=express.Router();

loginRouter.get('/',(req,res)=>{
    res.render('login',{
        nav,
        title:'Library'
    });
});

module.exports=loginRouter;
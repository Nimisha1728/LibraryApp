const express=require('express');


const addBooksRouter=express.Router();

addBooksRouter.get('/',(req,res)=>{
    res.render('addBooks',{
        nav,
        title:'Library'
    });
});

module.exports=addBooksRouter;
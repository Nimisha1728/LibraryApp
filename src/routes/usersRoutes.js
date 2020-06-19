const express=require('express');


const usersRouter=express.Router();
function router2(nav){

    usersRouter.get('/signup',(req,res)=>{
    res.render('signup',{
        nav,
        title:'Library'
    });
});
usersRouter.get('/login',(req,res)=>{
    res.render('login',{
        nav,
        title:'Library'
    });
});
usersRouter.get('/addBooks',(req,res)=>{
    res.render('addBooks',{
        nav,
        title:'Library'
    });
});
return usersRouter;
}
module.exports=router2;
const express=require('express');
const authorsRouter=express.Router();

function authrouter(nav){
    var authors=[
        {
            title:"Joseph Barbare",
            genre:'Cartoon books',
            img:'joseph.jfif',
            
        },
        {
            title:"Chetan Bhagat",
            genre:'Novalist',
            img:'chetan.jfif'
        },
        {
            title:"J K Rowling",
            genre:'Fantasy books',
            img:'rowling.jfif'
        },
    ]
    authorsRouter.get('/',(req,res)=>{
        res.render("authors",{
            nav,
            title:'Library',
            authors
        });
    });

    authorsRouter.get('/:id',(req,res)=>{
        const id=req.params.id;
        res.render('author',{
            nav,
            title:'Library',
            author:authors[id]
        });
    });
    return authorsRouter;
}

module.exports=authrouter;
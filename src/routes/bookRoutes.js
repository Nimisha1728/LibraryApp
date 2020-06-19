const express=require('express');
const booksRouter=express.Router();

function router(nav){
    var books=[
        {
            title:'Tom and Jerry',
            author:'Joseph barbera',
            genre:'Cartoon',
            img:'joseph.jfif'
        },
        {
            title:'Half girlfriend',
            author:'Chetan Bhagat',
            genre:'Romance novel',
            img:'chetan.jfif'
        },
        {
            title:'Harry Potter',
            author:'J K Rowling',
            genre:'Fantasy',
            img:'rowling.jfif'
        }
    ]
    booksRouter.get('/',(req,res)=>{
        res.render("books",{
            nav,
            title:'Library',
            books
        });
    });

    booksRouter.get('/:id',(req,res)=>{
        const id=req.params.id
        res.render('book',{
            nav,
            title:'Library',
            book:books[id]

        });
    });
    return booksRouter;
}

    module.exports=router;
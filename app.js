const express=require('express');
const app=express();

const nav=[
    {
        link:'/books',name:'Books'
    },
    {
        link:'/authors',name:'Authors'
    },
    {
        link:'/signup',name:'SignUp'
    },
    {
        link:'/login',name:'Login'
    },
    {
        link:'/addBooks',name:'Add Books'
    }
];

const booksRouter=require('./src/routes/bookRoutes')(nav);
const authorsRouter=require('./src/routes/authorRoutes')(nav);


const usersRouter=require('./src/routes/usersRoutes')(nav);

app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);

app.use(usersRouter);



app.get('/',(req,res)=>{
    res.render("index",
    {
        nav,
        title:'Library'
    });
});

app.listen(5000);
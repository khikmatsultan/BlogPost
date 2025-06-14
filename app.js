// it is for main application 


const express = require('express');
const bodyParser = require('body-parser');
const blogRoutes = require('./routes/blog');
const mongoose = require('mongoose');


const app = express();


app.set('view engine', 'ejs');

// Middleware
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

// Routes 
app.use('/blog',blogRoutes);


// Home routes

app.get('/', (req,res)=>
{
    res.render('index', {title:'Home'});
});

// to connect mongodb





mongoose.connect('mongodb://127.0.0.1:27017/blogDB')
    .then(()=>console.log('connected to local MongoDB'))
    .catch(err => console.error('Connection error:',err));




// start server 

const PORT = 8000;
app.listen(PORT, ()=>{
    console.log(`server is runnning on http://localhost:${PORT}`);
});
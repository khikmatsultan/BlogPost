// it is for main application 


const express = require('express');
const bodyParser = require('body-parser');
const blogRoutes = require('./routes/blog');


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






// start server 

const PORT = 8000;
app.listen(PORT, ()=>{
    console.log(`server is runnning on http://localhost:${PORT}`);
});
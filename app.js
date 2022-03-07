const express = require('express');
const app = express();

const logger = (req,res,next) => {
    console.log("this is logger");
}
const checkPermission = (req,res,next) =>{
    console.log("this is checkPermission ")
}

app.get('/books',(req,res) => {
    //console.log()
    return res.send({route: "/books"});
});

app.get('/libraries',(req,res) => {
    return res.send({route:"/libraries", permission: true});
});

app.get('/authors',(req,res) => {
    return res.send({route:"/authors", permission: true});
})

app.listen(3333, () => {
    console.log("listen port numbet 33 33");
})


//books, libraries, authors
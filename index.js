const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send("hey!! nice to meet u.");
});

app.get('/json',(req,res)=>{
    res.send({msg:'test'});
});

app.listen(3000,()=>{
    console.log('running...')
})

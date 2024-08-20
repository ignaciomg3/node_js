// hacemos una app pequeña usando Express
const express = require('express')
const app = express()

app.get('/user/:username',(req, res) => {
    //mostramos los parámetros de req
    console.log(req.params.user);
    console.log(req.params.age);
    console.log(req.params);
       
    res.send(`hello ${req.params.username.toUpperCase()}` )
    //${req.params.username}
})




const puerto = 3000;
app.listen(puerto);
//server.listen(puerto);
console.log(`Server on port ${puerto}`);   
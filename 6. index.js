// hacemos una app pequeña usando Express
const express = require('express')
const app = express()

//usamos QUERY
app.get('/user/:username',(req, res) => {
    //mostramos los parámetros de req
    console.log( req.query);
    res.send(`hello ${req.params.username.toUpperCase()}` )
})
//podemos usar app.all para que sea (get,put,path, post, delete)
const puerto = 3000;
app.listen(puerto);
//server.listen(puerto);
console.log(`Server on port ${puerto}`);   
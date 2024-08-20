// hacemos una app pequeña usando Express
const express = require('express')
const app = express()

//usamos QUERY
app.use((req, res) => {
    //mostramos los parámetros de req
    console.log( `Route:  ${req.url} Método: ${req.method}` )
    //res.send(`hello ${req.params.username.toUpperCase()}` )

    next()
})

app.get('/profile',(req, res) => {
    //mostramos los parámetros de req
    console.log( req.query);
    res.send(`profile page` )
})
//podemos usar app.all para que sea (get,put,path, post, delete)
const puerto = 3000;
app.listen(puerto);
//server.listen(puerto);
console.log(`Server on port ${puerto}`);   
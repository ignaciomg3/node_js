// hacemos una app pequeña usando Express
const express = require('express')
const app = express()

app.get('/',(req, res) => {
    // res.sendFile('./static/index.html', {
    //     root: __dirname
    // })
    res.end('hello world')
})

//GET
app.get('/productos',(req, res) => {
    var msj = 'listando productos..'
    console.log(msj);
    res.send(msj);

})
//POST
app.post('/productos',(req, res) => {
    var msj = 'creando un producto..'
    console.log(msj);
    res.send(msj);

})
//PUT
app.put('/productos',(req, res) => {
    var msj = 'actualizando productos..'
    console.log(msj);
    res.send(msj);
})
//DELETE
app.delete('/productos',(req, res) => {
    var msj = 'eliminando productos..'
    console.log(msj);
    res.send(msj);
})
//PATH
app.patch('/productos',(req, res) => {
    var msj = 'actualizando una parte del producto..'
    console.log(msj);
    res.send(msj);
})


app.get('/about',(req, res) => {
    var msj = ' acerca de.. xxxxx'
    console.log(msj);
    res.send(msj);
})
//en caso de que la ruta no se encuentre.
// Manejo las peticiones que no existen.
app.use((req, res) => {
    console.log('La ruta no se encontró'); 
})

const puerto = 3000;
app.listen(puerto);
//server.listen(puerto);
console.log(`Server on port ${puerto}`);    

 
 
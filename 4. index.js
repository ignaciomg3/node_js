// hacemos una app pequeña usando Express
const express = require('express')
const app = express()

app.get('/',(req, res) => {
    res.send('hello world')
})

app.get('/miarchivo',(req, res) => {
    res.sendFile('./argentina.jpg', {
        root: __dirname
    })
    //res.send('hello world')

})

//tenemos que trabajar con formato 'JSON'
app.get('/user',(req, res) => {
    res.json({"name":"Ignacio"})
    //res.send('hello world')
    
})

app.get('/isAlive',(req, res) => {
    console.log('El servidor está vivo..')
    res.sendStatus(204);
})

//hacemos que Express entienda y procese las req con estas funciones
app.use(express.text());
app.use(express.text());

//para que el backend entienda los datos que vienen desde un formulario.
//{extends: false} es para decirle que no necesita interpretar nada complicado.
//esto hace que Express entienda los datos y los conviera a un objeto JSON.
app.use(express.urlencoded({extended: false}));

app.post('/user',(req, res) => {
    console.log('mostrando el body del req.')
    console.log(req.body)

    res.send('Nuevo usuario creado')
})
const puerto = 3000;
app.listen(puerto);
//server.listen(puerto);
console.log(`Server on port ${puerto}`);    
const express = require('express')
const app = express()

var resultado = ['<!DOCTYPE html><html lang="en"><head><link rel="stylesheet" href="'+__dirname+'\\styles.css"><meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="ie=edge"> <title>Test</title></head><body> <h1>El resultado de la', ' <span id="res"></span> </h1></body></html>']
var malo = '<!DOCTYPE html><html lang="en"><head>    <meta charset="UTF-8">    <meta name="viewport" content="width=device-width, initial-scale=1.0">    <meta http-equiv="X-UA-Compatible" content="ie=edge"> <link rel="stylesheet" href="style.css">    <title>Test</title></head><body>    <h1>Faltan datos</h1></body></html>'
var error = '<!DOCTYPE html><html lang="en"><head>    <meta charset="UTF-8">    <meta name="viewport" content="width=device-width, initial-scale=1.0">    <meta http-equiv="X-UA-Compatible" content="ie=edge">   <link rel="stylesheet" href="style.css">  <title>404 PAGE NOT FOUND</title></head><body>    <h3>La página no ha sido encontrada, escribe una direccion valida</h3></body></html>'
app.get('/', (req, res) => res.send('Calculadora JUAN PABLO!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))

app.get('/suma', function (req, res) {
    var a = parseInt(req.query.a);
    var b = parseInt(req.query.b);

    var c = a + b;
    if (!a || !b)
        res.send(malo)
    res.send(resultado[0] + ' suma es: ' + c + resultado[1])

})

app.get('/resta', function (req, res) {
    var a = parseInt(req.query.a);
    var b = parseInt(req.query.b);

    var c = a - b;
    if (!a || !b)
        res.send(malo)
    res.send(resultado[0] + ' resta es: ' + c + resultado[1])
})

app.get('/multi', function (req, res) {
    var a = parseInt(req.query.a);
    var b = parseInt(req.query.b);

    var c = a * b;

    if (!a || !b)
        res.send(malo)
    res.send(resultado[0] + ' multiplicacion es: ' + c + resultado[1])
})

app.get('/div', function (req, res) {
    var a = parseInt(req.query.a);
    var b = parseInt(req.query.b);

    var c = a / b;
    if (!a || !b)
        res.send(malo)
    res.send(resultado[0] + ' division es: ' + c + resultado[1])
})

app.get('*', function (req, res) {
    res.send(error, 404);
});
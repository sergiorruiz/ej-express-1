const libExpress = require('express');

const app = libExpress();

app.get('/', function(req, res){
    res.send('¡Hola Mundo!');
})

app.listen(3100);

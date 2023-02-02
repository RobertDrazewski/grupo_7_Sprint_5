const express = require('express');
const app = express();
//const path = require('path');
const session = require('express-session'); //para configurarlo como Middleware se escribe la linea 11 app.use


const mainRouter =require('./routes/mainRouter');
const userRouter = require('./routes/userRouter');

app.use(express.static('public')); 
app.use(mainRouter);
app.use(userRouter);
app.use(session( {secret:"mensaje vuelta el mundo"}));

// configuramos ejs como template engine

app.set('view engine','ejs');

// configuramos la carpeta de vistas

app.set('views','views');


// setiamos la puerta de entrada (entry point) y escuchamos la respuesta

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`Servidor corriendo en el puerto ${port}`));








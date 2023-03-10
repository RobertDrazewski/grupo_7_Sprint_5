const express = require('express');
const app = express();
const session = require('express-session');
const path = require('path')
const port = process.env.PORT || 3000;
const mainRouter =require('./routes/mainRouter');
const userRoutes = require('./routes/usersRoutes')

app.use(express.json())
app.use(express.static('public')); 
app.use(session({secret: 'Mi string secreto'}))
app.use(mainRouter);
app.use(userRoutes);

app.set('view engine','ejs');
app.set('views','views');

app.listen(port, ()=> console.log(`Servidor corriendo en el puerto ${port}`));








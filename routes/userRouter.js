const express = require('express');
const userRouter= express.Router();
const path = require ('path'); 
const usersController = require('../controllers/usersController');
const mainController= require('../controllers/mainController');

const multer = require('multer');





const storage = multer.diskStorage({
    destination: (req, file, callback)=> {
        let folder = path.join(__dirname, '../public/img')
        callback(null, folder)
    }, 
    filename:(req, file, callback) =>{
        let img = 'img-' + Date.now() + path.extname(file.originalname);//nose porque no me guarda el nombre bien
        callback(null, img)
    }
});

const usersStorage = multer.diskStorage({
    destination: (req, file, callback)=> {
        let folder = path.join(__dirname, '../public/img')
        callback(null, folder)
    }, 
    filename:(req, file, callback) =>{
        let img = 'img-' + Date.now() + path.extname(file.originalname);//nose porque no me guarda el nombre bien
        callback(null, img)
    }
});

let userFileUpload = multer({ storage: usersStorage});





//login

userRouter.get('/login',/*logUsuarioMiddleware ,*/mainController.login);
userRouter.post('/login',usersController.postLogin)// flor y rober




// Register
userRouter.get('/register',userFileUpload.single('avatar'), usersController.register)
userRouter.post('/register', userFileUpload.single('avatar'),/* logUsuarioMiddleware (o tambien validaciones) varDeValidacion ,*/usersController.create)
userRouter.get('/userEdit', usersController.getUserEdit) // flor y rober
userRouter.post('/userEdit',usersController.userEdit)// flor y rober

module.exports= userRouter
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
        let img = 'img-' + Date.now() + path.extname(file.originalname);
        callback(null, img)
    }
});

let userFileUpload = multer({ storage: usersStorage});





//login

userRouter.get('/login2',/*logUsuarioMiddleware ,*/usersController.getLogin);
userRouter.post('/login2',usersController.login)// flor y rober




// Register
userRouter.get('/register2',userFileUpload.single('avatar'), usersController.getRegister)
userRouter.post('/register2', userFileUpload.single('avatar'), usersController.create)
userRouter.get('/userEdit2', usersController.getUserEdit) // flor y rober
userRouter.post('/userEdit2',usersController.userEdit)// flor y rober

module.exports= userRouter
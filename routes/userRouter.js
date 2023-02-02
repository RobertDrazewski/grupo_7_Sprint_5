const express = require('express');
const userRouter= express.Router();
const path = require ('path'); 
const usersController = require('../controllers/usersController');

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










// Register
userRouter.get('/register',userFileUpload.single('avatar'), usersController.register)
userRouter.post('/register', userFileUpload.single('avatar'),/* logUsuarioMiddleware (o tambien validaciones) varDeValidacion ,*/usersController.create)
//router.get('/userEdit', usersController.getEditUser) // flor y rober
//router.post('/userEdit',usersController.editUser)// flor y rober

module.exports= userRouter
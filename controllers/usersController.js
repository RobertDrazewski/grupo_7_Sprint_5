const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');
// para usar el metodo PUT y metodo DELETE

const usersFilePath = path.join(__dirname, '../data/users.json');
const users= JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));


const usersController = {

register: (req,res) => {//equivaldria al getRegister
    return res.render('register')
},
//3/2 Guille Facu
generateID: (req,res) =>{
    let newId = JSON.parse(fs.readFileSync(path.join(__dirname,'../data/users.json'),'utf-8'));
    if(newId.length < 1 ) { 
        return 1 
    }else{
        let idUser = newId.pop();
        return idUser.id + 1
    } 

},
//------
create: (req,res) => {//equivaldria al boton de crear?
   //G F
    let pruebaUserId = usersController.generateID();
    //--
    let createUser = {
        id: pruebaUserId,
        nombre:req.body.nombre,
        mail: req.body.mail,
        pais: req.body.pais,
        num: req.body.num,
        usuario: req.body.usuario,
        contraseña: req.body.contraseña,
        perfil: req.body.perfil,
        avatar: req.file.filename
    }
   
    
users.push(createUser);

fs.writeFileSync(usersFilePath,JSON.stringify(users,null,' '));

res.redirect('login');

},
postLogin:(req,res) => {//equivaldria al postLogin...
    let idUser = {
        usuario: req.body.usuario,
        contraseña: req.body.contraseña
    }
    
/*login: (req,res) => {//equivaldria al postLogin...
    let idUser = {
        usuario: req.body.usuario,
        contraseña: req.body.contraseña
    }*/
   /* const userData = {
        email,
        password: bcrypt.hashSync(password,10)
    }*/

users.push(idUser);

fs.writeFileSync(usersFilePath,JSON.stringify(users,null,' '));

res.redirect('productDetail');
},

// flor robert
getUserEdit: (req,res) => {//equivaldria al...
    res.render('register')
},
userEdit: (req,res) => {
    res.render('login') 
},

}

// flor y rober





module.exports = usersController;


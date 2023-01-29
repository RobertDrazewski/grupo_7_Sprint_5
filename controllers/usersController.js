const fs = require('fs');
const path = require('path');

// para usar el metodo PUT y metodo DELETE

const usersFilePath = path.join(__dirname, '../data/users.json');
const users= JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));


const usersController = {

register: (req,res) => {
    return res.render('register')
},
generateID: (req,res) =>{
    let allUsers = users
    let lastUser = users.pop();
    if (lastUser){
        return lastUser.id +1;
    } else {
        return 1
    }

},
create: (req,res) => {

   

    let nuevoId = users.map(u=>u.id)
    console.log(nuevoId)
    
    let createUser = {
        id: req.body.id,
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
login: (req,res) => {

    let idUser = {
        usuario: req.body.usuario,
        contraseña: req.body.contraseña
    }

users.push(idUser);

fs.writeFileSync(usersFilePath,JSON.stringify(users,null,' '));

res.redirect('productDetail');
},

// flor robert
getUserEdit: (req,res) => {
    res.render('register')
},
userEdit: (req,res) => {
    res.render('login') 
},

}

// flor y rober





module.exports = usersController;
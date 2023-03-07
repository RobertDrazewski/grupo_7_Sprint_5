const fs = require('fs');
const path = require('path');

// para usar el metodo PUT y metodo DELETE

const productsFilePath = path.join(__dirname, '../data/productCart.json'); /*ESTE*/
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'))
let archivoJSON = fs.readFileSync(path.join(__dirname,'../data/productCart.json'), {encoding: 'utf-8'});
let producto = JSON.parse(archivoJSON);

const productControllers = {
    product: (req, res) =>{
        return res.render('./producto/detalleProducto', {"producto": producto})
    },
    // list: (req, res) => {
    //     res.render('./carrito/productCart', {'producto': producto})//esta no la uso
    // },    
    create: (req, res) =>{
        let allProduct = fs.readFileSync(path.join(__dirname, "../data/productCart.json" ) ,"utf-8");
        let mostrar = JSON.parse(allProduct);
        let newProduct = {...req.body,
        img:req.file.filename}
        mostrar.push(newProduct) ;

        fs.writeFileSync(path.join(__dirname, "../data/productCart.json" ), JSON.stringify(mostrar,null, " "));

        res.send(mostrar);

        
        }, 

    edit: (req, res) => {
        let idProduct = req.params.id;
        const modifyProduct = producto.filter(x => x.id == idProduct)
        console.log(modifyProduct)
        res.render('./producto/editarProducto', {"producto": modifyProduct})
        
    },
    editSave: (req, res) => {
        let id = req.body.id;
        let product = products
        let editProduct = {
            id: req.body.id,
            img: req.body.img,
        
            destino: req.body.destino,
            dias: req.body.dias,
            precio: req.body.precio,
            ofertas: req.body.ofertas,
            ida: req.body.ida,
            vuelta: req.body.vuelta,
            hospedaje: req.body.hospedaje,
            vehiculo: req.body.vehiculo,
            excursion1: req.body.excursion1,
            excursion2: req.body.excursion2
        }
        let newProduct = product.map(product => {
            if(product.id == id) {
                product = {...editProduct}
                return product
            }
            return product
        })
        fs.writeFileSync(productsFilePath, JSON.stringify(newProduct))
        res.redirect("/detalleProducto")
    },
    delete: (req, res) => {
        let idProduct = req.params.id;
        const modifyProduct = producto.filter(x => x.id == idProduct)
        console.log(modifyProduct) 
        res.render('./producto/deleteProduct', {"producto": modifyProduct}) 
    },
    deleteSave: (req, res) => {
        let id = req.body.id;
        let product = products
        res.redirect("/detalleProducto")
        let productToDelete = product.filter(product => product.id != id)
        fs.writeFileSync(productsFilePath, JSON.stringify(productToDelete))        
        res.redirect("/detalleProducto")
    },
    getCreate: (req, res) => {
        return res.render('./producto/agregarProducto');
    }
}

module.exports = productControllers;

module.exports = (sequelize, DataType) => {
    let alias = "product";
    let cols = {
        product_id:{
            type: DataType.INTERGER,
            primaryKey: true,
            autoIncrement : true,
            allowNull : false
        } ,
        imgURL:{
            type: DataType.VARCHAR,
         },
        destination_id:{
            type: DataType.INTERGER,
            foreignKey: true,
            allowNull : false
        } ,
        staying: {
        type: DataType.INTERGER,
        allowNull : false 
    },
        price: {
            type: DataType.INTERGER,
            allowNull : false 
        },
        offer: {
            type: DataType.VARCHAR,
        },
        check_in: {
            type: DataType.DATE,
        },
        check_out: {
            type: DataType.DATE,
        },
        lodging :{
            type: DataType.VARCHAR
        },
        vehicle_id :{
           type: DataType.VARCHAR,
            foreignKey: true
        },
        tour:{
            type: DataType.VARCHAR,   
         },
         tour2:{
            type: DataType.VARCHAR,   
         },
         creationDate :{
            type: DataType.DATE,  
         },
         dueDate :{
            type: DataType.DATE,
         },
}
         let config ={
            tableName: "products",
            timestamps: true,
             };
             // PRIMERA ASOCIACION PRODUCTO ONE-TO-MANAY USER-PRODUCTS // 
             const Products= sequelize.define (alias,cols,config);
             Products.associate = function(models){
                Products.belongsTo(userProducts,{
                    foreignKey: "user_id",
                    as:"assocUno"
                })
             }
                return Products
} 



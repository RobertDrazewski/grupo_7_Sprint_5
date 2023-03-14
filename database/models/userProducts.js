module.exports = (sequelize, DataType) => {
    let alias = "usersProducts";
    let cols = {
        user_product_id:{
            type: DataType.INTERGER,
            primaryKey: true,
            autoIncrement : true,
            allowNull : false
        } ,
        product_id:{
            type: DataType.INTERGER,
            foreignKey: true,
        } ,
        user_id:{
            type: DataType.INTERGER,
            foreignKey: true,
        } ,
        price: {
        type: DataType.FLOAT,
        },
        process_date: {
            type: DataType.DATE,  
        }
    
} 

let config ={
    tableName: "userProducts",
    timestamps: true,
    };
    // PRIMERA ASOCIACION PRODUCTO ONE-TO-MANAY USER-PRODUCTS // 
    const userProducts= sequelize.define (alias,cols,config);

    userProducts.associate = function(models){
        userProducts.belongsTo(models.products,{
            as:"assocUno",
            foreignKey: "product_id"
            
        })

        return userProducts
}
}
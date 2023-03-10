module.exports = (sequelize, DataType) => {
    let alias = "usersProducts";
    let cols = {
        user_product_id:{
            type: DataType.INTERGER,
            primaryKey: true,
            autoIncrement : true,
            allowNull : false
        } ,
        user_id:{
            type: DataType.VARCHAR,
            foreignKey: true,
        } ,
        email: {
        type: DataType.VARCHAR,
        },
        country: {
            type: DataType.VARCHAR,  
        },
        phone_number: {
            type: DataType.INTERGER,
        },
        user: {
            type: DataType.VARCHAR,
        },
        password: {
            type: DataType.VARCHAR,
        },
        profile :{
            type: DataType.VARCHAR,
        },
        avatar :{
           type: DataType.VARCHAR,
        },
        registration_date:{
            type: DataType.DATE,  
         },
    
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
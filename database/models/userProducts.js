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


}
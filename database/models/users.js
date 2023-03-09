module.exports = (sequelize, DataType) => {
    let alias = "users";
    let cols = {
        user_id:{
            type: DataType.INTERGER,
            primaryKey: true,
            autoIncrement : true,
            allowNull : false
        } ,
        name:{
            type: DataType.VARCHAR,
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
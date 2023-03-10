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
let config ={
    tableName: "users",
    timestamps: true,
    };
    // PRIMERA ASOCIACION PRODUCTO ONE-TO-MANAY USER-PRODUCTS // 
    const Users= sequelize.define (alias,cols,config);
    Users.associate = function(models){
        Users.hasMany(models.userProducts,{//cambie la relacion a muchos porque en el diagrama estaba asi
            foreignKey: "user_Product_id",
            as:"assocUno"
        })
    }

    return Users

}
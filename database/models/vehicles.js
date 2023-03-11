module.exports = (sequelize, DataType) => {
    let alias = "vehicles";
    let cols = {
        vehicle_id:{
            type: DataType.INTERGER,
            primaryKey: true,
            autoIncrement : true,
            allowNull : false
        } ,
        name:{
            type: DataType.VARCHAR,
        } ,
        type: {
        type: DataType.VARCHAR,
        },
        brand: {
            type: DataType.VARCHAR,  
        },

} 

let config ={
    tableName: "vehicles",
    timestamps: true,
    };
    // PRIMERA ASOCIACION PRODUCTO ONE-TO-MANAY USER-PRODUCTS // 
    const Vehicles= sequelize.define (alias,cols,config);
    Vehicles.associate = function(models){
        Vehicles.belognsTo(models.products,{//cambie la relacion a muchos porque en el diagrama estaba asi
            foreignKey: false,
            as:"assocUno"
        })
    }

    return Vehicles

}
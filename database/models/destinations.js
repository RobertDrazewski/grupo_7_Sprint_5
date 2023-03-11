module.exports = (sequelize, DataType) => {
    let alias = "destinations";
    let cols = {
        destination_id:{
            type: DataType.INTERGER,
            primaryKey: true,
            autoIncrement : true,
            allowNull : false
        } ,
        name:{
            type: DataType.VARCHAR,
        } ,
        ranking: {
        type: DataType.INTERGER,
        },
        season: {
            type: DataType.VARCHAR,  
        },

} 

let config ={
    tableName: "destinations",
    timestamps: true,
    };
    // PRIMERA ASOCIACION PRODUCTO ONE-TO-MANAY USER-PRODUCTS // 
    const Destinations= sequelize.define (alias,cols,config);
    Destinations.associate = function(models){
        Destinations.belognsTo(models.products,{//cambie la relacion a muchos porque en el diagrama estaba asi
            foreignKey: false,
            as:"assocUno"
        })
    }

    return Destinations

}

// CAMBIAR NOMBRES DE "AS" DE TODOS LOS MODELOS.
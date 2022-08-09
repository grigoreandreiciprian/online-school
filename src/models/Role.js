
import {Sequelize} from "sequelize"

export default(sequelize) =>{

    class Role extends Sequelize.Model{}

    Role.init({

        id:{
            type:Sequelize.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },

        
        type:{
            type:Sequelize.STRING,
            allowNull:false,

              validate:{
                notNull:{
                    msg:"Provide value to type"
                },

                notEmpty:{
                    msg:"Provide value to Type"
                }
              }
        },

    },{

        sequelize,
        timestamps:false,
        createdAt:false,
        updatedAt:false

    })

    return Role
}
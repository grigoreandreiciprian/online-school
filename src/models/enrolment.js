import { Sequelize } from "sequelize";


export default (sequelize) =>{
    
    class Enrolment extends Sequelize.Model{}
    
    Enrolment.init({

        id:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },


        createdAt:{
            type:Sequelize.STRING,
            allowNull:false,
    
            validate:{
                notNull:{
                    msg:"Provide a value"
                },
    
                notEmpty:{
                    msg:"Provide a value"
                }
            }
        },
    },{
        sequelize,
        timestamps:false,
        createdAt:false,
        updatedAt:false
    });

    return Enrolment;
}
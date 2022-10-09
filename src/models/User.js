
import {Sequelize} from "sequelize"
import bcrypt from "bcrypt"
export default (sequelize) =>{

 class User extends Sequelize.Model{}

 User.init({


    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },

    picture:{

        type:Sequelize.BLOB("long")
    },
    firstName:{
        type:Sequelize.STRING,
        allowNull:false,

        validate:{
            notNull:{
                msg:"Provide a value to first Name"
            },

            notEmpty:{
                msg:"Provide a value to first name"
            }
        }
    },


    lastName:{
        type:Sequelize.STRING,
        allowNull:false,

        validate:{
            notNull:{
                msg:"Provide a value to last name"
            },

            notEmpty:{
                msg:"Provide a value to last name"
            }
        }
    },


    email:{
        type:Sequelize.STRING,
        allowNull:false,

        validate:{
            notNull:{
                msg:"Provide a value to email"
            },

            notEmpty:{
                msg:"Provide a value to email"
            }
        }
    },


    age:{
        type:Sequelize.INTEGER,
        allowNull:false,

        validate:{
            notNull:{
                msg:"Provide a value to age"
            },

            notEmpty:{
                msg:"Provide a value to age"
            }
        }
    },

    password:{
        type:Sequelize.STRING,
        allowNull:false,
        validate:{
            notNull:{

                 msg:'A password  is required'
            },
            notEmpty:{

                msg:'Please provide a password'
            },
            len:{
                args:[8],
                msg:'The password should be between 8 and 20 characters in length'
            }
        }
     },
     

},{
    sequelize,
    timestamps:false,
    createdAt:false,
    updatedAt:false

 });

  return User;
 
}
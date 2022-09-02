import { Sequelize } from "sequelize";


export default (sequelize) =>{

   class Blog extends Sequelize.Model{}

   Blog.init({

     id:{
         type:Sequelize.INTEGER,
         primaryKey:true,
         autoIncrement:true
     },

     title:{
        type:Sequelize.STRING,
        allowNull:false,

        validate:{
            notNull:{
                msg:"Provide a value to Title"
            },

            notEmpty:{
                msg:"Provide a value Title"
            }
        }
    },

    

    createdBy:{
        type:Sequelize.STRING,
        allowNull:false,

        validate:{
            notNull:{
                msg:"Provide a value to Create"
            },

            notEmpty:{
                msg:"Provide a value to create" 
            }
        }
    },

    date:{
        type:Sequelize.STRING,
        allowNull:false,

        validate:{
            notNull:{
                msg:"Provide a value to date"
            },

            notEmpty:{
                msg:"Provide a value to date" 
            }
        }
    },


    
    description:{
        type:Sequelize.STRING,
        allowNull:false,

        validate:{
            notNull:{
                msg:"Provide a value to description"
            },

            notEmpty:{
                msg:"Provide a value to description" 
            }
        }
    },

},{

    sequelize,
    timestamps:false,
    createdAt:false,
    updatedAt:false

   });

   return Blog;

}
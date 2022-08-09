

import asyncHandler from "express-async-handler";

import db from "./../config/db.js"
import User from "./../models/User.js";

import generateToken from "./../utils/utilities.js";

import bcrypt from "bcrypt"

import sequelize from "sequelize"
import {QueryTypes} from "sequelize"


const getAll= asyncHandler((async(req,res)=>{
         

        
        let all= await db.models.User.findAll()

        res.status(200).json(all)
   
}))


const addUser= asyncHandler((async(req,res)=>{
    
    const  hashedPassword=bcrypt.hashSync(req.body.password,10);

        console.log(hashedPassword)
        let User=
        {
            id:req.body.id,
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            age:req.body.age,
            email:req.body.email,
            password:hashedPassword,
            role_id:req.body.role_id,
            profilePicture:""
        }


    await db.models.User.create(User);


    



    res.status(204).end()
}))


const updateUser= asyncHandler((async(req,res)=>{

    let {id}= req.params

    let User= await db.models.User.findByPk(id)

    if(User){
        User.set({
            
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            email:req.body.email,
            age:req.body.age,
            password:req.body.password
        })
    
        User.save()

    }

     res.status(204).end()
}))

const logIn= asyncHandler((async(req,res)=>{
    let obj=req.body;

    let user= await db.models.User.findOne({where:{email:`${obj.email}`}});

    if(user){
        let authentificate= bcrypt.compareSync(obj.password, user.password);

        if(authentificate){
            res.status(200).json({
                id:user.id,
                lastName:user.lastName,
                email:user.email,
                role_id:user.role_id,
                token:generateToken(User.id)
            });
        }else{
            res.status(401);
            throw new Error("Parola gresita!");
        }
    }else{
        res.status(401);
        throw new Error("Nu exista acest nume!");
    }
}))

const deleteUser= asyncHandler((async(req,res)=>{
    let {id}= req.params

    let user= await db.models.User.findByPk(id)

    if(user){
      
        await user.destroy()          
    }

    res.status(204).end();
}))





export {getAll, addUser, updateUser, logIn, deleteUser}

import express from "express";

import {getAll, addUser,updateUser,logIn,deleteUser} from "../controllers/userController.js"

import errorHandler from "./../middleware/errorMiddleware.js"

import protect from "./../middleware/autetificareMiddleware.js"


let Userrouter= express.Router()





Userrouter.route("/").get(getAll,errorHandler)

Userrouter.route("/").post(addUser,errorHandler)

Userrouter.route("/:id").put(updateUser,errorHandler)

Userrouter.route("/log").post(logIn,errorHandler,protect)

Userrouter.route("/:id").delete(deleteUser,errorHandler)


export default Userrouter

import express from "express";

import {getAll, addUser,updateUser,logIn,deleteUser, uploadPhoto} from "../controllers/userController.js"

import errorHandler from "./../middleware/errorMiddleware.js"

import protect from "./../middleware/autetificareMiddleware.js"

import bodyParser from "body-parser";


import multer from "multer";


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
       cb(null, 'uploads');
    },
    filename: function (req, file, cb) {
       cb(null, Date.now() + '-' + file.originalname);
    }
 });
 const upload = multer({
    limits: {
      fileSize: 4 * 1024 * 1024,
    }
  });

let Userrouter= express.Router()





Userrouter.route("/").get(getAll,errorHandler)

Userrouter.route("/").post(addUser,errorHandler)

Userrouter.route("/:id").put(updateUser,errorHandler)

Userrouter.route("/log").post(logIn,errorHandler,protect)

Userrouter.route("/:id").delete(deleteUser,errorHandler)
Userrouter.route("/:id/upload").put( bodyParser.raw({type: ["image/jpeg", "image/png"], limit: "5mb"}),uploadPhoto,errorHandler);

export default Userrouter
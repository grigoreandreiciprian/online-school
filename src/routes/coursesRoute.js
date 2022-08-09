
import express from "express";

import { getAll,addCourse, deleteCourse, updateCourse } from "../controllers/coursesController.js";
import protect from "./../middleware/autetificareMiddleware.js";

import errorHandler from "./../middleware/errorMiddleware.js"




const courseRouter= express.Router()



courseRouter.route("/")
.get(getAll,errorHandler)
.post(addCourse,protect);

courseRouter.route("/:id")
.delete(deleteCourse,errorHandler)
.put(updateCourse,errorHandler)





export default courseRouter

import express from "express";

import bodyParser from "body-parser";

import {
  getAll,
  addCourse,
  deleteCourse,
  updateCourse,
  uploadCoursePhoto,
} from "../controllers/coursesController.js";
import protect from "./../middleware/autetificareMiddleware.js";

import errorHandler from "./../middleware/errorMiddleware.js";

const courseRouter = express.Router();

courseRouter.route("/").get(getAll, errorHandler).post(addCourse, protect);

courseRouter
  .route("/:id")
  .delete(deleteCourse, errorHandler)
  .put(updateCourse, errorHandler);

courseRouter
  .route("/:id/uploadCourse")
  .put(
    bodyParser.raw({ type: ["image/jpeg", "image/png"], limit: "10mb" }),
    uploadCoursePhoto,
    errorHandler
  );

export default courseRouter;

import express from "express";

import { getAll, addBlog, deleteBlog, updateBlog} from "../controllers/blogController.js"
import protect from "./../middleware/autetificareMiddleware.js";

import errorHandler from "./../middleware/errorMiddleware.js"


const blogRouter= express.Router()


blogRouter.route("/")
.get(getAll,errorHandler)
.post(addBlog,errorHandler)

blogRouter.route("/:id").delete(deleteBlog,errorHandler)
.put(updateBlog, errorHandler)



export default blogRouter
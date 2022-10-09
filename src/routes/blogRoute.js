import express from "express";

import { getAll, addBlog, deleteBlog, updateBlog ,uploadBlogPhoto} from "../controllers/blogController.js"
import protect from "./../middleware/autetificareMiddleware.js";

import errorHandler from "./../middleware/errorMiddleware.js"


import bodyParser from "body-parser";


import multer from "multer";


const blogRouter= express.Router()


blogRouter.route("/")
.get(getAll,errorHandler)
.post(addBlog,errorHandler)

blogRouter.route("/:id").delete(deleteBlog,errorHandler)
.put(updateBlog, errorHandler)


blogRouter.route("/:id/uploadBlog").put( bodyParser.raw({type: ["image/jpeg", "image/png"], limit: "10mb"}),uploadBlogPhoto,errorHandler);



export default blogRouter
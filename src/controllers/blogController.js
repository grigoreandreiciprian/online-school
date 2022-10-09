import asyncHandler from "express-async-handler";


import db from "./../config/db.js"





let getAll= asyncHandler((async(req,res)=>{

    let all = await db.models.blog.findAll()

    res.status(200).json(all)
}))

const addBlog= asyncHandler((async(req,res)=>{

    

    let obj= req.body

    await db.models.blog.create(obj)

  
    res.status(204).end()
}))


const deleteBlog= asyncHandler((async(req,res)=>{
    let {id}= req.params

    let blog= await db.models.blog.findByPk(id)

    if(blog){
      
        await blog.destroy()          
    }

    res.status(204).end();
}))


const updateBlog= asyncHandler((async(req,res)=>{
    let {id} = req.params

    let blog= await db.models.blog.findByPk(id)

    let obj = req.body

    if(blog){

        blog.set(obj)
    }
    blog.save()

    res.status(204).end()
}))

const uploadBlogPhoto=asyncHandler((async(req,res)=>{
   
    let {id} = req.params
     
     let blog = await db.models.blog.findByPk(id)
 
     if(blog){
         blog.set({
             picture:req.body  
         })
 
         blog.save()
 
     }
     res.status(200).send("upload succes")
 }))


export {getAll,addBlog, deleteBlog, updateBlog, uploadBlogPhoto}
import asyncHandler from "express-async-handler";


import db from "./../config/db.js"







const getAll= asyncHandler((async(req,res)=>{

   
    let courses= await db.models.Course.findAll();


    res.status(200).json(courses)
}))


const addCourse= asyncHandler((async(req,res)=>{

    // let course= await db.models.Course.build({

    //     courseName:req.body.courseName,
    //     department:req.body.department,
    //     createdBy:req.body.createdBy
    // })

    let obj= req.body

    await db.models.Course.create(obj)

  
    res.status(204).end()
}))


const deleteCourse= asyncHandler((async(req,res)=>{
    let {id}= req.params

    let course= await db.models.Course.findByPk(id)

    if(course){
      
        await course.destroy()          
    }

    res.status(204).end();
}))


const updateCourse= asyncHandler((async(req,res)=>{
    let {id} = req.params

    let course= await db.models.Course.findByPk(id)

    let obj = req.body

    if(course){

        course.set(obj)
    }
    course.save()

    res.status(204).end()
}))

export {getAll,addCourse,deleteCourse,updateCourse}

import express from 'express'

import cors from 'cors'

import dotenv from 'dotenv'

import db from "./config/db.js"

import userRouter from './routes/userRoute.js'

import courses from "./routes/coursesRoute.js"

import enrolmentRouter from"./routes/enrolmentRoute.js"

import blogRouter from './routes/blogRoute.js'

import path from 'path'

dotenv.config();

let app=express();

app.use(express.json());

app.use(cors());

    app.use("/api/v1/users",userRouter);
    app.use('/api/v1/courses',courses);
    app.use('/api/v1/enrolment',enrolmentRouter);
    app.use('/api/v1/blogs',blogRouter)

    const dirname= path.resolve();

    app.use(express.static(path.join(dirname, '/client/build')))

    app.get('*', (req,res)=>{
        res.sendFile(path.resolve(dirname, 'client', 'build', 'index.html'))
    })




db.sequelize.sync().then((()=>{

    app.listen(process.env.PORT || 5000, async()=>{
        console.log("Express server listening on port 5000!");
    });
}))

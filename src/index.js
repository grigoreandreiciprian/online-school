import express from 'express'

import cors from 'cors'

import dotenv from 'dotenv'

import db from "./config/db.js"

import userRouter from './routes/userRoute.js'

import courses from "./routes/coursesRoute.js"

import enrolmentRouter from"./routes/enrolmentRoute.js"

import blogRouter from './routes/blogRoute.js'

import bodyParser from 'body-parser'



import path from 'path'

dotenv.config();

let app=express();

app.use(express.json());

app.use(cors());

  app.use(express.static('public'));

    // app.use(bodyParser.json());
    // app.use(bodyParser.urlencoded({extended: true}));

    // app.use(express.json({limit: "20mb", extended: true}))
    //  app.use(express.urlencoded({limit: "20mb", extended: true, parameterLimit: 50000}))
    
 

    app.use("/api/v1/users",userRouter);
    app.use('/api/v1/courses',courses);
    app.use('/api/v1/enrolment',enrolmentRouter);
    app.use('/api/v1/blogs',blogRouter)

    
  

    const dirname= path.resolve();

    app.use(express.static(path.join(dirname, '/client/build')))

    app.get('*', (req,res)=>{
        res.sendFile(path.resolve(dirname, 'client', 'build', 'index.html'))
    })


    app.use(express.json({limit: "20mb", extended: true}))
     app.use(express.urlencoded({limit: "20mb", extended: true, parameterLimit: 50000}))
    




db.sequelize.sync().then((()=>{

    app.listen(process.env.PORT || 5000, async()=>{
        console.log("Express server listening on port 5000!");
    });
}))

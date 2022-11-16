import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import morgan from 'morgan'
import userRoute from './routes/user.js';
 
//mongodb+srv://rabbi31:<password>@cluster0.6kr3djy.mongodb.net/?retryWrites=true&w=majority
const app = express()
const port = 5000
//router
app.use(express.json());
app.use('/users',userRoute);


app.use(morgan('dev'))
app.use(express.json({limit:'30mb', extended: true}))
app.use(express.urlencoded({limit:'30mb', extended: true}))
app.use(cors())

const MONGODB_URL ='mongodb+srv://rabbi31:Rabbi987@cluster0.6kr3djy.mongodb.net/tour_db?retryWrites=true&w=majority'

mongoose.connect(MONGODB_URL).then(()=>{
    app.listen(port,()=>{
        console.log(`Server running at ${port}`)
    })
}).catch((error)=>{
    console.log(`${error} did not connect`)
})
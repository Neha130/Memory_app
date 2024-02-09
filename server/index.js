import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';
import userRouter from "./routes/user.js";

const app = express();

app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);
app.use("/user", userRouter);
// "mongodb://ajay:ajay@mongo.studentsupport.tk:27017/Tododb?authSource=admin"
// const CONNECTION_URL = 'mongodb+srv://js_mastery:M6WfDnJEoj9HkV2d@practice.jto9p.mongodb.net/memories_app?retryWrites=true&w=majority';
// const CONNECTION_URL='mongodb+srv://nehasharma:Devtron@121@devtron.gsqsqed.mongodb.net/test'
//const CONNECTION_URL='mongodb://172.17.0.2:27017/test'
const CONNECTION_URL=process.env.URL

const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => 
  {
    console.log(Server Running on Port: http://localhost:${PORT});
    console.log(CONNECTION_URL);
    console.log(process.env.URL);
    console.log(typeof(CONNECTION_URL));
  }))
  .catch((error) => console.log(${error} did not connect));

mongoose.set('useFindAndModify', false);

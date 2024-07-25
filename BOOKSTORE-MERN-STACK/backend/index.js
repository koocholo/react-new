import express, { request, response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from './models/bookModel.js';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';
const app = express();

//middleware for parsing request body

app.use(express.json());

// middleware for handling cors policy 
// option 1: allow all origins with of cors(*)
app.use(cors());

//option 2 allow custom origins
//app.use (
  //cors ({
   // origin: 'http://localhost:3500',
    //methods: ['GET', 'POST', 'PUT', 'DELETE'],
   // allowedHeaders: ['Content-type'],
 // })
//);

app.get('/', (request, response) => {
console.log(request)
return response.status(234).send('WELCOME TO MERN STACK TUTORIAL');
});


app.use('/books', booksRoute);

mongoose.connect(mongoDBURL)
.then( () => {
console.log('App connected to database');
app.listen(PORT, () => {
    console.log(`App is listening to port: ${PORT}`);
  });
})
.catch( (error) =>{
console.log(error);
})
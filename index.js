import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import userRoute from './routes/userRoute.js'; 
import cors from 'cors';

const app = express();

// CORS configuration
app.use(cors({
  origin: 'http://localhost:5173', // Allow requests from this origin
  methods: ['GET', 'POST'], // Allow the necessary HTTP methods
  allowedHeaders: ['Content-Type'] // Allow the necessary headers
}));

app.use(bodyParser.json());
app.use('/users', userRoute); // Adding /users to route

dotenv.config();

const PORT = process.env.PORT || 3000;
const MONGOURL = process.env.MONGO_URL;

mongoose.connect(MONGOURL).then(() => {
  console.log("Database connected successfully");
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(err => {
  console.log("Error occurred", err);
});

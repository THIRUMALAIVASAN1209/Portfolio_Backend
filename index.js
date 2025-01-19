import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import userRoute from './routes/userRoute.js'; 
import cors from 'cors';

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use('/users', userRoute); // Adding /users to route

dotenv.config();

const PORT = process.env.PORT || 8000;
const MONGOURL = process.env.MONGO_URL;

mongoose.connect(MONGOURL).then(() => {
  console.log("Database connected successfully");
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(err => {
  console.log("Error occurred", err);
});
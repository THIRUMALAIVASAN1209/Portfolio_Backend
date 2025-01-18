import express from 'express';
import { create } from '../controllers/userController.js'; // Controller function

const router = express.Router();

// Route to handle user creation
router.post('/create', create); 

export default router;

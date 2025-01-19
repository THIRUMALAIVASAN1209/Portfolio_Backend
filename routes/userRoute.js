import { Router } from 'express';
import { create } from '../controllers/userController.js';

const router = Router();

router.post('/create', create);

export default router;

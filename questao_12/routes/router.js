import express from 'express';
import { getAllUsers, getUserId } from '../controllers/userController.js';

const router = express.Router();

router.get('/users', getAllUsers);
router.get('/user/:id', getUserId);

export default router;

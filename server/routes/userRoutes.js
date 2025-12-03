import express from 'express';
import { getUserProfile, getUsers } from '../controllers/userController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', protect, admin, getUsers);
router.get('/profile', protect, getUserProfile);

export default router;

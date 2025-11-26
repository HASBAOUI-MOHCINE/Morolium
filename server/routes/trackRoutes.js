import express from 'express';
import { getTracks, getTrackById, createTrack } from '../controllers/trackController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getTracks);
router.post('/', protect, admin, createTrack);
router.get('/:id', getTrackById);

export default router;

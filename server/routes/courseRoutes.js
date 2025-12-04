import express from 'express';
import {
  getCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
  updateCourseProgress,
} from '../controllers/courseController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').get(getCourses).post(protect, admin, createCourse);
router.route('/:id').get(getCourseById).put(protect, admin, updateCourse).delete(protect, admin, deleteCourse);
router.route('/:id/progress').put(protect, updateCourseProgress);

export default router;

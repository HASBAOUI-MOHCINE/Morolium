import api from './api';

const getCourses = async () => {
  const response = await api.get('/courses');
  return response.data;
};

const getCourseById = async (id) => {
  const response = await api.get(`/courses/${id}`);
  return response.data;
};

const createCourse = async (courseData) => {
  const response = await api.post('/courses', courseData);
  return response.data;
};

const deleteCourse = async (id) => {
  const response = await api.delete(`/courses/${id}`);
  return response.data;
};

const updateProgress = async (courseId, sectionId) => {
  const response = await api.put(`/courses/${courseId}/progress`, { sectionId });
  return response.data;
};

const courseService = {
  getCourses,
  getCourseById,
  createCourse,
  deleteCourse,
  updateProgress,
};

export default courseService;

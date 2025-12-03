import Course from '../models/Course.js';
import User from '../models/User.js';

// @desc    Fetch all courses
// @route   GET /api/courses
// @access  Public
const getCourses = async (req, res) => {
  try {
    const courses = await Course.find({});
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Fetch single course
// @route   GET /api/courses/:id
// @access  Public
const getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (course) {
      res.json(course);
    } else {
      res.status(404).json({ message: 'Course not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create a course
// @route   POST /api/courses
// @access  Private/Admin
const createCourse = async (req, res) => {
  try {
    const { title, description, image, difficulty, category, duration, xp, track, sections } = req.body;

    const course = new Course({
      title,
      description,
      image,
      difficulty,
      category,
      duration,
      xp,
      track,
      sections
    });

    const createdCourse = await course.save();
    res.status(201).json(createdCourse);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Delete a course
// @route   DELETE /api/courses/:id
// @access  Private/Admin
const deleteCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);

    if (course) {
      await Course.deleteOne({ _id: req.params.id });
      res.json({ message: 'Course removed' });
    } else {
      res.status(404).json({ message: 'Course not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update course progress
// @route   PUT /api/courses/:id/progress
// @access  Private
const updateCourseProgress = async (req, res) => {
  const { sectionId } = req.body;
  const courseId = req.params.id;

  try {
    const user = await User.findById(req.user._id);
    const course = await Course.findById(courseId);

    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    // Find if user already has progress for this course
    const progressIndex = user.courseProgress.findIndex(p => p.course.toString() === courseId);

    if (progressIndex > -1) {
      // Update existing progress
      const progressItem = user.courseProgress[progressIndex];
      
      if (!progressItem.completedSections.includes(sectionId)) {
        progressItem.completedSections.push(sectionId);
        
        // Calculate new progress percentage
        const totalSections = course.sections.length;
        progressItem.progress = (progressItem.completedSections.length / totalSections) * 100;
        
        if (progressItem.progress === 100) {
          progressItem.isCompleted = true;
          // Add XP to user stats if course just completed
          if (!progressItem.isCompleted) { // Check if it wasn't already completed
             user.stats.totalXp += course.xp;
             user.stats.coursesCompleted += 1;
          }
        }
        
        // Add XP for section
        const section = course.sections.id(sectionId);
        if (section) {
            user.stats.totalXp += section.xp;
        }

        user.courseProgress[progressIndex] = progressItem;
      }
    } else {
      // Create new progress entry
      const section = course.sections.id(sectionId);
      const initialProgress = {
        course: courseId,
        completedSections: [sectionId],
        progress: (1 / course.sections.length) * 100,
        isCompleted: course.sections.length === 1
      };
      
      if (section) {
          user.stats.totalXp += section.xp;
      }
      
      if (initialProgress.isCompleted) {
          user.stats.totalXp += course.xp;
          user.stats.coursesCompleted += 1;
      }

      user.courseProgress.push(initialProgress);
    }

    await user.save();
    res.json(user.courseProgress.find(p => p.course.toString() === courseId));

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { getCourses, getCourseById, createCourse, deleteCourse, updateCourseProgress };

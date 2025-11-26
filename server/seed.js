import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Track from './models/Track.js';
import Exercise from './models/Exercise.js';
import User from './models/User.js';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const tracksData = [
  {
    id: 'frontend-mastery',
    title: 'Frontend Mastery',
    description: 'From zero to hero in frontend development. Master HTML, CSS, JS, and React.',
    progress: 35,
    totalCourses: 8,
    completedCourses: 2,
    image: 'frontend-path.jpg'
  },
  {
    id: 'react-specialist',
    title: 'React Specialist',
    description: 'Deep dive into the React ecosystem, including Redux, Next.js, and testing.',
    progress: 0,
    totalCourses: 5,
    completedCourses: 0,
    image: 'react-path.jpg'
  },
  {
    id: 'css-wizard',
    title: 'CSS Wizardry',
    description: 'Become a styling expert with advanced CSS, animations, and architecture.',
    progress: 10,
    totalCourses: 4,
    completedCourses: 0,
    image: 'css-path.jpg'
  }
];

const exercisesData = [
  {
    id: 1,
    title: 'Flexbox Froggy Clone',
    difficulty: 'Easy',
    topic: 'CSS',
    status: 'Completed',
    xp: 50
  },
  {
    id: 2,
    title: 'Array Methods Practice',
    difficulty: 'Medium',
    topic: 'JavaScript',
    status: 'In Progress',
    xp: 100
  },
  {
    id: 3,
    title: 'Build a Todo App',
    difficulty: 'Medium',
    topic: 'React',
    status: 'Locked',
    xp: 150
  },
  {
    id: 4,
    title: 'Async/Await Challenges',
    difficulty: 'Hard',
    topic: 'JavaScript',
    status: 'Locked',
    xp: 200
  }
];

const userProfileData = {
  id: 'u123',
  name: 'Alex Developer',
  email: 'alex@example.com',
  avatar: 'https://github.com/shadcn.png',
  role: 'Student',
  joinDate: new Date('2023-09-15'),
  stats: {
    totalXp: 1250,
    streak: 5,
    coursesCompleted: 3,
    hoursLearned: 42
  },
  recentActivity: [
    { id: 1, action: 'Completed lesson', target: 'CSS Grid', date: '2023-10-25' },
    { id: 2, action: 'Started course', target: 'Advanced JavaScript', date: '2023-10-24' },
    { id: 3, action: 'Earned badge', target: 'CSS Warrior', date: '2023-10-20' }
  ]
};

const importData = async () => {
  try {
    await Track.deleteMany();
    await Exercise.deleteMany();
    await User.deleteMany();

    await Track.insertMany(tracksData);
    await Exercise.insertMany(exercisesData);
    await User.create(userProfileData);

    console.log('Data Imported!');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

importData();

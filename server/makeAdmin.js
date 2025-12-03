import mongoose from 'mongoose';
import dotenv from 'dotenv';
import process from 'process';
import User from './models/User.js';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const makeAdmin = async () => {
  try {
    const email = process.argv[2];
    if (!email) {
      console.log('Please provide an email address as an argument.');
      process.exit(1);
    }

    const user = await User.findOne({ email });

    if (user) {
      user.role = 'Admin';
      await user.save();
      console.log(`User ${user.name} (${user.email}) is now an Admin.`);
    } else {
      console.log('User not found.');
    }
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

makeAdmin();

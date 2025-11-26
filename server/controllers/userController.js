import User from '../models/User.js';

export const getUserProfile = async (req, res) => {
  try {
    // For now, we'll just get the first user or a specific mock user ID
    // In a real app, this would come from auth middleware
    const user = await User.findOne({ id: 'u123' }); 
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

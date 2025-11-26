import mongoose from 'mongoose';

const trackSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  progress: { type: Number, default: 0 },
  totalCourses: { type: Number, default: 0 },
  completedCourses: { type: Number, default: 0 },
  image: { type: String }
}, {
  timestamps: true
});

const Track = mongoose.model('Track', trackSchema);

export default Track;

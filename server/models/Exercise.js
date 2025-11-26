import mongoose from 'mongoose';

const exerciseSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  title: { type: String, required: true },
  difficulty: { type: String, enum: ['Easy', 'Medium', 'Hard'], required: true },
  topic: { type: String, required: true },
  status: { type: String, enum: ['Completed', 'In Progress', 'Locked'], default: 'Locked' },
  xp: { type: Number, required: true }
}, {
  timestamps: true
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

export default Exercise;

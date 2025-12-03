import mongoose from 'mongoose';

const sectionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String }, // Could be markdown, video url, etc.
  xp: { type: Number, default: 10 }
});

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String },
  difficulty: { type: String, enum: ['Beginner', 'Intermediate', 'Advanced'], default: 'Beginner' },
  category: { type: String, default: 'General' },
  duration: { type: String },
  xp: { type: Number, default: 100 },
  track: { type: mongoose.Schema.Types.ObjectId, ref: 'Track' },
  sections: [sectionSchema]
}, {
  timestamps: true
});

const Course = mongoose.model('Course', courseSchema);

export default Course;

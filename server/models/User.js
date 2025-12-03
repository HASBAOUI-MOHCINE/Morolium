import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  avatar: { type: String },
  role: { type: String, enum: ['Student', 'Admin'], default: 'Student' },
  joinDate: { type: Date, default: Date.now },
  stats: {
    totalXp: { type: Number, default: 0 },
    streak: { type: Number, default: 0 },
    coursesCompleted: { type: Number, default: 0 },
    hoursLearned: { type: Number, default: 0 }
  },
  courseProgress: [{
    course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
    completedSections: [{ type: String }], // Store section _ids
    isCompleted: { type: Boolean, default: false },
    progress: { type: Number, default: 0 }
  }],
  recentActivity: [{
    id: Number,
    action: String,
    target: String,
    date: String
  }]
}, {
  timestamps: true
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model('User', userSchema);

export default User;

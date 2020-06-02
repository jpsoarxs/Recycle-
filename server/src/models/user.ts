import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  createAt: {
    type: Date,
    default: Date.now
  },
  updateAt: {
    type: Date,
  }
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
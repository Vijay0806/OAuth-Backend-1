import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  googleId: String,
  githubId: String,
  displayName: String,
  email: String,
});

const User = mongoose.model('User', userSchema);

export default User;

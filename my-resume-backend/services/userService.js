// services/userService.js
const User = require('../models/User');

exports.getUserProfile = async (userId) => {
  const user = await User.findById(userId).select('-password');
  if (!user) {
    throw new Error('User not found');
  }
  return user;
};

exports.updateUserProfile = async (userId, { name, major, description, resume, profileImage }) => {
  const user = await User.findById(userId);
  if (!user) {
    throw new Error('User not found');
  }

  user.name = name || user.name;
  user.major = major || user.major;
  user.description = description || user.description;
  user.resume = resume || user.resume;
  user.profileImage = profileImage || user.profileImage;

  await user.save();
  return user;
};

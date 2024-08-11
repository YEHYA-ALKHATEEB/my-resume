// controllers/userController.js
const { getUserProfile, updateUserProfile } = require('../services/userService');

exports.getUserProfile = async (req, res) => {
  try {
    const user = await getUserProfile(req.user.id);
    res.json(user);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

exports.updateUserProfile = async (req, res) => {
  try {
    const user = await updateUserProfile(req.user.id, req.body);
    res.json(user);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

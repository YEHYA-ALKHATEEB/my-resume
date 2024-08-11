// controllers/authController.js
const { registerUser, loginUser } = require('../services/authService');

exports.register = async (req, res) => {
  try {
    const token = await registerUser(req.body);
    res.json({ token });
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const token = await loginUser(req.body);
    res.json({ token });
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

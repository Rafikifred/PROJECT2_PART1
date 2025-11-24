const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs");


const JWT_SECRET = process.env.JWT_SECRET || 'replace_this_with_a_secure_secret';
const JWT_EXPIRES = process.env.JWT_EXPIRES || '2h'; // adjust as needed

exports.register = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    // check if user/email exists
    const exists = await User.findOne({ $or: [{ email }, { username }] });
    if (exists) return res.status(400).json({ message: 'Username or email already in use' });

    const user = new User({ username, email, password });
    await user.save();

    // do not return password
    res.status(201).json({ message: 'User registered', userId: user._id });
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ userId: user._id, role: user.role }, JWT_SECRET, { expiresIn: JWT_EXPIRES });

    // return token (client stores it)
    res.json({ message: 'Logged in', token, expiresIn: JWT_EXPIRES });
  } catch (err) {
    next(err);
  }
};

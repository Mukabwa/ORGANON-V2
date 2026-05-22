const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const generateToken = (userId) => {
  return jwt.sign(
    { userId },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );
};

// REGISTER
exports.register = async (req, res) => {
  try {

    const {
      name,
      email,
      password,
      timezone,
    } = req.body;

    // existing user
    const existingUser =
      await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    // hash password
    const salt = await bcrypt.genSalt(10);

    const passwordHash =
      await bcrypt.hash(password, salt);

    // create user
    const user = await User.create({
      name,
      email,
      passwordHash,
      timezone,
    });

    // token
    const token =
      generateToken(user._id);

    res.status(201).json({

      token,

      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        timezone: user.timezone,
      },
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

// LOGIN
exports.login = async (req, res) => {
  try {

    const { email, password } = req.body;

    // find user
    const user =
      await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }

    // compare password
    const isMatch =
      await bcrypt.compare(
        password,
        user.passwordHash
      );

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }

    // token
    const token =
      generateToken(user._id);

    res.json({

      token,

      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        timezone: user.timezone,
      },
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

// GET CURRENT USER
exports.getMe = async (req, res) => {
  try {

    const user = await User.findById(
      req.userId
    ).select("-passwordHash");

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.json(user);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};
const express = require('express');
const generateToken = require('./utils/generateToken');
const {
  validateEmail,
  validatePassword,
  validateUsername,
} = require('./middlewares');

const userRouter = express.Router();

userRouter.post(
  '/register',
  validateEmail,
  validatePassword,
  validateUsername,
  (_req, res) => {
    return res.status(201).json({ message: 'user created' });
  },
);

userRouter.post('/login', validateEmail, validatePassword, (_req, res) => {
  const token = generateToken();

  return res.status(200).json({ token });
});

module.exports = userRouter;

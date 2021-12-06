const validatePassword = (req, res, next) => {
  const { password } = req.body;
  const passwordRegex = /^\d{4,8}$/;

  // testando password
  if (!passwordRegex.test(password)) {
    return res.status(400).json({ message: 'invalid data' });
  }

  next();
};

module.exports = validatePassword;

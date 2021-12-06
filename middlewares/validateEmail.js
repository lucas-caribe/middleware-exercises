const validateEmail = (req, res, next) => {
  const { email } = req.body;
  const emailRegex = /\S+@\S+\.\S+/;

  // testando email
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'invalid data' });
  }

  next();
};

module.exports = validateEmail;

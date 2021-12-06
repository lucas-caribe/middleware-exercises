const validateUsername = (req, res, next) => {
  const { username } = req.body;

  // testando username
  if (username.length <= 3) {
    return res.status(400).json({ message: 'invalid data' });
  }

  next();
};

module.exports = validateUsername;

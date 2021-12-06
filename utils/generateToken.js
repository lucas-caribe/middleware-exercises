const getRandomstring = () => Math.random().toString(36).substr(2);

const generateToken = () => (getRandomstring() + getRandomstring()).substr(0, 12);

module.exports = generateToken;

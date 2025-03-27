const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Function to hash a password
exports.hashPassword = async (password) => {
  return await bcrypt.hash(password, 12);
};

// Function to compare passwords
exports.comparePasswords = async (candidatePassword, hashedPassword) => {
  return await bcrypt.compare(candidatePassword, hashedPassword);
};

// Function to sign JWT token
exports.signToken = (id) => {
  return jwt.sign(
    { id },
    process.env.JWT_SECRET || 'your-secret-key',
    { expiresIn: '30d' }
  );
};

// Function to verify JWT token
exports.verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
}; 
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.hashPassword = (password) => {
    return bcrypt.hash(password, 10);
};

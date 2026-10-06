const { hash } = require("bcrypt");

const encryptPassword = (password) => hash(password, 10);

module.exports = { encryptPassword }

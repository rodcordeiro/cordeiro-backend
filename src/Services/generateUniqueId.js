var crypto = require('crypto');
module.exports = function generateUniqueId() {
    return crypto.randomBytes(10).toString('HEX');
};

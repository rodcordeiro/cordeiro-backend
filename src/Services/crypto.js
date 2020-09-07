const crypto = require("crypto");

const config = {
    algorithm : "aes256",
    secret : process.env.APP_SECRET,
    type:"hex"
};

function cript(data){
    const cipher = crypto.createCipher(config.algorithm,config.secret);
    cipher.update(data);
    return cipher.final(config.type);
}
module.exports = cript;
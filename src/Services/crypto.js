const crypto = require("crypto");

function cript(data){
    return crypto.createHmac('sha256', process.env.APP_SECRET)
    .update(data)
    .digest('hex');
}
module.exports = cript;
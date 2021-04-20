const crypto = require("crypto");

export default function cript(data){
    return crypto.createHmac('sha256', process.env.APP_SECRET)
    .update(data)
    .digest('hex');
}
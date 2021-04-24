import crypto from 'crypto';
 
module.exports = function generateUniqueId(){
    return crypto.randomBytes(10).toString();
 }
import crypto from 'crypto';
 
export function generateUniqueId(){
    return crypto.randomBytes(10).toString();
 }
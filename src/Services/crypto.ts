import crypto from 'crypto';

export default function cript(data: string){
    return crypto.createHmac('sha256', process.env.APP_SECRET)
    .update(data)
    .digest('hex');
}
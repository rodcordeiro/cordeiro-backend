import crypto from 'crypto';

function cript(data: string){
    return crypto.createHmac('sha256', process.env.APP_SECRET)
    .update(data)
    .digest('hex');
}

function decript(data: string){
    return crypto.createHmac('sha256', process.env.APP_SECRET)
    .update(data)
    .digest('hex');
}

export {
    cript,
    decript
}
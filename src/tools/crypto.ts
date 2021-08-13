import crypto from 'crypto';


class Encrypt{
    private encrypt : any;
    private decrypt : any;
    
    constructor(){
        const iv = "xxxxxxx";
        console.log({iv})
        this.encrypt = crypto.createCipheriv('des-ede3-cbc', process.env.APP_SECRET,iv);
        this.decrypt = crypto.createDecipheriv('des-ede3-cbc', process.env.APP_SECRET, iv);
    }
    cript(data: string){
        const cipher : any = this.encrypt
        let encripted = cipher.update(data, 'utf8', 'hex');
        encripted += cipher.final('hex');
        return encripted;
    }
    decript(data: string){
        const cipher : any = this.decrypt
        let decripted = cipher.update(data, 'hex', 'utf8');
        decripted += cipher.final('utf8');
        return decripted;
    }
}
function cript(data: string){
    return crypto.createHmac('sha256', process.env.APP_SECRET)
    .update(data)
    .digest('hex');
}

function decript(data: string){
    return crypto.createDecipheriv;
}

export {
    cript,
    decript,
    Encrypt
}
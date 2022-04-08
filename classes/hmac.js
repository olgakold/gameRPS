const crypto = require('crypto');
class HMAC {
    constructor(num){
        this.num = num;
        this.key;
        this.moveComp;
    }

    generationKey (){
        return this.key = crypto.randomBytes(32).toString('hex').toUpperCase(); 
    }

    generationMoveComp (){
        this.moveComp = Math.floor(Math.random() * this.num);
        return this.moveComp;
    }

    getMoveComp (){
        return this.moveComp
    }

    getMessage(){        
        let hmac = crypto.createHmac('sha256', this.key.toString()).update(this.moveComp.toString()).digest('hex')
        let message = `HMAC: ${hmac.toUpperCase()}\n`
        return message
    }

    getKey (){
        return this.key;
    }
}    

module.exports = { HMAC }


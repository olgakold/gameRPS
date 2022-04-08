class Rules {
    constructor (moveHuman, moveComp, arg, key){
        this.moveHuman = parseInt(moveHuman);
        this.moveComp = moveComp;
        this.arg = arg;
        this.key = key;
    }

    getResult (){
        let moveHumanText =  this.arg[this.moveHuman-1]
        let moveCompText =  this.arg[this.moveComp]
        let dif = this.moveHuman - this.moveComp-1
        let half = this.arg.length/2
        let result = (dif > 0 && dif < half) || dif < (0 - half) ? 'You win!' : dif === 0 ? 'Draw!' : 'You lose!'
        return `Your move: ${moveHumanText}\nComputer move: ${moveCompText}\n${result}\nHMAC key: ${this.key}`;
    }
}

module.exports = { Rules }
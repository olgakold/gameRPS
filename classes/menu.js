class Menu {
    constructor(arg){
        this.arg = arg
    }
    
    writeMenu (){
        let menu = '';
        for (let i=1; i<=this.arg.length; i++){
            menu += `${i} - ${this.arg[i-1]}\n`
        }     
        return `${menu}0 - exit\n? - help\nEnter your move:`
    }

}

module.exports = { Menu }
class Help {

    constructor (data){
        this.data = data
    }

    getHelp (){
        let table = {}
        this.data.forEach(elem => {
             let b = {}
             this.data.forEach(i =>{
                 let dif = this.data.indexOf(elem) - this.data.indexOf(i)
                 let half = this.data.length/2
                 b[i] = i === elem ? 'Draw' : (dif > 0 && dif < half) || dif < (0 - half) ? 'Win' : 'Lose'
             }
             )
             table[elem] = b
         })
        return table
    }

}

module.exports = { Help }
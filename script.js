const { stdin, stdout } = process;
const { HMAC } = require('./classes/hmac')
const { Menu } = require('./classes/menu')
const { Rules } = require('./classes/rules')
const { Help } = require('./classes/help')

//const fs = require('fs');
//const path = require('path');

let arr = process.argv.slice(2).filter(function(item, pos) {
    return process.argv.slice(2).indexOf(item) == pos;
})

if (process.argv.slice(2).length%2 === 0) {
    console.log ('Must be an odd number of arguments. For example: rock paper scissors')
}
else if (process.argv.slice(2).length < 3) {
    console.log ('Must be more than 2 arguments. For example: rock paper scissors')
}
else if (arr.length !== process.argv.slice(2).length ){
    console.log ('Arguments must not be repeated. For example: rock paper scissors')
}

else {
    
      let hmac = new HMAC (process.argv.slice(2).length)
      hmac.generationKey()
      hmac.generationMoveComp()
      stdout.write (hmac.getMessage())
      let menu = new Menu (process.argv.slice(2))
      stdout.write (menu.writeMenu())

      function playGame (data){
        let rules = new Rules (data, hmac.getMoveComp(), process.argv.slice(2), hmac.getKey()) 
        stdout.write (rules.getResult())
        process.exit();            
      }
      
      stdin.on('data', data => {
          if (parseInt(data) === 0) {
            process.exit();
          }
          else if (data.toString('ascii')[0] === '?') {
            let help = new Help (process.argv.slice(2))
            console.table(help.getHelp())

          }
          else if (parseInt(data) > 0 && parseInt(data) <= process.argv.slice(2).length) {
            playGame (data)
          }
          else {
            stdout.write (menu.writeMenu())
          }
      });
}

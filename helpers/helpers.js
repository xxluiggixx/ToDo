const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const pausa = () => {
    return new Promise((resolve, reject) => {
        rl.question('Press ENTER to continue... \n ',()=>{
            rl.close();
            resolve();
        })
    })
}

module.exports = pausa;
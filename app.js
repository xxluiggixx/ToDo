/* import colors from 'colors';
import { inquirerMenu } from './helpers/inquirer.js';
import pausa from './helpers/helpers.js'; */
//const pausa = require('./helpers/helpers');
const { inquirerMenu,
         pausa,
         leerInput } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');


const main = async()=>{
    console.log('Hola mundo!');
    let opt='';
    const tareas = new Tareas();
    do {
       opt= await inquirerMenu();
       switch (opt) {
        case '1':
                //crear opcion
                const desc = await leerInput('Description: ');
                tareas.crearTareas(desc);
            break;
        case '2':
               console.log(tareas.listadoArr);
            break;
      
       }

       await pausa() ;
        
    } while (opt!=='0');
    process.exit(0);
}
main(); 
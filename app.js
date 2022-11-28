/* import colors from 'colors';
import { inquirerMenu } from './helpers/inquirer.js';
import pausa from './helpers/helpers.js'; */
//const pausa = require('./helpers/helpers');
const { inquirerMenu,
         pausa,
         leerInput,
         listadoTareasBorrar,
         confirmar,
         mostrarListadoCheckList } = require('./helpers/inquirer');
const { saveDB, readDB } = require('./helpers/saveFile');
const Tareas = require('./models/tareas');


const main = async()=>{

    let opt='';

    const tareas = new Tareas();
    
    const tareasDB = readDB();
    
    if (tareasDB){
        tareas.cargarTareasFromArray(tareasDB);
    }
    //await pausa() ;

    do {
       opt= await inquirerMenu();
       switch (opt) {
        case '1':
                //crear opcion
                const desc = await leerInput('Description: ');
                tareas.crearTareas(desc);
            break;
        case '2':
            tareas.listadoCompleto();
            break;
        case '3':
            tareas.listarPendientesCompletadas(true);
            break;
        case '4':
            tareas.listarPendientesCompletadas(false);
            break;
        case '5':
            const ids = await mostrarListadoCheckList(tareas.listadoArr);
            tareas.toggleCompletadas( ids );
            break;
        case '6':
            const id = await listadoTareasBorrar( tareas.listadoArr );
            if (id !== '0'){
                const confirm = await confirmar('Are you sure??');
                if (confirm){
                    tareas.borrarTarea( id);
                }
            }
            break;
      
       }

       saveDB( tareas.listadoArr);

       await pausa() ;
        
    } while (opt!=='0');
    process.exit(0);
}
main(); 
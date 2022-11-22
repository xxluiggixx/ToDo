require('colors');

const showMenu=()=>{
    return new Promise( resolve =>{

        const title = `
        =============================
            Seleccione una opción
        =============================
        `;
    
            console.clear();
            console.log(title.green);
            console.log(`${ '1.'.green } Crear tarea`);      
            console.log(`${ '2.'.green } Listar tarea`);      
            console.log(`${ '3.'.green } Listar tareas completadas`);      
            console.log(`${ '4.'.green } Listar tareas pendientes`);      
            console.log(`${ '5.'.green } Completar tarea(s)`);      
            console.log(`${ '6.'.green } Borrar tarea`);      
            console.log(`${ '0.'.green } Salir\n`);
    
        const rl=require('readline').createInterface({
            input: process.stdin,
            output: process.output
        });
        rl.question('Seleccione una opción: ',(answer)=>{
            rl.close();
            resolve(answer);
        })
    }
    )
}

module.exports={
    showMenu
}

require('colors');
/**
 * _listado:
 *  { 'uuid-123123-1231231-23':{id:12, desc: asdasd, completadoEN: 09051991}}
 *  { 'uuid-123123-1231231-23':{id:12, desc: asdasd, completadoEN: 09051991}}
 *  { 'uuid-123123-1231231-23':{id:12, desc: asdasd, completadoEN: 09051991}}
 */
const Tarea = require('./tarea');

class Tareas {

    get listadoArr(){

        const listado = [];
        Object.keys(this._listado).forEach( key => {
            const tarea = this._listado[key];
            listado.push(tarea);
        })
        return listado;
    }

    constructor(){
        this._listado= {};
    }

    borrarTarea( id ){
        if (this._listado[id] ){
            delete this._listado[id];
        }
    }

    cargarTareasFromArray( tareas = [] ){
        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea;
        });
    }

    crearTareas(desc){

        const tarea = new Tarea(desc);
        this._listado[tarea.id]= tarea;
    }

    listadoCompleto () {
        const listado = this.listadoArr;
        console.log();
        listado.forEach( ( tarea, i ) => {
            const { desc, completado} = tarea;
            const idx = `${i +1}`.green;
            console.log(` ${idx}. ${desc} :: ${( completado )? 'Completado'.green : 'Pendente'.red}`);
        });
    }

    listarPendientesCompletadas( completadas = true ) {
        console.log();
        let idx = 1;
        this.listadoArr.forEach(( tarea ) => {
            const { desc, completado } = tarea;
            if (completadas) {
                if (completado) {
                    console.log(` ${( idx + '.').green} ${desc} :: ${completado.green}`);
                    idx++;
                }
            }else{
                if (!completado){
                    console.log(` ${( idx + '.').green} ${desc} :: ${'Pendente'.red}`);
                    idx++;
                }
            }
        })
    }

    toggleCompletadas(ids = []){
        ids.forEach(id =>{
            const tarea = this._listado[id];
            if (!tarea.completado) {
                tarea.completado = new Date().toISOString();
            }
        });
        this.listadoArr.forEach( tarea => {
            if (!ids.includes(tarea.id)){
                this._listado[tarea.id].completado = null;
            }
        })
    }

}

module.exports = Tareas;
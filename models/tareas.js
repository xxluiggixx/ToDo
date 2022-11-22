

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


    crearTareas(desc){

        const tarea = new Tarea(desc);
        this._listado[tarea.id]= tarea;
    }

}

module.exports = Tareas;
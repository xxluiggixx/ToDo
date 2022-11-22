const { faker } = require('@faker-js/faker');

class Tarea{
    constructor(desc){
        this.id = faker.datatype.uuid();
        this.desc = desc;
        this.completado = null;
    }

    find(){
        
    }
}


module.exports = Tarea;
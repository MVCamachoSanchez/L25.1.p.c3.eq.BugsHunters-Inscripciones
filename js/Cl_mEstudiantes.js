export default class Cl_mEstudiantes{
    constructor(){
        this.arrEstudiantes = [];
    }

    agregar(estudiante){
        this.arrEstudiantes.push(estudiante);
    }

    listado(){
        return this.arrEstudiantes;
    }

    existe(cedula){
        for(let i = 0; i < this.arrEstudiantes.length; i++ ){
            if(this.arrEstudiantes[i].cedula === cedula){
                return true;
            }
        }
        return false;
    }
}
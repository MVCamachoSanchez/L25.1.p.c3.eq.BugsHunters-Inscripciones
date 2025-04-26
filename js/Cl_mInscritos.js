import Cl_mInscripcion from "./Cl_mInscripcion";

export default class Cl_mInscritos {
    constructor() {
        this.array = [];
    }

    /**indexEstudiante(cedula) {
        const index = estudiantes.findIndex(
            estudiante => estudiante.cedula === cedula
        );
        
        return index;

    }*/

     indexEstudiante(cedula) {
        for (let i = 0; i < estudiantes.length; i++) {
            if (estudiantes[i].cedula === cedula) {
                return i;
            }
            }
            return -1;
        }

     inscribirMateria(cedula, codigo) {
            let index = this.indexEstudiante(cedula);
            if(index === -1){
                const materiaNueva = new Cl_mInscripcion(cedula);
                materiaNueva.agregar(codigo);
                this.array.push({
                    cedula: cedula, 
                    codigo: codigo,
                });
            }
            else{
                const estudiante = this.array[index];
                if(!estudiante.materias.incluides(codigo)){
                    estudiante.materias.push(codigo);
                } 
            }
        }    

     listado(){
            return this.array;
        }
}
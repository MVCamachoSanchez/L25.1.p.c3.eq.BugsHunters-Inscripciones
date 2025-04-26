export default class Cl_mInscripcion{
    constructor({cedula}){
        this.cedula = cedula;
        this.materias = [];
    }

   agregar(codigo){
    this.materias.push(codigo);
   }

   listado(){
    return this.materias;
   }
}
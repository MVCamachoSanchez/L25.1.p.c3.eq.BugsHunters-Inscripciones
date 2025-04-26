export default class Cl_mMaterias{
    constructor(){
        this.arrMaterias = [];
    }

    agregar(materia){
        this.arrMaterias.push(materia);
    }

    listado(){
        return this.arrMaterias;
    }

    existe(codigo){
        for(let i = 0; i < this.arrMaterias.length; i++ ){
            if(this.arrMaterias[i].codigo === codigo){
                return true;
            }
        }
        return false;
    }
}
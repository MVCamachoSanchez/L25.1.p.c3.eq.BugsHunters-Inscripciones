/**
 * APLICACIÓN INSCRIPCIONES
 * En esta primera etapa, lograremos cargar un registro simple de
 * materias y estudiantes, así como los reportes respectivos de 
 * los registros en memoria.
 * Ud. sólo debe programar las clases del modelo.
 * 
 * ESPECIFICACIONES
 * Cl_mEstudiante:
     o El atributo cedula se asignan convirtiendo a número.
     o Los atributos apellido y nombre se asignan con CamelCase.
 * Cl_mMateria:
     o El atributo código se asigna a mayúsculas.
     o El atributo semestre se asigna convirtiendo a número.
     o El atributo nombre se asigna convirtiendo a CamelCase.
 * Cl_mEstudiantes y Cl_mMaterias:
    o Construyen el array vacío.
    o Los métodos agregar el elemento al final.
    o Los métodos listado retorna un array de objetos de solo datos.
 * Cl_mSemestre:
    o El atributo nombre se asigna a CamelCase.
    o El constructor también construye los objetos atributos.
*/
import Cl_vAplicacion from "./Cl_vAplicacion.js";
import Cl_mMaterias from "./Cl_mMaterias.js";
import Cl_mEstudiantes from "./Cl_mEstudiantes.js";
import Cl_controlador from "./Cl_controlador.js";

export default class Cl_principal {
  constructor() {
    let vistaApp = new Cl_vAplicacion();
    let mMaterias = new Cl_mMaterias();
    let mEstudiantes = new Cl_mEstudiantes();
    let controlador = new Cl_controlador({
      mEstudiantes: mEstudiantes,
      mMaterias: mMaterias,
      vistaApp: vistaApp,
    });
    vistaApp.controlador = controlador;
    controlador.activarVista("main");
  }
}

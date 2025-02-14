import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

    public get_formulario(){
        return [
            { id: 1, Titulo: 'Formulario planilla dsadsad', Descripcion: 'descripcion al formulario', fechaCreacion: new Date('2012-12-12') },
            { id: 2, Titulo: 'Formulario beca postulante', Descripcion: 'descripcion al formulario', fechaCreacion: new Date('2012-12-12') },
            { id: 3, Titulo: 'Formulario beca posgrado', Descripcion: 'descripcion al formulario', fechaCreacion: new Date('2012-12-12') }
          ];
    }
    public get_input(){
        return [
            { id: 1, formulario: 1, Pregunta: 'pregunta para responer texto',     tipo: 1, fechaCreacion: new Date('2012-12-12') },
            { id: 2, formulario: 1, Pregunta: 'pregunta para responer numero',    tipo: 2, fechaCreacion: new Date('2012-12-12') },
            { id: 3, formulario: 1, Pregunta: 'pregunta para responer parrafo',   tipo: 3, fechaCreacion: new Date('2012-12-12') },
            { id: 4, formulario: 1, Pregunta: 'pregunta para responer Cargar Archivo', tipo: 4, fechaCreacion: new Date('2012-12-12') },
            { id: 5, formulario: 1, Pregunta: 'pregunta para responer unica',     tipo: 5, fechaCreacion: new Date('2012-12-12') },
            { id: 6, formulario: 2, Pregunta: 'pregunta para responer multiple',  tipo: 3, fechaCreacion: new Date('2012-12-12') },
            { id: 7, formulario: 2, Pregunta: 'pregunta para responer multiple',  tipo: 3, fechaCreacion: new Date('2012-12-12') },
            { id: 7, formulario: 3, Pregunta: 'pregunta para responer multiple',  tipo: 3, fechaCreacion: new Date('2012-12-12') }
        ];
    }
    public get_input_tipo(){
        return [
            {name: 'texto', code: 1},
            {name: 'numberico', code: 2},
            {name: 'Parrafo', code: 3},
            {name: 'Cargar acrchivo', code: 4},
            {name: 'selecion unica', code: 5},
            {name: 'selecion multiple', code: 6},
        ];
    }
    public get_input_tipo_list(){
        return [
            {id:1, name: 'respuesta 1', key: 'A', id_input: 5},
            {id:2, name: 'respuesta 2', key: 'M', id_input: 6},
            {id:3, name: 'respuesta 3', key: 'P', id_input: 5},
            {id:4, name: 'respuesta 4', key: 'R', id_input: 6}
        ];
    }

}

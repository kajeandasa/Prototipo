import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// Importación de módulos de PrimeNG para usarlos en la vista y funcionalidad.
import { ConfirmationService, MessageService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { SelectModule } from 'primeng/select';
import { Table, TableModule } from 'primeng/table';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { RippleModule } from 'primeng/ripple';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
// Importación de componentes de PrimeNG para trabajar con formularios, tablas, fechas y validaciones.
import { TextareaModule } from 'primeng/textarea';
import { DatePickerModule } from 'primeng/datepicker';
import { CalendarModule } from 'primeng/calendar';
import { ListboxModule } from 'primeng/listbox';
// Importación de las validaciones de los inputs con KeyFilter
import { KeyFilterModule } from 'primeng/keyfilter';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CardModule } from 'primeng/card';
import { InputNumberModule } from 'primeng/inputnumber';
import { EditorModule } from 'primeng/editor';
import { FileUploadModule } from 'primeng/fileupload';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SkeletonModule } from 'primeng/skeleton';

import { FormGroup, FormControl } from '@angular/forms';
// Interfaz para gestionar filas expandidas en tablas
interface expandedRows {
  [key: string]: boolean;
}

@Component({
  selector: 'app-formularioUsuario',

  standalone: true,
  imports: [
    SkeletonModule,
    RadioButtonModule,
    CheckboxModule,
    FileUploadModule,
    EditorModule,
    InputNumberModule,
    CardModule,
    ListboxModule,
    CalendarModule,
    DatePickerModule,
    TextareaModule,
    TableModule,
    MultiSelectModule,
    SelectModule,
    InputIconModule,
    InputTextModule,
    ToggleButtonModule,
    CommonModule,
    FormsModule,
    ButtonModule,
    RatingModule,
    RippleModule,
    IconFieldModule,
    KeyFilterModule,
    ConfirmDialogModule
  ],
  templateUrl: './formulario-usuario.component.html',
  styleUrl: './formulario-usuario.component.scss'
})
export class FormularioUsuarioComponent {
    id_formulario = 1;  //declarar el formulario (id) que se quiree contestar
    id_usuario = 1;     //declarar el usuario (id)  del usuario qcontesta el formulario

    selectRespuesta!: string;   //select respuesta indefinida para los checkbox o radio botton
    date: Date | undefined;     //fecha indefinio

    // datos de los formulario
    Formulario = [
      { id: 1, Titulo: 'Formulario planilla', Descripcion: 'descripcion al formulario', fechaCreacion: new Date('2012-12-12') },
      { id: 2, Titulo: 'Formulario beca postulante', Descripcion: 'descripcion al formulario', fechaCreacion: new Date('2012-12-12') }
    ];
    //inputs
    input = [
        { id: 1, formulario: 1, Pregunta: 'pregunta para responer texto',     tipo: 1, fechaCreacion: new Date('2012-12-12') },
        { id: 2, formulario: 2, Pregunta: 'pregunta para responer numero',    tipo: 2, fechaCreacion: new Date('2012-12-12') },
        { id: 3, formulario: 1, Pregunta: 'pregunta para responer parrafo',   tipo: 3, fechaCreacion: new Date('2012-12-12') },
        { id: 4, formulario: 1, Pregunta: 'pregunta para responer Cargar Archivo', tipo: 4, fechaCreacion: new Date('2012-12-12') },
        { id: 5, formulario: 1, Pregunta: 'pregunta para responer unica',     tipo: 5, fechaCreacion: new Date('2012-12-12') },
        { id: 6, formulario: 1, Pregunta: 'pregunta para responer multiple',  tipo: 6, fechaCreacion: new Date('2012-12-12') }
    ];
    // tipo de inputs
    input_tipo =[
        {name: 'texto', code: 1},
        {name: 'numberico', code: 2},
        {name: 'Parrafo', code: 3},
        {name: 'Cargar acrchivo', code: 4},
        {name: 'selecion unica', code: 5},
        {name: 'selecion multiple', code: 6},
    ];
    //en el casoq
    input_tipo_list = [
        {id:1, name: 'respuesta 1', key: 'A', id_input: 5},
        {id:2, name: 'respuesta 2', key: 'M', id_input: 6},
        {id:3, name: 'respuesta 3', key: 'P', id_input: 5},
        {id:4, name: 'respuesta 4', key: 'R', id_input: 6}
    ];



    // Método para filtrar inputs dependiendo del formulario
    getFilteredInput(id: number) {
        return this.input.filter(item => item.formulario === id);
    }

    // Método para filtrar input lista dependidndo del input
    getFilteredInputTipoList(id: number) {
        return this.input_tipo_list.filter(item => item.id_input === id);
    }

    getdata_array(array: any[], id: number) {
        return array.find(item => item.id === id);
    }




    // Variable para controlar el estado de carga
    loading: boolean = true;
    // Inicializa el componente y simula la carga de datos
    ngOnInit() {
      setTimeout(() => {
        this.loading = false;  // Cambia el estado de carga cuando los datos estén listos
      }, 2000);
    }

    // Método para limpiar los filtros aplicados en la tabla
    clear(table: any) {
      table.clear();
    }

    // Filtro global para buscar en todas las columnas de la tabla
    onGlobalFilter(table: any, event: any) {
      table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }



}

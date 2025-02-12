import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// Importación de módulos de PrimeNG para usarlos en la vista y funcionalidad.
import { ConfirmationService, MessageService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { SelectModule } from 'primeng/select';
import { SliderModule } from 'primeng/slider';
import { Table, TableModule } from 'primeng/table';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToastModule } from 'primeng/toast';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { RippleModule } from 'primeng/ripple';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { TagModule } from 'primeng/tag';
// Importación de componentes de PrimeNG para trabajar con formularios, tablas, fechas y validaciones.
import { DialogModule } from 'primeng/dialog';
import { TextareaModule } from 'primeng/textarea';
import { DatePickerModule } from 'primeng/datepicker';
import { CalendarModule } from 'primeng/calendar';
import { ListboxModule } from 'primeng/listbox';
// Importación de las validaciones de los inputs con KeyFilter
import { KeyFilterModule } from 'primeng/keyfilter';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ActivatedRoute } from '@angular/router';
import { CardModule } from 'primeng/card';
import { InputNumberModule } from 'primeng/inputnumber';
import { EditorModule } from 'primeng/editor';
import { FileUploadModule } from 'primeng/fileupload';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SkeletonModule } from 'primeng/skeleton';

import { PanelModule } from 'primeng/panel';


// Interfaz para gestionar filas expandidas en tablas
interface expandedRows {
  [key: string]: boolean;
}

@Component({
  selector: 'app-formularioItem',
  imports: [
    PanelModule,
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
    TagModule,
    InputTextModule,
    SliderModule,
    ProgressBarModule,
    ToggleButtonModule,
    ToastModule,
    CommonModule,
    FormsModule,
    ButtonModule,
    RatingModule,
    RippleModule,
    IconFieldModule,
    DialogModule,
    KeyFilterModule,
    ConfirmDialogModule
  ],
  templateUrl: './item-formulario.component.html',  // Enlaza la plantilla HTML del componente
})

export class ItemFormularioComponent implements OnInit {
    id!: number;

    id_formulario = 1;  //declarar el formulario (id) que se quiree contestar
    id_usuario = 1;     //declarar el usuario (id)  del usuario qcontesta el formulario

    selectRespuesta!: string;   //select respuesta indefinida para los checkbox o radio botton
    date: Date | undefined;     //fecha indefinio

    constructor(private route: ActivatedRoute) {}



    // datos de los formulario
    Formulario = [
        { id: 1, Titulo: 'Formulario planilla', Descripcion: 'descripcion al formulario', fechaCreacion: new Date('2012-12-12') },
        { id: 2, Titulo: 'Formulario para ', Descripcion: 'descripcion al formulario', fechaCreacion: new Date('2012-12-12') }
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

    input = [
        { id: 1, formulario: 1, Pregunta: 'pregunta para responer texto',     tipo: 1, fechaCreacion: new Date('2012-12-12') },
        { id: 2, formulario: 2, Pregunta: 'pregunta para responer numero',    tipo: 2, fechaCreacion: new Date('2012-12-12') },
        { id: 3, formulario: 2, Pregunta: 'pregunta para responer parrafo',   tipo: 3, fechaCreacion: new Date('2012-12-12') },
        { id: 4, formulario: 2, Pregunta: 'pregunta para responer Cargar Archivo', tipo: 4, fechaCreacion: new Date('2012-12-12') },
        { id: 5, formulario: 2, Pregunta: 'pregunta para responer unica',     tipo: 5, fechaCreacion: new Date('2012-12-12') },
        { id: 6, formulario: 1, Pregunta: 'pregunta para responer multiple',  tipo: 6, fechaCreacion: new Date('2012-12-12') }
    ];
    //en el casoq
    input_tipo_list = [
        {id:1, name: 'respuesta 1', key: 'A', id_input: 5},
        {id:2, name: 'respuesta 2', key: 'M', id_input: 6},
        {id:3, name: 'respuesta 3', key: 'P', id_input: 5},
        {id:4, name: 'respuesta 4', key: 'R', id_input: 6},
    ];


    // Método para filtrar inputs dependiendo del formulario
    getFilteredInput(id: number) {
        return this.input.filter(item => item.formulario === id);
    }
    // Método para filtrar input lista dependidndo del input
    getFilteredInputTipoList(id: number) {
        return this.input_tipo_list.filter(item => item.id_input === id);
    }


    seleccionarFormulario(id: number) {
      this.id = id;
    }

    getTituloFormulario(id: number) {
      return this.Formulario.find(form => form.id === id)?.Titulo || 'Sin título';
    }







    getTaskById(id: number) {
        return this.Formulario.find(task => task.id === id);
      }

      selectedTask: any = {};  // Almacena la tarea seleccionada

    Modal_agregar: boolean = false;
    modalabrir_agregar(task?: any){
        this.Modal_agregar = true;
    }
    Modal_Editar: boolean = false;
    modalabrir_editar(task?: any){
        this.Modal_Editar = true;

        this.selectedTask = { ...task };
    };

    // Variable para controlar el estado de carga
    loading: boolean = true;

    // Inicializa el componente y simula la carga de datos
    ngOnInit() {
      setTimeout(() => {
        this.loading = false;  // Cambia el estado de carga cuando los datos estén listos
      }, 2000);
      this.route.paramMap.subscribe(params => {
        this.id = Number(params.get('id')); // Convierte el ID a número
      });
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

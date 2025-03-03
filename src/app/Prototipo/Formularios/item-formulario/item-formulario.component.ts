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
<<<<<<< HEAD
import { InputNumberModule } from 'primeng/inputnumber';
import { EditorModule } from 'primeng/editor';
import { FileUploadModule } from 'primeng/fileupload';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SkeletonModule } from 'primeng/skeleton';

import { PanelModule } from 'primeng/panel';



import { FormularioService } from '../formulario.service';
=======

>>>>>>> main
// Interfaz para gestionar filas expandidas en tablas
interface expandedRows {
  [key: string]: boolean;
}

@Component({
<<<<<<< HEAD
  selector: 'app-formularioItem',
  imports: [
    PanelModule,
    SkeletonModule,
    RadioButtonModule,
    CheckboxModule,
    FileUploadModule,
    EditorModule,
    InputNumberModule,
=======
  selector: 'app-convocatoria',
  imports: [
>>>>>>> main
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

<<<<<<< HEAD
    id_formulario = 1;  //declarar el formulario (id) que se quiree contestar
    id_usuario = 1;     //declarar el usuario (id)  del usuario qcontesta el formulario

    selectRespuesta!: string;   //select respuesta indefinida para los checkbox o radio botton
    date: Date | undefined;     //fecha indefinio



    Formulario: any[] = []; // Inicializar como array vacío
    input: any[]=[];
    input_tipo: any[]=[];
    input_tipo_list: any[]=[];

    constructor(
        private formularioService: FormularioService,
        private route: ActivatedRoute
      ) {}
    // Inicializa el componente y simula la carga de datos
    ngOnInit() {
        setTimeout(() => {
            this.loading = false;  // Cambia el estado de carga cuando los datos estén listos
        }, 4000);

        this.route.paramMap.subscribe(params => {
            this.id = Number(params.get('id')); // Convierte el ID a número
        });

        // Array inicializado con el servisio
        this.Formulario         = this.formularioService.get_formulario();
        this.input              = this.formularioService.get_input();
        this.input_tipo         = this.formularioService.get_input_tipo();
        this.input_tipo_list    = this.formularioService.get_input_tipo_list();
    }



    // Método para filtrar inputs dependiendo del formulario
    getFilteredInput(id: number) {
        return this.input.filter(item => item.formulario === id);
    }
    // Método para filtrar input lista dependidndo del input
    getFilteredInputTipoList(id: number) {
        return this.input_tipo_list.filter(item => item.id_input === id);
    }


=======
    constructor(private route: ActivatedRoute) {}



    Formulario = [
      { id: 1, Titulo: 'Formulario planilla', Descripcion: 'descripcion al formulario', fechaCreacion: new Date('2012-12-12') },
      { id: 2, Titulo: 'Formulario para ', Descripcion: 'descripcion al formulario', fechaCreacion: new Date('2012-12-12') }
    ];

    tipo =[
        {name: 'texto', code: 1},
        {name: 'numberico', code: 2},
        {name: 'Parrafo', code: 3},
        {name: 'Cargar acrchivo', code: 4},
        {name: 'selecion unica', code: 5},
        {name: 'selecion multiple', code: 6},
    ];
    tasks = [
      { id: 2, formulario: 1, Pregunta: 'hola?', tipo: '1', fechaCreacion: new Date('2012-12-12') },
      { id: 2, formulario: 1, Pregunta: '', tipo: '1', fechaCreacion: new Date('2012-12-12') },
      { id: 2, formulario: 2, Pregunta: 'una pregunta', tipo: '1', fechaCreacion: new Date('2012-12-12') },
      { id: 2, formulario: 2, Pregunta: '', tipo: '1', fechaCreacion: new Date('2012-12-12') },
      { id: 2, formulario: 2, Pregunta: '', tipo: '1', fechaCreacion: new Date('2012-12-12') },
      { id: 2, formulario: 2, Pregunta: '', tipo: '1', fechaCreacion: new Date('2012-12-12') },
      { id: 2, formulario: 2, Pregunta: '', tipo: '1', fechaCreacion: new Date('2012-12-12') }
    ];

    get filteredTasks() {
      return this.id
        ? this.tasks.filter(task => task.formulario === this.id)
        : this.tasks; // Si no se ha seleccionado, muestra todas
    }

>>>>>>> main
    seleccionarFormulario(id: number) {
      this.id = id;
    }

    getTituloFormulario(id: number) {
      return this.Formulario.find(form => form.id === id)?.Titulo || 'Sin título';
    }

<<<<<<< HEAD
    getTaskById(id: number) {
        return this.Formulario.find(task => task.id === id);
    }
    selectedTask: any = {};  // Almacena la tarea seleccionada
=======






    getTaskById(id: number) {
        return this.Formulario.find(task => task.id === id);
      }

      date: Date | undefined;
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
>>>>>>> main

    // Variable para controlar el estado de carga
    loading: boolean = true;

<<<<<<< HEAD

}
//
=======
    // Inicializa el componente y simula la carga de datos
    ngOnInit() {
      setTimeout(() => {
        this.loading = false;  // Cambia el estado de carga cuando los datos estén listos
      }, 2000);
      this.route.paramMap.subscribe(params => {
        this.id = Number(params.get('id')); // Convierte el ID a número
        console.log('ID recibido:', this.id); // Muestra el ID en la consola
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
>>>>>>> main

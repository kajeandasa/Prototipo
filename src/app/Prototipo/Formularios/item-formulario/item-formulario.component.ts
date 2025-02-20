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



import { FormularioService } from '../formulario.service';
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

    // Variable para controlar el estado de carga
    loading: boolean = true;


}
//

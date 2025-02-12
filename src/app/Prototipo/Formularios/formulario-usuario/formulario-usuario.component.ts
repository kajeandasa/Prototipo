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




import { FormularioService } from '../formulario.service';

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
  templateUrl: './formulario-usuario.component.html'
})
export class FormularioUsuarioComponent{
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
      ) {}
    // Inicializa el componente y simula la carga de datos
    ngOnInit() {
        setTimeout(() => {
            this.loading = false;  // Cambia el estado de carga cuando los datos estén listos
        }, 2000);
        // Array con las tareas o solicitudes de los postulantes
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

    getdata_array(array: any[], id: number) {
        return array.find(item => item.id === id);
    }




    // Variable para controlar el estado de carga
    loading: boolean = true;

    // Método para limpiar los filtros aplicados en la tabla
    clear(table: any) {
      table.clear();
    }

    // Filtro global para buscar en todas las columnas de la tabla
    onGlobalFilter(table: any, event: any) {
      table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }



}

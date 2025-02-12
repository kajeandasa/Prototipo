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
import { Router } from '@angular/router';
// Importación de componentes de PrimeNG para trabajar con formularios, tablas, fechas y validaciones.
import { DialogModule } from 'primeng/dialog';
import { TextareaModule } from 'primeng/textarea';
import { DatePickerModule } from 'primeng/datepicker';
import { CalendarModule } from 'primeng/calendar';
import { ListboxModule } from 'primeng/listbox';
// Importación de las validaciones de los inputs con KeyFilter
import { KeyFilterModule } from 'primeng/keyfilter';
import { ConfirmDialogModule } from 'primeng/confirmdialog';


import { FormularioService } from '../formulario.service';

// Interfaz para gestionar filas expandidas en tablas
interface expandedRows {
  [key: string]: boolean;
}

@Component({
  selector: 'app-formulario',
  imports: [
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
  templateUrl: './formulario.component.html',  // Enlaza la plantilla HTML del componente
})
export class FormularioComponent{

    Formulario: any[] = []; // Inicializar como array vacío
    input: any[]=[];
    input_tipo: any[]=[];
    input_tipo_list: any[]=[];

    constructor(
        private formularioService: FormularioService,
        private router: Router
      ) {}
    // Inicializa el componente y simula la carga de datos
    ngOnInit() {
        setTimeout(() => {
            this.loading = false;  // Cambia el estado de carga cuando los datos estén listos
        }, 2000);
        // Array con las tareas o solicitudes de los postulantes
        this.Formulario = this.formularioService.get_formulario();
        this.input = this.formularioService.get_input();
        this.input_tipo = this.formularioService.get_input_tipo();
        this.input_tipo_list = this.formularioService.get_input_tipo_list();
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



    // Método para limpiar los filtros aplicados en la tabla
    clear(table: any) {
    table.clear();
    }

    // Filtro global para buscar en todas las columnas de la tabla
    onGlobalFilter(table: any, event: any) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }
    iraVerRespuesta() {
    this.router.navigate(['/beca/formulario-usuario']);
    }

    irADetallesConId(id: number) {
    this.router.navigate(['/beca/itemformulario/', id]); // Redirige a "/detalles/1"
    }


    // Variable para controlar el estado de carga
    loading: boolean = true;



}

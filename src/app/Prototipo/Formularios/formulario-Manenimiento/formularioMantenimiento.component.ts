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

// Interfaz para gestionar filas expandidas en tablas
interface expandedRows {
  [key: string]: boolean;
}

@Component({
  selector: 'app-forumarioMantenimiento',
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
  templateUrl: './formularioMantenimiento.component.html',  // Enlaza la plantilla HTML del componente
})
export class FormularioManteminientoComponent{

// Array con las tareas o solicitudes de los postulantes
tasks = [
  {
    id: 1,
    Titulo: 'Texto',
    Descripcion: 'la entrada sera un texto'
  },
  {
    id: 2,
    Titulo: 'Numero',
    Descripcion: 'la entrada dejar solo excirbir datos de tipo numero'
  }
];

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

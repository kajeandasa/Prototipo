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
import { CardModule } from 'primeng/card';
import { InputNumberModule } from 'primeng/inputnumber';
import { EditorModule } from 'primeng/editor';
import { FileUploadModule } from 'primeng/fileupload';
// Interfaz para gestionar filas expandidas en tablas
interface expandedRows {
  [key: string]: boolean;
}

@Component({
  selector: 'app-formularioUsuario',

  standalone: true,
  imports: [
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
    ProgressBarModule,
    ToggleButtonModule,
    ToastModule,
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
    id = 2;



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
      { id: 2, formulario: 1, Pregunta: 'pregunta para responer texto',     tipo: 1, fechaCreacion: new Date('2012-12-12') },
      { id: 2, formulario: 1, Pregunta: 'pregunta para responer numero',    tipo: 2, fechaCreacion: new Date('2012-12-12') },
      { id: 2, formulario: 2, Pregunta: 'pregunta para responer parrafo',   tipo: 3, fechaCreacion: new Date('2012-12-12') },
      { id: 2, formulario: 2, Pregunta: 'pregunta para responer Cargar Archivo', tipo: 4, fechaCreacion: new Date('2012-12-12') },
      { id: 2, formulario: 2, Pregunta: 'pregunta para responer unica',     tipo: 5, fechaCreacion: new Date('2012-12-12') },
      { id: 2, formulario: 2, Pregunta: 'pregunta para responer multiple',  tipo: 6, fechaCreacion: new Date('2012-12-12') }
    ];

    get filteredTasks() {
      return this.id
        ? this.tasks.filter(task => task.formulario === this.id)
        : this.tasks; // Si no se ha seleccionado, muestra todas
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

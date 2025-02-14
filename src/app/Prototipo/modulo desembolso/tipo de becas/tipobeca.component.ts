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
import { AccordionModule } from 'primeng/accordion';
import { TabsModule } from 'primeng/tabs';
import { FileUpload } from 'primeng/fileupload';
import { ToggleSwitch } from 'primeng/toggleswitch';

// Interfaz para gestionar filas expandidas en tablas
interface expandedRows {
  [key: string]: boolean;
}

@Component({
  selector: 'app-convocatoria',
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
    AccordionModule,
    TabsModule,
  ],
  templateUrl: './tipobeca.component.html',  // Enlaza la plantilla HTML del componente
  styleUrl: './tipobeca.component.scss',   // Enlaza el archivo de estilos SCSS del componente
  standalone: true,
  providers: [MessageService, ConfirmationService], // Asegurar que MessageService esté disponible
})
export class TipoBecaComponent {

  // Array con los datos de la tabla tipo de beca
  tasks = [
    {
        id: 1,
        nombre: 'Beca sustantiva de investigación e innovación en pro de impactos en la realidad nacional',
    },
    {
        id: 2,
        nombre: 'Beca básica institucional para el fortalecimiento de grupos de investigación',
    },
    {
        id: 3,
        nombre: 'Beca básica de grado como espacios de aprendizaje del método científico',
    },
    {
        id: 4,
        nombre: 'Beca básica de postgrado para la eficiencia terminal de tesis',
    },

  ];
  
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

  // Variables para controlar la visibilidad de los modales
  displayModal: boolean = false;  // Controla la visibilidad del modal
  displayNewModal: boolean = false; // Controla la visibilidad del modal de nueva solicitud
  Date_final: Date | null = null; // Almacena la fecha seleccionada
  Date_hoy: Date = new Date();  // Fecha actual
  selectedTask: any = {};  // Almacena la tarea seleccionada
  isNewModal: boolean = false;  // Determina si es un modal nuevo o de edición
  imagen: boolean = false;  // Controla la visibilidad del modal
  imagenUrl: string = '';   // Guarda la URL de la imagen a mostrar


  // Método para abrir los diferentes tipos de modal según el tipo
  openModal(task?: any) {
    if (task) {
      this.selectedTask = { ...task };  // Copia la tarea seleccionada
      this.isNewModal = false;  // Es un modal de detalles
      this.displayModal = true;  // Abre el modal de detalles
    } else {
      this.selectedTask = {};  // Inicializa la tarea vacía para nueva solicitud
      this.isNewModal = true;  // Es un modal de nueva solicitud
      this.displayNewModal = true;  // Abre el modal de nueva solicitud
    }
  }

  imagenClase: string = 'imagen-becario';

  openImageModal(imageType: string) {
    this.imagenClase = imageType === 'becario' ? 'imagen-becario' : 'imagen-aval';
    this.imagen = true;
  }
  
  //Declara que el boton de switch esta en no o cancelar
  checked: boolean = false;
    
}

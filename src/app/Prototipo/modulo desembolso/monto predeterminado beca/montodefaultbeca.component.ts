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
import { DropdownModule } from 'primeng/dropdown';

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
    DropdownModule
  ],
  templateUrl: './montodefaultbeca.component.html',  // Enlaza la plantilla HTML del componente
  styleUrl: './montodefaultbeca.component.scss',   // Enlaza el archivo de estilos SCSS del componente
  standalone: true,
  providers: [MessageService, ConfirmationService], // Asegurar que MessageService esté disponible
})
export class montodefaultbecaComponent {

  // Array con los datos de la tabla del monto real de las becas
  tasks = [
    {
        id: 1,
        nombre: 'Beca sustantiva de investigación e innovación en pro de impactos en la realidad nacional',
        monto: '500,000.00',
        duracion: '12 meses',
    },
    {
        id: 2,
        nombre: 'Beca básica institucional para el fortalecimiento de grupos de investigación',
        monto: '75,000.00',
        duracion: '12 meses',
    },
    {
        id: 3,
        nombre: 'Beca básica de grado como espacios de aprendizaje del método científico',
        monto: '25,000.00',
        duracion: '6 meses',
    },
    {
        id: 4,
        nombre: 'Beca básica de postgrado para la eficiencia terminal de tesis',
        monto: '40,000.00',
        duracion: '6 meses',
    },
    {
        id: 5,
        nombre: 'Beca básica de postgrado para la eficiencia terminal de tesis',
        monto: '80,000.00',
        duracion: '6 meses',
    },

  ];

  // Array para almacenar los becas para el select
  selectedBeca: any[] = [];

  beca = [
      { name: 'Beca sustantiva de investigación e innovación en pro de impactos en la realidad nacional', code: 'BS' },
      { name: 'Beca básica institucional para el fortalecimiento de grupos de investigación', code: 'BGI' },
      { name: 'Beca básica de grado como espacios de aprendizaje del método científico', code: 'BG' },
      { name: 'Beca básica de postgrado para la eficiencia terminal de tesis', code: 'BP' }
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
  clear(table: Table, searchInput: HTMLInputElement) {
    table.clear(); // Limpia los filtros aplicados en la tabla
    searchInput.value = ''; // Borra el contenido del input de búsqueda
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

  // Array para almacenar la cantidad para el select
  selectedcantidad: any[] = [];

  cantidad = [
      { name: '1', code: '1' },
      { name: '2', code: '2' },
      { name: '3', code: '3' },
      { name: '4', code: '4' },
      { name: '5', code: '5' },
      { name: '6', code: '6' },
      { name: '7', code: '7' },
      { name: '8', code: '8' },
      { name: '9', code: '9' },
      { name: '10', code: '10' },
      { name: '11', code: '11' },
      { name: '12', code: '12' },
  ];

  // Array para almacenar la unidad de tiempo para el select
  selectedunidadtiempo: any[] = [];

  unidadtiempo = [
      { name: 'Mes', code: 'M' },
      { name: 'Meses', code: 'MM' },
      { name: 'Semestre', code: 'S' },
      { name: 'Semestres', code: 'SS' },
      { name: 'Año', code: 'A' },
      { name: 'Años', code: 'AA' },
  ];
    
}

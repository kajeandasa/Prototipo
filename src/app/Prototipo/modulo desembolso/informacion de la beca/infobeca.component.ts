
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
  templateUrl: './infobeca.component.html',  // Enlaza la plantilla HTML del componente
  styleUrl: './infobeca.component.scss',   // Enlaza el archivo de estilos SCSS del componente
  standalone: true,
  providers: [MessageService, ConfirmationService], // Asegurar que MessageService esté disponible
})
export class becasComponent implements OnInit {

  // Array con los datos de la tabla becas
  tasks = [
    {
        id: 1,
        soli: 'BCHI-1',
        beca: 'Beca sustantiva de investigación e innovación en pro de impactos en la realidad nacional',
        montobeca: '500,000.00',
        postulante: 'María Fernanda López Hernández',
        montoasignado: '400,000.00',
        direccionDomicilio: 'Col. Centro, Tegucigalpa',
        numeroIdentidad: '0801-1990-12345',
        numeroRTN: '12345678901234',
        estadoCivil: 'Soltero',
        profesion: 'Ingeniería en Sistemas',
        correoElectronico: 'juan.perez@example.com',
        numeroTelefono: '9999-9999',
        numeroEstudiante: '20210001',
        nombreCarrera: 'Ingeniería en Sistemas',
        nombreProyecto: 'Beca Nacional Universitaria',
        aval: "Lic. Carlos Rodríguez",
        estado: "Pendiente de aprobación de aval",
        fechaCreacion: "2025-01-15",
    },
    {
        id: 2,
        soli: 'BCHI-2',
        beca: 'Beca básica institucional para el fortalecimiento de grupos de investigación',
        montobeca: '75,000.00',
        postulante: 'Juan Carlos Rodríguez Martínez',
        montoasignado: '70,000.00',
    },
    {
        id: 3,
        soli: 'BCHI-3',
        beca: 'Beca básica de grado como espacios de aprendizaje del método científico',
        montobeca: '25,000.00',
        postulante: 'Sofía Isabel Torres Ramírez',
        montoasignado: '20,000.00',
    },
    {
        id: 4,
        soli: 'BCHI-4',
        beca: 'Beca básica de postgrado para la eficiencia terminal de tesis',
        montobeca: '40,000.00',
        postulante: 'Pedro Antonio García Fernández',
        montoasignado: '30,000.00',
    },
    {
        id: 5,
        soli: 'BCHI-5',
        beca: 'Beca básica de postgrado para la eficiencia terminal de tesis',
        montobeca: '80,000.00',
        postulante: 'Ana Lucía Martínez Vega',
        montoasignado: '75,000.00',
    },

  ];

  // Array para almacenar las solicitudes para el select
  selectedsoli: any[] = [];

  soli = [
      { name: 'BCHI-1', code: 'B1' },
      { name: 'BCHI-2', code: 'B2' },
      { name: 'BCHI-3', code: 'B3' },
      { name: 'BCHI-4', code: 'B4' },
      { name: 'BCHI-5', code: 'B5' },
  ];

  // Array para almacenar las becas para el select
  selectedbeca: any[] = [];

  beca = [
        { name: 'Beca sustantiva de investigación e innovación en pro de impactos en la realidad nacional/500,000.00', code: 'BS' },
        { name: 'Beca básica institucional para el fortalecimiento de grupos de investigación/75,000.00', code: 'BGI' },
        { name: 'Beca básica de grado como espacios de aprendizaje del método científico25,000.00', code: 'BG' },
        { name: 'Beca básica de postgrado para la eficiencia terminal de tesis/40,000.00', code: 'BP' },
        { name: 'Beca básica de postgrado para la eficiencia terminal de tesis/80,000.00', code: 'BP' },
  ];

  // Array para almacenar los postulantes para el select
  selectedpostulante: any[] = [];

  postulante = [
      { name: 'María Fernanda López Hernández', code: 'MFLH' },
      { name: 'Juan Carlos Rodríguez Martínez', code: 'JCRM' },
      { name: 'Sofía Isabel Torres Ramírez', code: 'SITR' },
      { name: 'Pedro Antonio García Fernández', code: 'PAGF' },
      { name: 'Ana Lucía Martínez Vega', code: 'ALMV' },
  ];

  // Propiedades para la selección dinámica de columnas
  Cols: any[] = [
    { field: 'id', header: 'Número de Beca' },
    { field: 'soli', header: 'Número de Solicitud' },
    { field: 'beca', header: 'Beca' },
    { field: 'montobeca', header: 'Monto de la Beca' },
    { field: 'postulante', header: 'Postulante' },
    { field: 'montoasignado', header: 'Monto Asignado' },
  ];

  //Muestra por defecto todas las columnas en la tabla
  selectedColumns = [...this.Cols];

  // Alerta seleccionada para editar
  editarColumns: any = null;

  // Método para determinar si una columna está seleccionada (usado para el encabezado dinámico)
  isColumnSelected(field: string): boolean {
    return this.selectedColumns.some(col => col.field === field);
  }

  activeIndex: number = 0;

  activeIndexChange(index : number){
      this.activeIndex = index;
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
      this.selectedTask = {...task};  // Inicializa la tarea vacía para nueva solicitud
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

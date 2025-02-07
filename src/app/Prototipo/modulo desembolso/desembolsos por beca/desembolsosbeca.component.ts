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
    FileUpload,
  ],
  templateUrl: './desembolsosbeca.component.html',  // Enlaza la plantilla HTML del componente
  styleUrl: './desembolsosbeca.component.scss',   // Enlaza el archivo de estilos SCSS del componente
  standalone: true,
  providers: [MessageService, ConfirmationService], // Asegurar que MessageService esté disponible
})
export class desembolsoBecaComponent {

  // Array con las tareas o solicitudes de los postulantes
  tasks = [
    {
        id: 1,
        nombre: 'Beca sustantiva de investigación e innovación en pro de impactos en la realidad nacional',
        monto: '500,000.00'
    },
    {
        id: 2,
        nombre: 'Beca básica institucional para el fortalecimiento de grupos de investigación',
        monto: '75,000.00'
    },
    {
        id: 3,
        nombre: 'Beca básica de grado como espacios de aprendizaje del método científico',
        monto: '25,000.00'
    },
    {
        id: 4,
        nombre: 'Beca básica de postgrado para la eficiencia terminal de tesis',
        monto: '0801-1990-12345'
    }

  ];

  // Array con los licenciados disponibles para asignar a las solicitudes
  licenciados: any[] = [
    { name: 'Dr. Juan Pérez', code: 'JP' },
    { name: 'Dra. María Gómez', code: 'MG' },
    { name: 'Lic. Carlos Rodríguez', code: 'CR' },
    { name: 'Lic. Ana López', code: 'AL' },
    { name: 'Dr. Luis Fernández', code: 'LF' }
  ];

  beca: any[] = [
      { name: 'Beca sustantiva de investigación e innovación en pro de impactos en la realidad nacional', code: 'BS' },
      { name: '', code: 'BGI' },
      { name: '', code: 'BG' },
      { name: '', code: 'BP' }
  ];
  
  fondo: any[] = [
      { name: 'Fondos concursables para Proyectos de investigación científica ', code: 'FPIC' },
      { name: 'Fondos concursables para Proyectos de investigación, desarrollo e innovación (I+D+I)', code: 'FIDI' },
      { name: 'Fondos concursables para Proyectos de investigación para el desarrollo curricular o para el apoyo a la gestión curricular para la investigación.', code: 'FDGI' },
  ];

  financiacion: any[] = [
      { name: 'Becas de investigación científica, humanistica y/o de innovación', code: 'BICHI' },
      { name: 'Fondos concursables para el fortalecimiento institucional de los organos del SICIHT)', code: 'FIDI' },
  ];

  // Array para almacenar los licenciados para el select
  selectedLicenciados: any[] = [];
  
  // Array para almacenar los becas para el select
  selectedBeca: any[] = [];

  // Array para almacenar las becas para el select
  selectedFondo: any[] = [];

  // Array para almacenar las becas para el select
  selectedfinanciacion: any[] = [];
  
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
  
  // Lista de posibles estados de las solicitudes
  Estatus = [
    { name: 'Abierta', code: 'TRUE' },
    { name: 'Cerrada', code: 'FALSE' },
    { name: 'Pendiente', code: 'null' }
  ];

  // Variable para almacenar la ciudad seleccionada (aunque no está en uso en el código actual)
  selectedCity: any = null; 



  activeIndex: number = 0;

    activeIndexChange(index : number){
        this.activeIndex = index;
    }
  
  //Para subir archivos 
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      console.log("Archivo seleccionado:", file.name);
    }
  }

  uploadedFiles: any[] = [];

  constructor(private messageService: MessageService) {}

  onUpload(event: any) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }

    this.messageService.add({
      severity: 'info',
      summary: 'Éxito',
      detail: 'Archivo subido correctamente'
    });

    console.log("Archivos subidos:", this.uploadedFiles);
  }  

  
    
}

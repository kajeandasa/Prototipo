
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
  templateUrl: './intereses.component.html',  // Enlaza la plantilla HTML del componente
  styleUrl: './intereses.component.scss',   // Enlaza el archivo de estilos SCSS del componente
  standalone: true,
  providers: [MessageService, ConfirmationService], // Asegurar que MessageService esté disponible
})
export class interesesComponent { 

  // Array con los datos de la tabla solicitud prorroga
  tasks = [
    {
        id: 1,
        becario: 'María Fernanda López Hernández',
        beca: 'Beca sustantiva de investigación e innovación en pro de impactos en la realidad nacional' ,
        porcentaje: '10%',
        descripcioninteres: 'No se entregó el informe final en el plazo estipulado',
        montotal: '550,000.00',

        fecha: '01/01/2025',
        tipo: 'Suspención de la Beca',
        descripcion: 'No se entregó el informe final en el plazo estipulado.',
    },
    {
        id: 2,
        becario: 'Juan Carlos Rodríguez Martínez',
        beca: 'Beca básica institucional para el fortalecimiento de grupos de investigación' ,
        porcentaje: '20%',
        descripcioninteres: 'Problemas con el proyecto llevaron a la suspensión de la beca',
        montotal: '90,000.00',

        fecha: '14/02/2025',
        tipo: 'Cancelación  de la Beca',
        descripcion: 'Debido a problemas con el proyecto, se ha decidido suspender la beca.',
    },
    {
        id: 3,
        becario: 'Sofía Isabel Torres Ramírez',
        beca: 'Beca básica de grado como espacios de aprendizaje del método científico' ,
        porcentaje: '15%',
        descripcioninteres: 'Falta de presentación de avances del proyecto en los plazos estipulados',
        montotal: '28,750.00',

        fecha: '01/05/2025',
        tipo: 'Suspención de la Beca',
        descripcion: 'No se han presentado los avances del proyecto en los plazos estipulados.',
    },
    {
        id: 4,
        becario: 'Pedro Antonio García Fernández',
        beca: 'Beca básica de postgrado para la eficiencia terminal de tesis' ,
        porcentaje: '25%',
        descripcioninteres: 'Falta de presentación de avances del proyecto en los plazos estipulados',
        montotal: '50,000.00',
        
        fecha: '15/09/2025',
        tipo: 'Cancelación de la Beca',
        descripcion: 'Se ha utilizado el monto de la beca sin completar el proyecto propuesto.',
    },
    {
        id: 5,
        becario: 'Ana Lucía Martínez Vega',
        beca: 'Beca básica de postgrado para la eficiencia terminal de tesis' ,
        porcentaje: '5%',
        descripcioninteres: 'Falta de presentación de avances del proyecto en los plazos estipulados',
        montotal: '84,000.00',

        fecha: '25/12/2025',
        tipo: 'Suspención de la Beca',
        descripcion: 'Los directivos de la universidad han decidido cancelar la beca.',
    },

  ];

  // Array para almacenar los tipos de cierre para el select
  selectedtipoCierre: any[] = [];

  tipoCierre = [
      { name: 'Suspención de la Beca', code: 'S' },
      { name: 'Cancelación de la Beca', code: 'C' },
      { name: 'Finalización de la Beca', code: 'F' },
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

    //Abre el apartado de informacion 
  datos: number = 0;

  datosChange(index: number) {
      this.datos = index;
  }

  //Sirve para que los botones de numeros funciones
  activeIndex: number = 0;

  activeIndexChange(index : number){
      this.activeIndex = index;
  }

  // Array para almacenar la unidad de tiempo para el select
  selectedduracion: any[] = [];

  duracion = [
      { name: '1 Mes', code: 'M' },
      { name: '6 Meses', code: 'MM' },
      { name: '12 Meses', code: 'MMM' },
      { name: '1 Semestre', code: 'S' },
      { name: '2 Semestres', code: 'SS' },
      { name: '1 Año', code: 'A' },
      { name: '2 Años', code: 'AA' },
  ];
}

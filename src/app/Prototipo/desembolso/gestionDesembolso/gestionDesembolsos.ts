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

import { Component } from '@angular/core';
import { SelectButtonModule } from 'primeng/selectbutton';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { CommonModule } from '@angular/common';

import { DividerModule } from 'primeng/divider';
// Importar el módulo de Timeline
import { TimelineModule } from 'primeng/timeline';

import { StepperModule } from 'primeng/stepper';
@Component({
    standalone: true,
    selector: 'app-gestiondesembolso',
    templateUrl: 'gestionDesembolso.component.html',
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
            DropdownModule,
            SelectButtonModule,
            TimelineModule,
            SelectButtonModule,
            CommonModule,
            FormsModule,

            DividerModule,
            StepperModule
    ],
})

export class Gestiondesembolso {
    // para selector del panel que se quiere mostrar
    tiposBeca = [
        { name: 'Beca sustantiva de investigación e innovación', selectTiposBeca: '1' },
        { name: 'Beca Básica Institucional para Grupos de Investigación', selectTiposBeca: '2' },
        { name: 'Beca Básica de Grado', selectTiposBeca: '3' },
        { name: 'Beca Básica de Postgrado (Profesores UNAH)', selectTiposBeca: '4' },
        { name: 'Beca Básica de Postgrado (Estudiantes)', selectTiposBeca: '5' },
    ];

    selectTiposBeca: string = '1'; // Opción por defecto

    // seguimiento de desembolso
    events = [
        { status: 'Solicitud enviada', date: '2024-01-01' },
        { status: 'En proceso', date: '2024-01-05' },
        { status: 'Aprobado', date: '2024-01-10' },
        { status: 'Para Entrega', date: '2024-01-15' }
    ];

    // Array con los datos de la tabla becas sustantivas
    tasks = [
        {
            id: 1,
            soli: '0801-1995-09864',
            beca: 'Beca sustantiva de investigación e innovación en pro de impactos en la realidad nacional',
            montobeca: '500,000.00',
            postulante: 'María Fernanda López Hernández',
            montoasignado: '08011995098641',
            telefono: '3456-5678',
            correo: 'MaríaFernanda@gmail.com',
            Desembolso:'300,000',
            SolicitudPago:'4645',
            OrdenPago:'2324',
            FechaOficialDesembolso:'20/03/2014',
            FechaRealDesembolso:'20/03/2014',
            Desembolso2:'200,000',
            SolicitudPago2:'4665',
            OrdenPago2:'2224',
            FechaOficialDesembolso2:'20/12/2014',
            FechaRealDesembolso2:'20/08/2015',
        },
        {
            id: 2,
            soli: 'BCHI-2',
            beca: 'Beca sustantiva de investigación e innovación en pro de impactos en la realidad nacional',
            montobeca: '500,000.00',
            postulante: 'Juan Carlos Rodríguez Martínez',
            montoasignado: '08011995098641',
            telefono: '3456-5678',
            correo: 'CarlosRodríguez@gmail.com',
            Desembolso:'300,000',
            SolicitudPago:'4645',
            OrdenPago:'2324',
            FechaOficialDesembolso:'20/03/2014',
            FechaRealDesembolso:'20/03/2014',
            Desembolso2:'200,000',
            SolicitudPago2:'4665',
            OrdenPago2:'2224',
            FechaOficialDesembolso2:'20/12/2014',
            FechaRealDesembolso2:'20/08/2015',
        },
        {
            id: 3,
            soli: 'BCHI-3',
            beca: 'Beca sustantiva de investigación e innovación en pro de impactos en la realidad nacional',
            montobeca: '500,000.00',
            postulante: 'Sofía Isabel Torres Ramírez',
            montoasignado: '08011995098641',
            telefono: '3456-5678',
            correo: 'IsabelTorres@gmail.com',
            Desembolso:'300,000',
            SolicitudPago:'4645',
            OrdenPago:'2324',
            FechaOficialDesembolso:'20/03/2014',
            FechaRealDesembolso:'20/03/2014',
            Desembolso2:'200,000',
            SolicitudPago2:'4665',
            OrdenPago2:'2224',
            FechaOficialDesembolso2:'20/12/2014',
            FechaRealDesembolso2:'20/08/2015',
        },
        {
            id: 4,
            soli: 'BCHI-4',
            beca: 'Beca sustantiva de investigación e innovación en pro de impactos en la realidad nacional',
            montobeca: '500,000.00',
            postulante: 'Pedro Antonio García Fernández',
            montoasignado: '08011995098641',
            telefono: '3456-5678',
            correo: 'PedroGarcía@gmail.com',
            Desembolso:'300,000',
            SolicitudPago:'4645',
            OrdenPago:'2324',
            FechaOficialDesembolso:'20/03/2014',
            FechaRealDesembolso:'20/03/2014',
            Desembolso2:'200,000',
            SolicitudPago2:'4665',
            OrdenPago2:'2224',
            FechaOficialDesembolso2:'20/12/2014',
            FechaRealDesembolso2:'20/08/2015',
        },
        {
            id: 5,
            soli: 'BCHI-5',
            beca: 'Beca sustantiva de investigación e innovación en pro de impactos en la realidad nacional',
            montobeca: '500,000.00',
            postulante: 'Ana Lucía Martínez Vega',
            montoasignado: '08011995098641',
            telefono: '3456-5678',
            correo: 'MartínezVega@gmail.com',
            Desembolso:'300,000',
            SolicitudPago:'4645',
            OrdenPago:'2324',
            FechaOficialDesembolso:'20/03/2014',
            FechaRealDesembolso:'20/03/2014',
            Desembolso2:'200,000',
            SolicitudPago2:'4665',
            OrdenPago2:'2224',
            FechaOficialDesembolso2:'20/12/2014',
            FechaRealDesembolso2:'20/08/2015',
        },

    ];
    // Array con los datos de la tabla becas grupos
    tasks1 = [
        {
            id: 1,
            soli: '0801-1995-09864',
            beca: 'Beca Básica Institucional para el Fortalecimiento de Grupos de Investigación',
            montobeca: '75,000.00',
            postulante: 'Fernanda López Hernández',
            montoasignado: '08011995098641',
            telefono: '3456-5678',
            correo: 'FernandaLópez@gmail.com',
            Desembolso:'75,000',
            SolicitudPago:'4645',
            OrdenPago:'2324',
            FechaOficialDesembolso:'20/03/2014',
            FechaRealDesembolso:'20/03/2014',
            Desembolso2:'',

        },
        {
            id: 2,
            soli: '0801-1965-56789',
            beca: 'Beca Básica Institucional para el Fortalecimiento de Grupos de Investigación',
            montobeca: '75,000.00',
            postulante: 'Mario Rodríguez Martínez',
            montoasignado: '08011965567895',
        },
        {
            id: 3,
            soli: '0801-1968-45322',
            beca: 'Beca Básica Institucional para el Fortalecimiento de Grupos de Investigación',
            montobeca: '75,000.00',
            postulante: 'Cecilia Torres Ramírez',
            montoasignado: '20,000.00',
        },
        {
            id: 4,
            soli: '0181-3465-09864',
            beca: 'Beca Básica Institucional para el Fortalecimiento de Grupos de Investigación',
            montobeca: '75,000.00',
            postulante: 'Jorge Josue García Fernández',
            montoasignado: '30,000.00',
        },
        {
            id: 5,
            soli: '0801-1998-08865',
            beca: 'Beca Básica Institucional para el Fortalecimiento de Grupos de Investigación',
            montobeca: '75,000.00',
            postulante: 'Claudia Karolina Martínez Vega',
            montoasignado: '75,000.00',
        },

    ];

    // Array con los datos de la tabla becas grupos
    tasks2 = [
        {
            id: 1,
            soli: '0801-1995-09864',
            beca: 'Beca básica de grado como espacios de aprendizaje del método científico',
            montobeca: '25,000.00',
            postulante: 'Fernanda López Hernández',
            montoasignado: '08011995098641',
            telefono: '3456-5678',
            correo: 'FernandaLópez@gmail.com',
            Desembolso:'25,000',
            SolicitudPago:'4645',
            OrdenPago:'2324',
            FechaOficialDesembolso:'20/03/2014',
            FechaRealDesembolso:'20/03/2014',

        },
        {
            id: 2,
            soli: '0801-1965-56789',
            beca: 'Beca básica de grado como espacios de aprendizaje del método científico',
            montobeca: '25,000.00',
            postulante: 'Mario Rodríguez Martínez',
            montoasignado: '08011965567895',
            telefono: '3456-5678',
            correo: 'FernandaLópez@gmail.com',
            Desembolso:'25,000',
            SolicitudPago:'4645',
            OrdenPago:'2324',
            FechaOficialDesembolso:'20/03/2014',
            FechaRealDesembolso:'20/03/2014',
        },
        {
            id: 3,
            soli: '0801-1968-45322',
            beca: 'Beca básica de grado como espacios de aprendizaje del método científico',
            montobeca: '25,000.00',
            postulante: 'Cecilia Torres Ramírez',
            montoasignado: '20,000.00',
            telefono: '3456-5678',
            correo: 'FernandaLópez@gmail.com',
            Desembolso:'25,000',
            SolicitudPago:'4645',
            OrdenPago:'2324',
            FechaOficialDesembolso:'20/03/2014',
            FechaRealDesembolso:'20/03/2014',
        },
        {
            id: 4,
            soli: '0181-3465-09864',
            beca: 'Beca básica de grado como espacios de aprendizaje del método científico',
            montobeca: '25,000.00',
            postulante: 'Jorge Josue García Fernández',
            montoasignado: '30,000.00',
            telefono: '3456-5678',
            correo: 'FernandaLópez@gmail.com',
            Desembolso:'25,000',
            SolicitudPago:'4645',
            OrdenPago:'2324',
            FechaOficialDesembolso:'20/03/2014',
            FechaRealDesembolso:'20/03/2014',
        },
        {
            id: 5,
            soli: '0801-1998-08865',
            beca: 'Beca básica de grado como espacios de aprendizaje del método científico',
            montobeca: '25,000.00',
            postulante: 'Claudia Karolina Martínez Vega',
            montoasignado: '25,000.00',
            telefono: '3456-5678',
            correo: 'FernandaLópez@gmail.com',
            Desembolso:'25,000',
            SolicitudPago:'4645',
            OrdenPago:'2324',
            FechaOficialDesembolso:'20/03/2014',
            FechaRealDesembolso:'20/03/2014',
        },

    ];

    // Array con los datos de la tabla becas grupos
    tasks3 = [
        {
            id: 1,
            soli: '0801-1995-09864',
            beca: 'Beca básica de postgrado para la eficiencia terminal de tesis',
            montobeca: '40,000.00',
            postulante: 'Fernanda López Hernández',
            montoasignado: '08011995098641',
            telefono: '3456-5678',
            correo: 'FernandaLópez@gmail.com',
            Desembolso:'40,000',
            SolicitudPago:'4645',
            OrdenPago:'2324',
            FechaOficialDesembolso:'20/03/2014',
            FechaRealDesembolso:'20/03/2014',

        },
        {
            id: 2,
            soli: '0801-1965-56789',
            beca: 'Beca básica de postgrado para la eficiencia terminal de tesis',
            montobeca: '40,000.00',
            postulante: 'Mario Rodríguez Martínez',
            montoasignado: '08011965567895',
            telefono: '3456-5678',
            correo: 'FernandaLópez@gmail.com',
            Desembolso:'40,000',
            SolicitudPago:'4645',
            OrdenPago:'2324',
            FechaOficialDesembolso:'20/03/2014',
            FechaRealDesembolso:'20/03/2014',
        },
        {
            id: 3,
            soli: '0801-1968-45322',
            beca: 'Beca básica de postgrado para la eficiencia terminal de tesis',
            montobeca: '40,000.00',
            postulante: 'Cecilia Torres Ramírez',
            montoasignado: '20,000.00',
            telefono: '3456-5678',
            correo: 'FernandaLópez@gmail.com',
            Desembolso:'40,000',
            SolicitudPago:'4645',
            OrdenPago:'2324',
            FechaOficialDesembolso:'20/03/2014',
            FechaRealDesembolso:'20/03/2014',
        },
        {
            id: 4,
            soli: '0181-3465-09864',
            beca: 'Beca básica de postgrado para la eficiencia terminal de tesis',
            montobeca: '40,000.00',
            postulante: 'Jorge Josue García Fernández',
            montoasignado: '30,000.00',
            telefono: '3456-5678',
            correo: 'FernandaLópez@gmail.com',
            Desembolso:'40,000',
            SolicitudPago:'4645',
            OrdenPago:'2324',
            FechaOficialDesembolso:'20/03/2014',
            FechaRealDesembolso:'20/03/2014',
        },
        {
            id: 5,
            soli: '0801-1998-08865',
            beca: 'Beca básica de postgrado para la eficiencia terminal de tesis',
            montobeca: '40,000.00',
            postulante: 'Claudia Karolina Martínez Vega',
            montoasignado: '25,000.00',
            telefono: '3456-5678',
            correo: 'FernandaLópez@gmail.com',
            Desembolso:'40,000',
            SolicitudPago:'4645',
            OrdenPago:'2324',
            FechaOficialDesembolso:'20/03/2014',
            FechaRealDesembolso:'20/03/2014',
        },

    ];


    // Array con los datos de la tabla becas grupos
    tasks4 = [
        {
            id: 1,
            soli: '0801-1995-09864',
            beca: 'Beca básica de postgrado para la eficiencia terminal de tesis',
            montobeca: '80,000.00',
            postulante: 'Fernanda López Hernández',
            montoasignado: '08011995098641',
            telefono: '3456-5678',
            correo: 'FernandaLópez@gmail.com',
            Desembolso:'80,000',
            SolicitudPago:'4645',
            OrdenPago:'2324',
            FechaOficialDesembolso:'20/03/2014',
            FechaRealDesembolso:'20/03/2014',

        },
        {
            id: 2,
            soli: '0801-1965-56789',
            beca: 'Beca básica de postgrado para la eficiencia terminal de tesis',
            montobeca: '80,000.00',
            postulante: 'Mario Rodríguez Martínez',
            montoasignado: '08011965567895',
            telefono: '3456-5678',
            correo: 'FernandaLópez@gmail.com',
            Desembolso:'80,000',
            SolicitudPago:'4645',
            OrdenPago:'2324',
            FechaOficialDesembolso:'20/03/2014',
            FechaRealDesembolso:'20/03/2014',
        },
        {
            id: 3,
            soli: '0801-1968-45322',
            beca: 'Beca básica de postgrado para la eficiencia terminal de tesis',
            montobeca: '80,000.00',
            postulante: 'Cecilia Torres Ramírez',
            montoasignado: '20,000.00',
            telefono: '3456-5678',
            correo: 'FernandaLópez@gmail.com',
            Desembolso:'80,000',
            SolicitudPago:'4645',
            OrdenPago:'2324',
            FechaOficialDesembolso:'20/03/2014',
            FechaRealDesembolso:'20/03/2014',
        },
        {
            id: 4,
            soli: '0181-3465-09864',
            beca: 'Beca básica de postgrado para la eficiencia terminal de tesis',
            montobeca: '80,000.00',
            postulante: 'Jorge Josue García Fernández',
            montoasignado: '30,000.00',
            telefono: '3456-5678',
            correo: 'FernandaLópez@gmail.com',
            Desembolso:'80,000',
            SolicitudPago:'4645',
            OrdenPago:'2324',
            FechaOficialDesembolso:'20/03/2014',
            FechaRealDesembolso:'20/03/2014',
        },
        {
            id: 5,
            soli: '0801-1998-08865',
            beca: 'Beca básica de postgrado para la eficiencia terminal de tesis',
            montobeca: '80,000.00',
            postulante: 'Claudia Karolina Martínez Vega',
            montoasignado: '80,000.00',
            telefono: '3456-5678',
            correo: 'FernandaLópez@gmail.com',
            Desembolso:'80,000',
            SolicitudPago:'4645',
            OrdenPago:'2324',
            FechaOficialDesembolso:'20/03/2014',
            FechaRealDesembolso:'20/03/2014',
        },

    ];
// ----------------------------------------------------------------

  // Array para almacenar las solicitudes para el select
  selectedsoli: any[] = [];

  soli = [
      { name: 'BCHI-1', code: 'B1' },
      { name: 'BCHI-2', code: 'B2' },
      { name: 'BCHI-3', code: 'B3' },
      { name: 'BCHI-4', code: 'B4' },
      { name: 'BCHI-5', code: 'B5' },
      { name: 'BCHI-6', code: 'B6' },
  ];

  // Array para almacenar las becas para el select
  selectedbeca: any[] = [];

  beca = [
        { name: 'Beca sustantiva de investigación e innovación en pro de impactos en la realidad nacional/500,000.00', code: 'BS' },
        { name: 'Beca básica institucional para el fortalecimiento de grupos de investigación/75,000.00', code: 'BGI' },
        { name: 'Beca básica de grado como espacios de aprendizaje del método científico/25,000.00', code: 'BG' },
        { name: 'Beca básica de postgrado para la eficiencia terminal de tesis/40,000.00', code: 'BP' },
        { name: 'Beca básica de postgrado para la eficiencia terminal de tesis/80,000.00', code: 'BP' },
  ];

  // Array para almacenar los postulantes para el select
  selectedpostulante: any[] = [];

  postulante = [
      { name: 'BCHI-1', code: 'B1' },
      { name: 'BCHI-2', code: 'B2' },
      { name: 'BCHI-3', code: 'B3' },
      { name: 'BCHI-4', code: 'B4' },
      { name: 'BCHI-5', code: 'B5' },
      { name: 'BCHI-6', code: 'B6' },
  ];

  // Propiedades para la selección dinámica de columnas
  Cols: any[] = [
    { field: 'id', header: 'Número de Beca' },
    { field: 'beca', header: 'Beca' },
    { field: 'postulante', header: 'Postulante' },
    // { field: 'soli', header: 'Número de Solicitud' },
    // { field: 'montobeca', header: 'Monto de la Beca' },
    // { field: 'montoasignado', header: 'Monto Asignado' },
  ];

  //Muestra por defecto todas las columnas en la tabla
  selectedColumns = [...this.Cols];

  // Alerta seleccionada para editar
  editarColumns: any = null;

  // Método para determinar si una columna está seleccionada (usado para el encabezado dinámico)
  isColumnSelected(field: string): boolean {
    return this.selectedColumns.some(col => col.field === field);
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
  selectedTask1: any = {};  // Almacena la tarea seleccionada
  selectedTask2: any = {};  // Almacena la tarea seleccionada
  selectedTask3: any = {};  // Almacena la tarea seleccionada
  selectedTask4: any = {};  // Almacena la tarea seleccionada
  isNewModal: boolean = false;  // Determina si es un modal nuevo o de edición
  imagen: boolean = false;  // Controla la visibilidad del modal
  imagenUrl: string = '';   // Guarda la URL de la imagen a mostrar


  // Método para abrir los diferentes tipos de modal según el beca sustantiva
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
    // Método para abrir los diferentes tipos de modal según beca grupos
    openModal1(tasks1?: any) {
        if (tasks1) {
          this.selectedTask1 = { ...tasks1 };  // Copia la tarea seleccionada
          this.isNewModal = false;  // Es un modal de detalles
          this.displayModal = true;  // Abre el modal de detalles
        } else {
          this.selectedTask1 = {};  // Inicializa la tarea vacía para nueva solicitud
          this.isNewModal = true;  // Es un modal de nueva solicitud
          this.displayNewModal = true;  // Abre el modal de nueva solicitud
        }
    }
    // Método para abrir los diferentes tipos de modal según beca grado
    openModal2(tasks2?: any) {
        if (tasks2) {
            this.selectedTask1 = { ...tasks2};  // Copia la tarea seleccionada
            this.isNewModal = false;  // Es un modal de detalles
            this.displayModal = true;  // Abre el modal de detalles
        } else {
            this.selectedTask1 = {};  // Inicializa la tarea vacía para nueva solicitud
            this.isNewModal = true;  // Es un modal de nueva solicitud
            this.displayNewModal = true;  // Abre el modal de nueva solicitud
        }
    }
    openModal3(tasks3?: any) {
        if (tasks3) {
          this.selectedTask = { ...tasks3 };  // Copia la tarea seleccionada
          this.isNewModal = false;  // Es un modal de detalles
          this.displayModal = true;  // Abre el modal de detalles
        } else {
          this.selectedTask = {};  // Inicializa la tarea vacía para nueva solicitud
          this.isNewModal = true;  // Es un modal de nueva solicitud
          this.displayNewModal = true;  // Abre el modal de nueva solicitud
        }
    }
    openModal4(tasks4?: any) {
        if (tasks4) {
          this.selectedTask = { ...tasks4 };  // Copia la tarea seleccionada
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

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
// PrimeNG Modules
import { DialogModule } from 'primeng/dialog';
import { TextareaModule } from 'primeng/textarea';
import { DatePickerModule } from 'primeng/datepicker';
// Importa el módulo del DatePicker
import { CalendarModule } from 'primeng/calendar';
import { ListboxModule } from 'primeng/listbox';

interface expandedRows {
  [key: string]: boolean;
}

@Component({
  selector: 'app-tabla-combocatoria',
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
    DialogModule
],
  templateUrl: './tabla-combocatoria.component.html',
  styleUrl: './tabla-combocatoria.component.scss'
})
export class TablaCombocatoriaComponent{
  tasks = [
    {
      id: 1,
      title: 'Beca Nacional Universitaria',
      description: 'Convocatoria para estudiantes de pregrado en universidades nacionales.',
      startDate: '2025-01-15',
      endDate: '2025-03-15',
      type: 'Universitaria',
      eligibility: 'Estudiantes matriculados con promedio superior a 8.0',
      status: 'Abierta'
    },
    {
      id: 2,
      title: 'Beca Internacional para Maestrías',
      description: 'Oportunidad de beca para cursar maestrías en el extranjero.',
      startDate: '2025-02-01',
      endDate: '2025-04-30',
      type: 'Internacional',
      eligibility: 'Graduados universitarios con experiencia profesional',
      status: 'Abierta'
    },
    {
      id: 3,
      title: 'Beca de Excelencia Académica',
      description: 'Apoyo financiero para estudiantes con rendimiento académico destacado.',
      startDate: '2025-03-01',
      endDate: '2025-05-31',
      type: 'Universitaria',
      eligibility: 'Promedio superior a 9.5 en los últimos dos semestres',
      status: 'Pendiente'
    },
    {
      id: 4,
      title: 'Beca de Investigación Postdoctoral',
      description: 'Fondo de apoyo para investigadores que buscan desarrollar proyectos postdoctorales.',
      startDate: '2025-04-01',
      endDate: '2025-06-30',
      type: 'Investigación',
      eligibility: 'Doctorado concluido en los últimos tres años',
      status: 'Abierta'
    },
    {
      id: 5,
      title: 'Beca de Intercambio Cultural',
      description: 'Apoyo económico para participar en programas de intercambio cultural.',
      startDate: '2025-05-01',
      endDate: '2025-07-31',
      type: 'Cultural',
      eligibility: 'Estudiantes o graduados interesados en intercambio cultural',
      status: 'Cerrada'
    },
    {
      id: 6,
      title: 'Beca Deportiva Universitaria',
      description: 'Convocatoria para estudiantes destacados en disciplinas deportivas.',
      startDate: '2025-06-01',
      endDate: '2025-08-15',
      type: 'Deportiva',
      eligibility: 'Atletas con logros destacados a nivel regional o nacional',
      status: 'Abierta'
    },
    {
      id: 7,
      title: 'Beca para Emprendedores',
      description: 'Fondo de apoyo para desarrollar ideas y proyectos innovadores.',
      startDate: '2025-07-01',
      endDate: '2025-09-30',
      type: 'Innovación',
      eligibility: 'Emprendedores con proyectos en fase inicial',
      status: 'Pendiente'
    },
    {
      id: 8,
      title: 'Beca de Formación Técnica',
      description: 'Apoyo financiero para cursar programas técnicos en diversas áreas.',
      startDate: '2025-08-01',
      endDate: '2025-10-15',
      type: 'Técnica',
      eligibility: 'Estudiantes interesados en formación técnica especializada',
      status: 'Abierta'
    },
    {
      id: 9,
      title: 'Beca de Liderazgo Juvenil',
      description: 'Oportunidad para jóvenes líderes interesados en desarrollar habilidades de liderazgo.',
      startDate: '2025-09-01',
      endDate: '2025-11-30',
      type: 'Liderazgo',
      eligibility: 'Jóvenes de 18 a 25 años con experiencia en actividades comunitarias',
      status: 'Cerrada'
    },
    {
      id: 10,
      title: 'Beca de Arte y Cultura',
      description: 'Apoyo económico para artistas y creadores culturales.',
      startDate: '2025-10-01',
      endDate: '2025-12-15',
      type: 'Cultural',
      eligibility: 'Artistas con portafolio comprobable y proyectos en desarrollo',
      status: 'Abierta'
    }
  ];
  
loading: boolean = true;

ngOnInit() {
    // Simular la carga de datos con un retraso
    setTimeout(() => {
        this.loading = false; // Cambia el estado a false cuando los datos estén listos
    }, 2000);
}
  // Limpia los filtros aplicados en la tabla
  clear(table: any) {
    table.clear();
  }

  // Filtro global para buscar en todas las columnas especificadas
  onGlobalFilter(table: any, event: any) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }


  displayModal: boolean = false;  // Controla la visibilidad del modal
  Date_final: Date | null = null; // Variable para almacenar la fecha seleccionada
  Date_hoy:   Date = new Date();
  selectedTask: any = null;     // Almacena la tarea seleccionada
  openModal(task: any) {
    this.selectedTask = task; // Guarda la tarea seleccionada
    this.displayModal = true; // Muestra el modal
  }
  Estatus = [
    { name: 'Abierta', code: 'TRUE' },
    { name: 'Cerrada', code: 'FALSE' },
    { name: 'Pendiente', code: 'null' }
  ];

  selectedCity: any = null; // Almacena la ciudad seleccionada
  
}

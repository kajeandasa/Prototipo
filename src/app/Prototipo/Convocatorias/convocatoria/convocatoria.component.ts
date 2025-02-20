import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// PrimeNG Modules
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { DatePickerModule } from 'primeng/datepicker';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import { InputIconModule } from 'primeng/inputicon';
import { TagModule } from 'primeng/tag';
import { MultiSelectModule } from 'primeng/multiselect';
import { SelectModule } from 'primeng/select';
import { SliderModule } from 'primeng/slider';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToastModule } from 'primeng/toast';
import { RatingModule } from 'primeng/rating';
import { RippleModule } from 'primeng/ripple';
import { IconFieldModule } from 'primeng/iconfield';
import { ListboxModule } from 'primeng/listbox';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-convocatoria',
  // Si usas Standalone Components, incluye aquí todos los módulos necesarios:
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    DialogModule,
    InputTextModule,
    TextareaModule,
    DatePickerModule,
    CalendarModule,
    ButtonModule,
    InputIconModule,
    TagModule,
    MultiSelectModule,
    SelectModule,
    SliderModule,
    ProgressBarModule,
    ToggleButtonModule,
    ToastModule,
    RatingModule,
    RippleModule,
    IconFieldModule,
    ListboxModule,
    DropdownModule
  ],
  templateUrl: './convocatoria.component.html',
  styleUrls: ['./convocatoria.component.scss']
})
export class ConvocatoriaComponent implements OnInit {
  // Lista de convocatorias sin el campo "id"
  convocatorias: any[] = [
    {
      nombre: 'I CONVOCATORIA',
      description: 'Convocatoria para estudiantes de pregrado en universidades nacionales.',
      startDate: new Date('2025-01-15'),
      endDate: new Date('2025-03-15'),
      years: 2025,
      status: 'ABIERTA'
    },
    {
      nombre: 'II CONVOCATORIA',
      description: 'Oportunidad de beca para cursar maestrías en el extranjero.',
      startDate: new Date('2025-02-01'),
      endDate: new Date('2025-04-30'),
      years: 2025,
      status: 'ABIERTA'
    },
    {
      nombre: 'CONVOCATORIA EXTRAORDINARIA',
      description: 'Apoyo financiero para estudiantes con rendimiento académico destacado.',
      startDate: new Date('2025-03-01'),
      endDate: new Date('2025-05-31'),
      years: 2024,
      status: 'CERRADA'
    }
  ];

  loading: boolean = true;
  globalFilter: string = '';

  // Variables para controlar la visibilidad de los modales
  modalAgregar: boolean = false;
  modalEditar: boolean = false;

  // Objeto para una nueva convocatoria (modal Agregar)
  nuevaConvocatoria: any = {};

  // Objeto para la convocatoria seleccionada (modal Editar)
  convocatoriaSeleccionada: any = null;
  selectedIndex: number | null = null;

  // Opciones para el dropdown de Estado (nuevos labels)
  estadoOptions = [
    { label: 'Vigencia', value: 'ABIERTA' },
    { label: 'Terminada', value: 'CERRADA' }
  ];

  // Opciones para el dropdown de Nombre Convocatoria
  nombreConvocatoriaOptions = [
    { label: 'I CONVOCATORIA', value: 'I CONVOCATORIA' },
    { label: 'II CONVOCATORIA', value: 'II CONVOCATORIA' },
    { label: 'CONVOCATORIA EXTRAORDINARIA', value: 'CONVOCATORIA EXTRAORDINARIA' }
  ];

  ngOnInit() {
    // Simula la carga de datos con un retraso
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }

  // Limpia los filtros aplicados en la tabla
  clear(table: Table) {
    table.clear();
  }

  // Aplica un filtro global en la tabla
  onGlobalFilter(table: Table, event: any) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  // Abre el modal para agregar una nueva convocatoria y resetea el objeto
  abrirModalAgregar() {
    this.nuevaConvocatoria = {
      nombre: '',
      description: '',
      startDate: null,
      endDate: null,
      years: new Date().getFullYear(),
      status: null
    };
    this.modalAgregar = true;
  }

  // Agrega la nueva convocatoria al arreglo y cierra el modal
  agregarConvocatoria() {
    this.convocatorias.push({ ...this.nuevaConvocatoria });
    this.modalAgregar = false;
  }

  // Abre el modal de edición copiando la convocatoria seleccionada y guardando su índice
  abrirModalEditar(convocatoria: any, index: number) {
    this.convocatoriaSeleccionada = { ...convocatoria };
    this.selectedIndex = index;
    this.modalEditar = true;
  }

  // Guarda los cambios realizados en la convocatoria seleccionada
  editarConvocatoria() {
    if (this.selectedIndex !== null) {
      this.convocatorias[this.selectedIndex] = { ...this.convocatoriaSeleccionada };
    }
    this.modalEditar = false;
    this.selectedIndex = null;
  }
}

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
  selector: 'app-estado-convocatoria',
  standalone: true, // Solo si estás usando Standalone Components
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
  templateUrl: './estado-convocatoria.component.html',
  styleUrls: ['./estado-convocatoria.component.scss']
})
export class EstadoConvocatoriaComponent implements OnInit {
  // Lista de estados de convocatoria sin ID
  estadosConvocatoriaSinId: any[] = [
    { tipo: 'ABIERTA', descripcion: 'Vigencia' },
    { tipo: 'CERRADA', descripcion: 'Terminada' }
  ];

  loading: boolean = true;
  globalFilterSinId: string = '';

  // Variables para controlar la visibilidad de los modales
  modalAgregarSinId: boolean = false;
  modalEditarSinId: boolean = false;

  // Objeto para un nuevo estado (SIN ID)
  nuevoEstadoConvocatoriaSinId: any = {};

  // Objeto para el estado seleccionado (SIN ID)
  estadoConvocatoriaSeleccionadoSinId: any = null;

  // Opciones para el dropdown (tipo)
  tipoOptions = [
    { label: 'ABIERTA', value: 'ABIERTA' },
    { label: 'CERRADA', value: 'CERRADA' }
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

  // Abre el modal para agregar un nuevo estado sin ID
  abrirModalAgregarSinId() {
    this.nuevoEstadoConvocatoriaSinId = {
      tipo: null,
      descripcion: ''
    };
    this.modalAgregarSinId = true;
  }

  // Agrega el nuevo estado al arreglo y cierra el modal
  agregarEstadoConvocatoriaSinId() {
    this.estadosConvocatoriaSinId.push({ ...this.nuevoEstadoConvocatoriaSinId });
    this.modalAgregarSinId = false;
  }

  // Abre el modal de edición copiando el estado seleccionado y guardando su índice
  abrirModalEditarSinId(estado: any) {
    const index = this.estadosConvocatoriaSinId.indexOf(estado);
    this.estadoConvocatoriaSeleccionadoSinId = { ...estado, index };
    this.modalEditarSinId = true;
  }

  // Guarda los cambios realizados en el estado seleccionado
  editarEstadoConvocatoriaSinId() {
    if (
      this.estadoConvocatoriaSeleccionadoSinId &&
      this.estadoConvocatoriaSeleccionadoSinId.index !== undefined
    ) {
      const i = this.estadoConvocatoriaSeleccionadoSinId.index;
      // Extraemos "index" y actualizamos el registro
      const { index, ...estadoActualizado } = this.estadoConvocatoriaSeleccionadoSinId;
      this.estadosConvocatoriaSinId[i] = estadoActualizado;
    }
    this.modalEditarSinId = false;
  }

  // Métodos para asignar icono y color (severity) según si es "ABIERTA" o "CERRADA"
  getIcon(tipo: string): string {
    // Candado abierto (ABIERTA) vs. candado cerrado (CERRADA)
    return tipo === 'ABIERTA' ? 'pi pi-lock-open' : 'pi pi-lock';
  }

  getSeverity(tipo: string): 'success' | 'danger' {
    return tipo === 'ABIERTA' ? 'success' : 'danger';
  }
}

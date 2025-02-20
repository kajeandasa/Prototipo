import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// PrimeNG Modules
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';

@Component({
  selector: 'app-tipo-convocatoria',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    DialogModule,
    InputTextModule,
    ButtonModule,
    InputIconModule,
    IconFieldModule
  ],
  templateUrl: './tipo-convocatoria.component.html',
  styleUrls: ['./tipo-convocatoria.component.scss']
})
export class TipoConvocatoriaComponent implements OnInit {
  // Array de tipos de convocatoria con datos por defecto
  tiposConvocatoria: any[] = [
    { nombre: 'I CONVOCATORIA' },
    { nombre: 'II CONVOCATORIA' },
    { nombre: 'CONVOCATORIA EXTRAORDINARIA' }
  ];

  loading: boolean = true;
  globalFilterTipo: string = '';

  // Variables para controlar la visibilidad de los modales
  modalAgregarTipo: boolean = false;
  modalEditarTipo: boolean = false;

  // Objeto para un nuevo tipo de convocatoria
  nuevoTipoConvocatoria: any = {};

  // Objeto para el tipo de convocatoria seleccionado (para editar)
  tipoConvocatoriaSeleccionado: any = null;

  // Índice del elemento seleccionado
  selectedIndex: number | null = null;

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

  // Abre el modal para agregar un nuevo tipo de convocatoria
  abrirModalAgregarTipo() {
    this.nuevoTipoConvocatoria = { nombre: '' };
    this.modalAgregarTipo = true;
  }

  // Agrega el nuevo tipo al arreglo y cierra el modal (si el campo no está vacío)
  agregarTipoConvocatoria() {
    if (this.nuevoTipoConvocatoria.nombre && this.nuevoTipoConvocatoria.nombre.trim()) {
      this.tiposConvocatoria.push({ nombre: this.nuevoTipoConvocatoria.nombre.trim() });
      this.modalAgregarTipo = false;
    }
  }

  // Abre el modal de edición copiando el tipo seleccionado y guardando su índice
  abrirModalEditarTipo(tipo: any, index: number) {
    this.tipoConvocatoriaSeleccionado = { ...tipo };
    this.selectedIndex = index;
    this.modalEditarTipo = true;
  }

  // Guarda los cambios realizados en el tipo seleccionado
  editarTipoConvocatoria() {
    if (
      this.tipoConvocatoriaSeleccionado &&
      this.tipoConvocatoriaSeleccionado.nombre &&
      this.tipoConvocatoriaSeleccionado.nombre.trim() &&
      this.selectedIndex !== null
    ) {
      this.tiposConvocatoria[this.selectedIndex] = { ...this.tipoConvocatoriaSeleccionado };
      this.modalEditarTipo = false;
      this.selectedIndex = null;
    }
  }
}

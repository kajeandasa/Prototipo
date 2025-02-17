import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Importa los módulos de PrimeNG que se utilizarán
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { TagModule } from 'primeng/tag';

export interface TipoAlerta {
  id_AlertaTipo: number;
  tipo: 'INMEDIATA' | 'PERSONALIZADA';
  categoria: 'PERMITIDO' | 'ADVERTENCIA' | 'NO PERMITIDO';
  descripcion: string;
}

@Component({
  selector: 'app-tipo-alerta',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    InputIconModule,
    IconFieldModule,
    TagModule
  ],
  templateUrl: './tipo-alerta.component.html'
})
export class TipoAlertaComponent implements OnInit {
  // Variable para la búsqueda global
  globalFilter: string = '';

  // Listado de Tipos de Alerta con datos iniciales
  tiposAlertas: TipoAlerta[] = [
    { id_AlertaTipo: 1, tipo: 'INMEDIATA', categoria: 'PERMITIDO', descripcion: 'rápida' },
    { id_AlertaTipo: 2, tipo: 'PERSONALIZADA', categoria: 'ADVERTENCIA', descripcion: 'detallada' },
    { id_AlertaTipo: 3, tipo: 'PERSONALIZADA', categoria: 'NO PERMITIDO', descripcion: 'específica' }
  ];

  // Variables de control para los modales
  modalAgregar: boolean = false;
  modalEditar: boolean = false;

  // Propiedad para almacenar el nuevo Tipo de Alerta (se usa Partial para permitir campos vacíos)
  nuevoTipoAlerta: Partial<TipoAlerta> = {};

  // Tipo de Alerta seleccionado para editar
  tipoAlertaSeleccionado: TipoAlerta | null = null;

  // Opciones para el dropdown del campo "tipo"
  tipoOptions = [
    { label: 'INMEDIATA', value: 'INMEDIATA' },
    { label: 'PERSONALIZADA', value: 'PERSONALIZADA' }
  ];

  // Opciones para el dropdown del campo "categoría"
  categoriaOptions = [
    { label: 'PERMITIDO', value: 'PERMITIDO' },
    { label: 'ADVERTENCIA', value: 'ADVERTENCIA' },
    { label: 'NO PERMITIDO', value: 'NO PERMITIDO' }
  ];

  ngOnInit(): void {
    // Inicializaciones adicionales si son necesarias
  }

  // Función para obtener el severity (color) basado en la categoría
  getSeverity(categoria: string): "success" | "warn" | "danger" | "info" {
    switch (categoria) {
      case 'PERMITIDO':
        return 'success';
      case 'ADVERTENCIA':
        return 'warn';
      case 'NO PERMITIDO':
        return 'danger';
      default:
        return 'info';
    }
  }

  // Función para obtener el icono basado en la categoría
  getIcon(categoria: string): string {
    switch (categoria) {
      case 'PERMITIDO':
        return 'pi pi-check';
      case 'ADVERTENCIA':
        return 'pi pi-exclamation-triangle';
      case 'NO PERMITIDO':
        return 'pi pi-times';
      default:
        return '';
    }
  }

  // Abre el modal para agregar un nuevo Tipo de Alerta con los campos vacíos
  abrirModalAgregar() {
    this.nuevoTipoAlerta = {}; // Reinicia el objeto para que los campos estén vacíos
    this.modalAgregar = true;
  }

  // Agrega el nuevo Tipo de Alerta a la lista
  agregarTipoAlerta() {
    if (!this.nuevoTipoAlerta.id_AlertaTipo) {
      const maxId = this.tiposAlertas.reduce((max, t) => t.id_AlertaTipo > max ? t.id_AlertaTipo : max, 0);
      this.nuevoTipoAlerta.id_AlertaTipo = maxId + 1;
    }
    if (!this.nuevoTipoAlerta.tipo) {
      this.nuevoTipoAlerta.tipo = 'INMEDIATA';
    }
    if (!this.nuevoTipoAlerta.categoria) {
      this.nuevoTipoAlerta.categoria = 'PERMITIDO';
    }
    if (!this.nuevoTipoAlerta.descripcion) {
      this.nuevoTipoAlerta.descripcion = '';
    }
    this.tiposAlertas.push(this.nuevoTipoAlerta as TipoAlerta);
    this.modalAgregar = false;
  }

  // Abre el modal de edición con los datos del Tipo de Alerta seleccionado
  abrirModalEditar(tipoAlerta: TipoAlerta) {
    this.tipoAlertaSeleccionado = { ...tipoAlerta };
    this.modalEditar = true;
  }

  // Edita y actualiza el Tipo de Alerta seleccionado en la lista
  editarTipoAlerta() {
    if (this.tipoAlertaSeleccionado) {
      const index = this.tiposAlertas.findIndex(t => t.id_AlertaTipo === this.tipoAlertaSeleccionado!.id_AlertaTipo);
      if (index !== -1) {
        this.tiposAlertas[index] = { ...this.tipoAlertaSeleccionado };
      }
    }
    this.modalEditar = false;
  }

  // Método para limpiar la búsqueda global y el filtro de la tabla
  clear(table: any) {
    this.globalFilter = '';
    table.filterGlobal(this.globalFilter, 'contains');
  }

  // Método para aplicar un filtro global en la tabla
  onGlobalFilter(table: any, event: any) {
    table.filterGlobal(event.target.value, 'contains');
  }
}

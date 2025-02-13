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

// Define la interfaz para una Categoría
export interface Categoria {
  id_categoria: number;
  nombre: 'Permitido' | 'Advertencia' | 'No permitido';
}

@Component({
  selector: 'app-categoria',
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
    IconFieldModule
  ],
  template: `
    <div class="card">
      <!-- Título principal -->
      <div class="font-semibold text-xl mb-4 text-center">
        <h2>Gestión de Categorías</h2>
      </div>

      <!-- Botón para abrir modal Agregar -->
      <div class="flex gap-4 justify-end mr-4">
        <button pButton label="Agregar Categoría" icon="pi pi-plus" (click)="abrirModalAgregar()"></button>
      </div>

      <!-- Tabla de Categorías -->
      <p-table
        #dt1
        [value]="categorias"
        [rows]="5"
        [paginator]="true"
        responsiveLayout="scroll"
        [globalFilterFields]="['id_categoria', 'nombre']"
        sortMode="multiple"
        class="custom-table"
        [tableStyle]="{ 'min-width': '30rem' }"
        [rowsPerPageOptions]="[5, 10, 20]"
        stripedRows>

        <!-- Caption: Buscador global -->
        <ng-template pTemplate="caption">
          <div class="flex justify-end items-center flex-column sm:flex-row">
            <div class="flex align-items-center mt-2 sm:mt-0">
              <button
                pButton
                label="Clear"
                class="p-button-outlined mr-2"
                icon="pi pi-filter-slash"
                (click)="clear(dt1)">
              </button>
              <p-iconfield iconPosition="left">
                <p-inputicon>
                  <i class="pi pi-search"></i>
                </p-inputicon>
                <input
                  pInputText
                  type="text"
                  (input)="onGlobalFilter(dt1, $event)"
                  placeholder="Buscar..." />
              </p-iconfield>
            </div>
          </div>
        </ng-template>

        <!-- Encabezado de la tabla -->
        <ng-template pTemplate="header">
          <tr>
            <th pSortableColumn="id_categoria" class="header-nowrap">
              ID Categoría
              <p-sortIcon field="id_categoria"></p-sortIcon>
            </th>
            <th pSortableColumn="nombre" class="header-nowrap">
              Nombre
              <p-sortIcon field="nombre"></p-sortIcon>
            </th>
            <th class="header-nowrap">Acciones</th>
          </tr>
        </ng-template>

        <!-- Cuerpo de la tabla -->
        <ng-template pTemplate="body" let-categoria>
          <tr>
            <td>{{ categoria.id_categoria }}</td>
            <td>{{ categoria.nombre }}</td>
            <td>
              <button
                pButton
                label="Editar"
                icon="pi pi-pencil"
                (click)="abrirModalEditar(categoria)">
              </button>
            </td>
          </tr>
        </ng-template>
      </p-table>

      <!-- CSS para corregir encabezados -->
      <style>
        .header-nowrap {
          white-space: nowrap;
          text-align: center;
          padding: 10px;
        }
      </style>

      <!-- Modal: Agregar Categoría -->
      <p-dialog
        header="Agregar Categoría"
        [modal]="true"
        [(visible)]="modalAgregar"
        [maximizable]="true"
        [style]="{ width: '30rem' }">

        <div class="card flex flex-col gap-4">
          <!-- Campo: ID Categoría -->
          <div class="flex flex-col gap-2">
            <strong>ID Categoría</strong>
            <input
              pInputText
              type="number"
              [(ngModel)]="nuevoCategoria.id_categoria"
              placeholder="ID Categoría" />
          </div>

          <!-- Campo: Nombre -->
          <div class="flex flex-col gap-2">
            <strong>Nombre</strong>
            <p-dropdown
              [options]="nombreOptions"
              [(ngModel)]="nuevoCategoria.nombre"
              placeholder="Selecciona un nombre"
              [filter]="true">
            </p-dropdown>
          </div>
        </div>

        <!-- Botones de acción -->
        <div class="flex justify-end gap-2 mt-4">
          <p-button label="Agregar" severity="success" (click)="agregarCategoria()"></p-button>
          <p-button label="Cancelar" severity="danger" (click)="modalAgregar = false"></p-button>
        </div>
      </p-dialog>

      <!-- Modal: Editar Categoría -->
      <p-dialog
        header="Editar Categoría"
        [modal]="true"
        [(visible)]="modalEditar"
        [style]="{ width: '30rem' }">

        <div class="card flex flex-col gap-4" *ngIf="categoriaSeleccionada">
          <!-- Campo: ID Categoría -->
          <div class="flex flex-col gap-2">
            <strong>ID Categoría</strong>
            <input
              pInputText
              type="number"
              [(ngModel)]="categoriaSeleccionada.id_categoria"
              placeholder="ID Categoría" />
          </div>

          <!-- Campo: Nombre -->
          <div class="flex flex-col gap-2">
            <strong>Nombre</strong>
            <p-dropdown
              [options]="nombreOptions"
              [(ngModel)]="categoriaSeleccionada.nombre"
              placeholder="Selecciona un nombre"
              [filter]="true">
            </p-dropdown>
          </div>
        </div>

        <!-- Botones de acción -->
        <div class="flex justify-end gap-2 mt-4">
          <p-button label="Guardar" severity="success" (click)="editarCategoria()"></p-button>
          <p-button label="Cancelar" severity="danger" (click)="modalEditar = false"></p-button>
        </div>
      </p-dialog>
    </div>
  `
})
export class CategoriaComponent implements OnInit {
  // Listado de Categorías con datos iniciales
  categorias: Categoria[] = [
    { id_categoria: 1, nombre: 'Permitido' },
    { id_categoria: 2, nombre: 'Advertencia' },
    { id_categoria: 3, nombre: 'No permitido' }
  ];

  // Variables de control para los modales
  modalAgregar: boolean = false;
  modalEditar: boolean = false;

  // Objeto para almacenar la nueva Categoría (usa Partial para permitir campos vacíos)
  nuevoCategoria: Partial<Categoria> = {};

  // Categoría seleccionada para editar
  categoriaSeleccionada: Categoria | null = null;

  // Opciones para el dropdown del campo "nombre"
  nombreOptions = [
    { label: 'Permitido', value: 'Permitido' },
    { label: 'Advertencia', value: 'Advertencia' },
    { label: 'No permitido', value: 'No permitido' }
  ];

  ngOnInit(): void {
    // Inicializaciones adicionales si son necesarias
  }

  // Abre el modal para agregar una nueva Categoría
  abrirModalAgregar() {
    this.nuevoCategoria = {}; // Reinicia el objeto para que los campos estén vacíos
    this.modalAgregar = true;
  }

  // Agrega la nueva Categoría a la lista
  agregarCategoria() {
    if (!this.nuevoCategoria.id_categoria) {
      // Si no se asigna un ID, se asigna el siguiente disponible
      const maxId = this.categorias.reduce((max, c) => c.id_categoria > max ? c.id_categoria : max, 0);
      this.nuevoCategoria.id_categoria = maxId + 1;
    }
    // Si no se selecciona un nombre, se asigna por defecto 'Permitido'
    if (!this.nuevoCategoria.nombre) {
      this.nuevoCategoria.nombre = 'Permitido';
    }
    this.categorias.push(this.nuevoCategoria as Categoria);
    this.modalAgregar = false;
  }

  // Abre el modal de edición con los datos de la Categoría seleccionada
  abrirModalEditar(categoria: Categoria) {
    this.categoriaSeleccionada = { ...categoria };
    this.modalEditar = true;
  }

  // Edita y actualiza la Categoría en la lista
  editarCategoria() {
    if (this.categoriaSeleccionada) {
      const index = this.categorias.findIndex(c => c.id_categoria === this.categoriaSeleccionada!.id_categoria);
      if (index !== -1) {
        this.categorias[index] = { ...this.categoriaSeleccionada };
      }
    }
    this.modalEditar = false;
  }

  // Método para limpiar los filtros de la tabla
  clear(table: any) {
    table.clear();
  }

  // Método para aplicar un filtro global en la tabla
  onGlobalFilter(table: any, event: any) {
    table.filterGlobal(event.target.value, 'contains');
  }
}

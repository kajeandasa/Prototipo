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

// Define la interfaz para un Tipo de Alerta
export interface TipoAlerta {
  id_AlertaTipo: number;
  tipo: 'inmediata' | 'personalizada';
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
    IconFieldModule
  ],
  template: `
    <div class="card">
      <!-- Título principal -->
      <div class="font-semibold text-xl mb-4 text-center">
        <h2>Gestión de Tipos de Alerta</h2>
      </div>

      <!-- Botón para abrir el modal de Agregar -->
      <div class="flex gap-4 justify-end mr-4">
        <button pButton label="Agregar Tipo de Alerta" icon="pi pi-plus" (click)="abrirModalAgregar()"></button>
      </div>

      <!-- Tabla de Tipos de Alerta -->
      <p-table #dt1 [value]="tiposAlertas" [paginator]="true" [rows]="5"
               [globalFilterFields]="['id_AlertaTipo','tipo','descripcion']" sortMode="multiple"
               class="custom-table" [tableStyle]="{'min-width': '20rem'}" [rowsPerPageOptions]="[5,10,20]" stripedRows>

        <!-- Caption: Buscador global -->
        <ng-template pTemplate="caption">
          <div class="flex justify-end items-center">
            <button pButton label="Clear" class="p-button-outlined mr-2" icon="pi pi-filter-slash" (click)="clear(dt1)"></button>
            <p-iconfield iconPosition="left">
              <p-inputicon>
                <i class="pi pi-search"></i>
              </p-inputicon>
              <input pInputText type="text" (input)="onGlobalFilter(dt1, $event)" placeholder="Buscar...">
            </p-iconfield>
          </div>
        </ng-template>

        <!-- Encabezado de la tabla -->
        <ng-template pTemplate="header">
          <tr>
            <th pSortableColumn="id_AlertaTipo" class="header-nowrap">
              ID
              <p-sortIcon field="id_AlertaTipo"></p-sortIcon>
            </th>
            <th pSortableColumn="tipo" class="header-nowrap">
              Tipo
              <p-sortIcon field="tipo"></p-sortIcon>
            </th>
            <th pSortableColumn="descripcion" class="header-nowrap">
              Descripción
              <p-sortIcon field="descripcion"></p-sortIcon>
            </th>
            <th class="header-nowrap">
              Acciones
            </th>
          </tr>
        </ng-template>

        <!-- Cuerpo de la tabla -->
        <ng-template pTemplate="body" let-tipoAlerta>
          <tr>
            <td>{{ tipoAlerta.id_AlertaTipo }}</td>
            <td>{{ tipoAlerta.tipo }}</td>
            <td>{{ tipoAlerta.descripcion }}</td>
            <td>
              <button pButton label="Editar" icon="pi pi-pencil" (click)="abrirModalEditar(tipoAlerta)"></button>
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

      <!-- Modal: Agregar Tipo de Alerta -->
      <p-dialog header="Agregar Tipo de Alerta" [(visible)]="modalAgregar" [modal]="true" [maximizable]="true" [style]="{'width': '30rem'}">
        <div class="card flex flex-col gap-4">
          <!-- Campo: ID Tipo de Alerta -->
          <div class="flex flex-col gap-2">
            <strong>ID Tipo de Alerta</strong>
            <input pInputText type="number" [(ngModel)]="nuevoTipoAlerta.id_AlertaTipo" placeholder="ID Tipo de Alerta">
          </div>
          <!-- Campo: Tipo -->
          <div class="flex flex-col gap-2">
            <strong>Tipo</strong>
            <p-dropdown [options]="tipoOptions" [(ngModel)]="nuevoTipoAlerta.tipo" placeholder="Selecciona un tipo" [filter]="true"></p-dropdown>
          </div>
          <!-- Campo: Descripción -->
          <div class="flex flex-col gap-2">
            <strong>Descripción</strong>
            <input pInputText type="text" [(ngModel)]="nuevoTipoAlerta.descripcion" placeholder="Descripción">
          </div>
        </div>
        <!-- Botones de acción -->
        <div class="flex justify-end gap-2 mt-4">
          <p-button label="Agregar" severity="success" (click)="agregarTipoAlerta()"></p-button>
          <p-button label="Cancelar" severity="danger" (click)="modalAgregar = false"></p-button>
        </div>
      </p-dialog>

      <!-- Modal: Editar Tipo de Alerta -->
      <p-dialog header="Editar Tipo de Alerta" [(visible)]="modalEditar" [modal]="true" [style]="{'width': '30rem'}">
        <div class="card flex flex-col gap-4" *ngIf="tipoAlertaSeleccionado">
          <!-- Campo: ID Tipo de Alerta -->
          <div class="flex flex-col gap-2">
            <strong>ID Tipo de Alerta</strong>
            <input pInputText type="number" [(ngModel)]="tipoAlertaSeleccionado.id_AlertaTipo" placeholder="ID Tipo de Alerta">
          </div>
          <!-- Campo: Tipo -->
          <div class="flex flex-col gap-2">
            <strong>Tipo</strong>
            <p-dropdown [options]="tipoOptions" [(ngModel)]="tipoAlertaSeleccionado.tipo" placeholder="Selecciona un tipo" [filter]="true"></p-dropdown>
          </div>
          <!-- Campo: Descripción -->
          <div class="flex flex-col gap-2">
            <strong>Descripción</strong>
            <input pInputText type="text" [(ngModel)]="tipoAlertaSeleccionado.descripcion" placeholder="Descripción">
          </div>
        </div>
        <!-- Botones de acción -->
        <div class="flex justify-end gap-2 mt-4">
          <p-button label="Guardar" severity="success" (click)="editarTipoAlerta()"></p-button>
          <p-button label="Cancelar" severity="danger" (click)="modalEditar = false"></p-button>
        </div>
      </p-dialog>
    </div>
  `
})
export class TipoAlertaComponent implements OnInit {
  // Listado de Tipos de Alerta con datos iniciales
  tiposAlertas: TipoAlerta[] = [
    { id_AlertaTipo: 1, tipo: 'inmediata',    descripcion: 'rápida' },
    { id_AlertaTipo: 2, tipo: 'personalizada', descripcion: 'detallada' },
    { id_AlertaTipo: 3, tipo: 'personalizada', descripcion: 'específica' },
    { id_AlertaTipo: 4, tipo: 'inmediata',    descripcion: 'urgente' },
    { id_AlertaTipo: 5, tipo: 'personalizada', descripcion: 'nueva descripción' },
    { id_AlertaTipo: 6, tipo: 'inmediata',    descripcion: 'Al momento' }
  ];

  // Variables de control para los modales
  modalAgregar: boolean = false;
  modalEditar: boolean = false;

  // Propiedad para almacenar el nuevo Tipo de Alerta. Se usa Partial para permitir campos vacíos.
  nuevoTipoAlerta: Partial<TipoAlerta> = {};

  // Tipo de Alerta seleccionado para editar
  tipoAlertaSeleccionado: TipoAlerta | null = null;

  // Opciones para el dropdown del campo "tipo"
  tipoOptions = [
    { label: 'inmediata', value: 'inmediata' },
    { label: 'personalizada', value: 'personalizada' }
  ];

  ngOnInit(): void {
    // Inicializaciones adicionales si son necesarias
  }

  // Abre el modal para agregar un nuevo Tipo de Alerta con los campos vacíos
  abrirModalAgregar() {
    this.nuevoTipoAlerta = {}; // Reinicia el objeto para que los campos estén vacíos
    this.modalAgregar = true;
  }

  // Agrega el nuevo Tipo de Alerta a la lista
  agregarTipoAlerta() {
    // Si no se asigna un ID, se asigna el siguiente disponible
    if (!this.nuevoTipoAlerta.id_AlertaTipo) {
      const maxId = this.tiposAlertas.reduce((max, t) => t.id_AlertaTipo > max ? t.id_AlertaTipo : max, 0);
      this.nuevoTipoAlerta.id_AlertaTipo = maxId + 1;
    }
    // En caso de que no se haya seleccionado un tipo, se asigna por defecto 'inmediata'
    if (!this.nuevoTipoAlerta.tipo) {
      this.nuevoTipoAlerta.tipo = 'inmediata';
    }
    // Si la descripción está vacía, se asegura que sea una cadena vacía
    if (!this.nuevoTipoAlerta.descripcion) {
      this.nuevoTipoAlerta.descripcion = '';
    }
    // Se agrega el nuevo objeto a la lista (usando type assertion para forzar el tipo TipoAlerta)
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

  // Método para limpiar los filtros de la tabla
  clear(table: any) {
    table.clear();
  }

  // Método para aplicar un filtro global en la tabla
  onGlobalFilter(table: any, event: any) {
    table.filterGlobal(event.target.value, 'contains');
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
// Módulos de PrimeNG
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';

export interface Contenido {
  numero: number;
  plantilla_id: number;
  tipoItemDocumento: string;
}

@Component({
  selector: 'app-contenido',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    InputIconModule,
    IconFieldModule
  ],
  template: `
    <!-- Diálogo principal de Gestión de Contenido -->
    <p-dialog
      header="Gestión de Contenido"
      [closable]="true"
      [modal]="true"
      [maximizable]="true"
      appendTo="body"
      [(visible)]="dialogVisible"
      [style]="{ width: '75vw' }"
      [contentStyle]="{ height: '400px' }"
      (onHide)="cerrarDialog()">

      <div class="card">
        <div class="flex gap-4 justify-end mr-4 mb-3">
          <button pButton label="Agregar" icon="pi pi-plus" (click)="abrirModalAgregar()"></button>
        </div>

        <!-- Tabla de Contenido -->
        <p-table
          #dt1
          [value]="contenidosFiltrados"
          [rows]="5"
          [paginator]="true"
          responsiveLayout="scroll"
          [globalFilterFields]="['numero', 'tipoItemDocumento']"
          sortMode="multiple"
          class="custom-table"
          [tableStyle]="{ 'min-width': '30rem' }"
          [rowsPerPageOptions]="[5, 10, 20]"
          stripedRows>

          <!-- Buscador global -->
          <ng-template pTemplate="caption">
            <div class="flex justify-end items-center flex-column sm:flex-row">
              <div class="flex align-items-center mt-2 sm:mt-0">
                <button
                  pButton
                  label="Clear"
                  class="p-button-outlined mr-2"
                  icon="pi pi-filter-slash"
                  (click)="filtrarPorPlantillaId(id)"></button>
                <p-iconfield iconPosition="left">
                  <p-inputicon>
                    <i class="pi pi-search"></i>
                  </p-inputicon>
                  <input pInputText type="text" (input)="onGlobalFilter(dt1, $event)" placeholder="Buscar..." />
                </p-iconfield>
              </div>
            </div>
          </ng-template>

          <!-- Encabezado -->
          <ng-template pTemplate="header">
            <tr>
              <th pSortableColumn="numero">
                Nº <p-sortIcon field="numero"></p-sortIcon>
              </th>
              <th pSortableColumn="tipoItemDocumento">
                Tipo Item Documento <p-sortIcon field="tipoItemDocumento"></p-sortIcon>
              </th>
              <th>Acciones</th>
            </tr>
          </ng-template>

          <!-- Cuerpo -->
          <ng-template pTemplate="body" let-contenido>
            <tr>
              <td>{{ contenido.numero }}</td>
              <td>{{ contenido.tipoItemDocumento }}</td>
              <td>
                <button pButton label="Editar" icon="pi pi-pencil" (click)="abrirModalEditar(contenido)"></button>
              </td>
            </tr>
          </ng-template>
        </p-table>
      </div>

      <ng-template pTemplate="footer">
        <p-button label="Cerrar" icon="pi pi-times" (click)="cerrarDialog()"></p-button>
      </ng-template>
    </p-dialog>

    <!-- Modal Agregar Contenido -->
    <p-dialog
      header="Agregar Contenido"
      [modal]="true"
      [(visible)]="modalAgregar"
      [style]="{ width: '30rem' }"
      (onHide)="cerrarModalAgregar()">
      <div class="card flex flex-col gap-4">
        <strong>Nº</strong>
        <input pInputText type="number" [(ngModel)]="nuevoContenido.numero" placeholder="Nº" />
        <strong>Tipo Item Documento</strong>
        <input pInputText type="text" [(ngModel)]="nuevoContenido.tipoItemDocumento" placeholder="Tipo Item Documento" />
      </div>
      <div class="flex justify-end gap-2 mt-4">
        <p-button label="Agregar" severity="success" (click)="agregarContenido()"></p-button>
        <p-button label="Cancelar" severity="danger" (click)="cerrarModalAgregar()"></p-button>
      </div>
    </p-dialog>

    <!-- Modal Editar Contenido -->
    <p-dialog
      header="Editar Contenido"
      [modal]="true"
      [(visible)]="modalEditar"
      [style]="{ width: '30rem' }"
      (onHide)="cerrarModalEditar()">
      <div class="card flex flex-col gap-4" *ngIf="contenidoSeleccionado">
        <strong>Nº</strong>
        <input pInputText type="number" [(ngModel)]="contenidoSeleccionado.numero" placeholder="Nº" />
        <strong>Tipo Item Documento</strong>
        <input pInputText type="text" [(ngModel)]="contenidoSeleccionado.tipoItemDocumento" placeholder="Tipo Item Documento" />
      </div>
      <div class="flex justify-end gap-2 mt-4">
        <p-button label="Guardar" severity="success" (click)="editarContenido()"></p-button>
        <p-button label="Cancelar" severity="danger" (click)="cerrarModalEditar()"></p-button>
      </div>
    </p-dialog>
  `,
  styles: []
})
export class ContenidoComponent implements OnInit {
  id!: number;
  dialogVisible: boolean = true;
  modalAgregar: boolean = false;
  modalEditar: boolean = false;

  contenidos: Contenido[] = [
    { numero: 1, plantilla_id: 1, tipoItemDocumento: 'Fotocopia de identidad' },
    { numero: 2, plantilla_id: 1, tipoItemDocumento: 'Comprobante de estudiante' },
    { numero: 3, plantilla_id: 1, tipoItemDocumento: 'Carta aval firmada por el responsable del grupo de investigación' },
    { numero: 4, plantilla_id: 1, tipoItemDocumento: 'Formulario de postulación con detalles del proyecto (propuesta de proyecto)' },
    { numero: 5, plantilla_id: 1, tipoItemDocumento: 'Plan de trabajo y cronograma de actividades' },
    { numero: 6, plantilla_id: 1, tipoItemDocumento: 'RTN' },
    { numero: 7, plantilla_id: 1, tipoItemDocumento: 'Croquis del domicilio' },
    { numero: 8, plantilla_id: 1, tipoItemDocumento: 'Recibo de luz' },
    { numero: 1, plantilla_id: 2, tipoItemDocumento: 'Constancia de trabajo emitida por la SEDP de la UNAH' },
    { numero: 2, plantilla_id: 2, tipoItemDocumento: 'Croquis de su lugar de residencia' },
    { numero: 3, plantilla_id: 2, tipoItemDocumento: 'Identidad' },
    { numero: 4, plantilla_id: 2, tipoItemDocumento: 'RTN' },
    { numero: 5, plantilla_id: 2, tipoItemDocumento: 'Recibo de servicio Público' }
  ];

  contenidosFiltrados: Contenido[] = [];
  nuevoContenido: Partial<Contenido> = {};
  contenidoSeleccionado: Contenido | null = null;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
      this.filtrarPorPlantillaId(this.id);
    });
  }

  filtrarPorPlantillaId(id: number) {
    this.contenidosFiltrados = this.contenidos.filter(c => c.plantilla_id === id);
  }

  // Al cerrar el diálogo principal, se redirige a la pantalla de Plantilla
  cerrarDialog() {
    this.dialogVisible = false;
    this.router.navigate(['/mantenimiento/plantilla']);
  }

  // Métodos para Agregar Contenido (sin redirigir)
  abrirModalAgregar() {
    this.nuevoContenido = {};
    this.modalAgregar = true;
  }

  agregarContenido() {
    if (!this.nuevoContenido.numero) {
      this.nuevoContenido.numero = this.contenidos.length + 1;
    }
    this.nuevoContenido.plantilla_id = this.id;
    this.contenidos.push(this.nuevoContenido as Contenido);
    this.filtrarPorPlantillaId(this.id);
    this.modalAgregar = false;
  }

  cerrarModalAgregar() {
    this.modalAgregar = false;
  }

  // Métodos para Editar Contenido (sin redirigir)
  abrirModalEditar(contenido: Contenido) {
    this.contenidoSeleccionado = { ...contenido };
    this.modalEditar = true;
  }

  editarContenido() {
    if (this.contenidoSeleccionado) {
      const index = this.contenidos.findIndex(
        c => c.numero === this.contenidoSeleccionado!.numero
      );
      if (index !== -1) {
        this.contenidos[index] = { ...this.contenidoSeleccionado };
        this.filtrarPorPlantillaId(this.id);
      }
    }
    this.modalEditar = false;
  }

  cerrarModalEditar() {
    this.modalEditar = false;
  }

  // Filtro global en la tabla
  onGlobalFilter(table: any, event: any) {
    table.filterGlobal(event.target.value, 'contains');
  }
}

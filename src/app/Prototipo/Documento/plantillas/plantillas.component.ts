import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Módulos de PrimeNG
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';

export interface Plantilla {
  numero: number;
  nombrePlantilla: string;
}

export interface Contenido {
  numero: number;
  tipoItemDocumento: string;
}

@Component({
  selector: 'app-plantillas',
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
  templateUrl: './plantillas.component.html',
  styleUrls: ['./plantillas.component.css']
})
export class PlantillasComponent implements OnInit {
  // Datos de Plantillas
  plantillas: Plantilla[] = [
    { numero: 1, nombrePlantilla: 'Requisito Postulante' },
    { numero: 2, nombrePlantilla: 'Requisito Aval' }
  ];
  modalAgregarPlantilla: boolean = false;
  modalEditarPlantilla: boolean = false;
  nuevaPlantilla: Partial<Plantilla> = {};
  plantillaSeleccionada: Plantilla | null = null;

  // Datos de Contenido
  contenidos: Contenido[] = [
    { numero: 1, tipoItemDocumento: 'Fotocopia de identidad del postulante' },
    { numero: 2, tipoItemDocumento: 'Comprobante de estudiante (matriculado en la carrera)' },
    { numero: 3, tipoItemDocumento: 'Carta aval firmada por el responsable del grupo de investigación.' },
    { numero: 4, tipoItemDocumento: 'Formulario de postulación con detalles del proyecto (propuesta de proyecto)' },
    { numero: 5, tipoItemDocumento: 'Plan de trabajo y cronograma de actividades.' },
    { numero: 6, tipoItemDocumento: 'RTN del postulante' },
    { numero: 7, tipoItemDocumento: 'Croquis del domicilio del postulante' },
    { numero: 8, tipoItemDocumento: 'Recibo de luz del postulante' }
  ];
  modalContenido: boolean = false;
  modalAgregarContenido: boolean = false;
  modalEditarContenido: boolean = false;
  nuevoContenido: Partial<Contenido> = {};
  contenidoSeleccionado: Contenido | null = null;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  // --- Métodos de Plantillas ---
  abrirModalAgregarPlantilla() {
    this.nuevaPlantilla = {};
    this.modalAgregarPlantilla = true;
  }

  agregarPlantilla() {
    if (!this.nuevaPlantilla.numero) {
      const maxNumero = this.plantillas.reduce((max, p) => (p.numero > max ? p.numero : max), 0);
      this.nuevaPlantilla.numero = maxNumero + 1;
    }
    if (!this.nuevaPlantilla.nombrePlantilla) {
      this.nuevaPlantilla.nombrePlantilla = 'Nueva Plantilla';
    }
    this.plantillas.push(this.nuevaPlantilla as Plantilla);
    this.modalAgregarPlantilla = false;
  }

  abrirModalEditarPlantilla(plantilla: Plantilla) {
    this.plantillaSeleccionada = { ...plantilla };
    this.modalEditarPlantilla = true;
  }

  editarPlantilla() {
    if (this.plantillaSeleccionada) {
      const index = this.plantillas.findIndex(p => p.numero === this.plantillaSeleccionada!.numero);
      if (index !== -1) {
        this.plantillas[index] = { ...this.plantillaSeleccionada };
      }
    }
    this.modalEditarPlantilla = false;
  }

  // --- Métodos de Contenido ---
  abrirModalAgregarContenido() {
    this.nuevoContenido = {};
    this.modalAgregarContenido = true;
  }

  agregarContenido() {
    if (!this.nuevoContenido.numero) {
      const maxNumero = this.contenidos.reduce((max, c) => (c.numero > max ? c.numero : max), 0);
      this.nuevoContenido.numero = maxNumero + 1;
    }
    if (!this.nuevoContenido.tipoItemDocumento) {
      this.nuevoContenido.tipoItemDocumento = 'Nuevo Documento';
    }
    this.contenidos.push(this.nuevoContenido as Contenido);
    this.modalAgregarContenido = false;
    // Redirige a la pantalla principal de plantillas
    this.router.navigate(['/mantenimiento/plantillas']);
  }

  abrirModalEditarContenido(contenido: Contenido) {
    this.contenidoSeleccionado = { ...contenido };
    this.modalEditarContenido = true;
  }

  editarContenido() {
    if (this.contenidoSeleccionado) {
      const index = this.contenidos.findIndex(c => c.numero === this.contenidoSeleccionado!.numero);
      if (index !== -1) {
        this.contenidos[index] = { ...this.contenidoSeleccionado };
      }
    }
    this.modalEditarContenido = false;
    // Redirige a la pantalla principal de plantillas
    this.router.navigate(['/mantenimiento/plantillas']);
  }

  // Método para limpiar filtros en la tabla
  clear(table: any) {
    table.clear();
  }

  // Método para filtro global en la tabla
  onGlobalFilter(table: any, event: any) {
    table.filterGlobal(event.target.value, 'contains');
  }

  // Navegar a la pantalla de contenido
  verContenido(id: number) {
    this.router.navigate(['/mantenimiento/contenido/', id]);
  }
}

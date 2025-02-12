import { Component, OnInit } from '@angular/core';
// Esta línea es importante según tu requerimiento

@Component({
  selector: 'app-tipo-alerta',
  templateUrl: './tipo-alerta.component.html',
  styleUrls: ['./tipo-alerta.component.css']
})
export class TipoAlertaComponent implements OnInit {

  // Lista de tipos de alerta (simulada, normalmente la obtendrías de un servicio)
  tiposAlerta: any[] = [];

  // Variables para controlar la visibilidad de los modales
  modalAgregar: boolean = false;
  modalEditar: boolean = false;

  // Objeto para un nuevo registro
  nuevaTipoAlerta: any = {};

  // Objeto para el registro seleccionado para editar
  tipoAlertaSeleccionada: any;

  // Opciones para el campo "tipo" (según el enum de la tabla)
  tipoOptions: any[] = [
    { label: 'inmediata', value: 'inmediata' },
    { label: 'personalizada', value: 'personalizada' }
  ];

  constructor() { }

  ngOnInit(): void {
    // Carga de datos (en un caso real, se haría mediante un servicio)
    this.tiposAlerta = [
      { id_AlertaTipo: 1, tipo: 'inmediata', descripcion: 'Alerta inmediata' },
      { id_AlertaTipo: 2, tipo: 'personalizada', descripcion: 'Alerta personalizada' }
    ];
  }

  // Abre el modal para agregar un nuevo tipo de alerta
  abrirModalAgregar(): void {
    this.nuevaTipoAlerta = {};
    this.modalAgregar = true;
  }

  // Agrega el nuevo tipo de alerta a la lista (aquí se simula la inserción)
  agregarTipoAlerta(): void {
    // En un caso real, el ID se asignaría desde la base de datos
    this.nuevaTipoAlerta.id_AlertaTipo = this.tiposAlerta.length + 1;
    this.tiposAlerta.push({ ...this.nuevaTipoAlerta });
    this.modalAgregar = false;
  }

  // Abre el modal para editar el registro seleccionado
  abrirModalEditar(tipo: any): void {
    this.tipoAlertaSeleccionada = { ...tipo };
    this.modalEditar = true;
  }

  // Guarda los cambios realizados en el registro editado
  editarTipoAlerta(): void {
    const index = this.tiposAlerta.findIndex(t => t.id_AlertaTipo === this.tipoAlertaSeleccionada.id_AlertaTipo);
    if (index !== -1) {
      this.tiposAlerta[index] = { ...this.tipoAlertaSeleccionada };
    }
    this.modalEditar = false;
  }
}

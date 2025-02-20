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
import { DropdownModule } from 'primeng/dropdown';
// PrimeNG Modules
import { DialogModule } from 'primeng/dialog';
import { TextareaModule } from 'primeng/textarea';
import { DatePickerModule } from 'primeng/datepicker';
// Importa el módulo del DatePicker
import { CalendarModule } from 'primeng/calendar';
import { ListboxModule } from 'primeng/listbox';
import { CascadeSelectModule } from 'primeng/cascadeselect';

interface expandedRows {
  [key: string]: boolean;
}

@Component({
  selector: 'app-alerta',
  // Se incluyen todos los módulos de PrimeNG y Angular necesarios
  imports: [
    DropdownModule,
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
    CascadeSelectModule,
    DialogModule
  ],
  templateUrl: './alerta.component.html',
})
export class AlertaComponent implements OnInit {
  // Listado de alertas actualizado: se elimina la propiedad "categoria" y se asigna "AlertaTipo" como objeto
  alertas = [
    {
      id: 1,
      AlertaTipo: { id_AlertaTipo: 1, tipo: 'INMEDIATA', categoria: 'PERMITIDO', descripcion: 'rápida' },
      fecha_creacion: '2025-02-07 14:27:49',
      fecha_final: '2025-12-24 14:26:36',
      recordatorio: '2025-10-24 14:26:36',
      tipo_recordatorio: 'MES',
      cantidad_tiempo: 2,
      titulo: 'Prueba de alerta a prorroga',
      observaciones: 'aaaaaaaaa',
      TipoEntidad: 'USUARIO',
      tblentidad: 'DESEMBOLSO'
    },
    {
      id: 2,
      AlertaTipo: { id_AlertaTipo: 2, tipo: 'PERSONALIZADA', categoria: 'ADVERTENCIA', descripcion: 'detallada' },
      fecha_creacion: '2025-02-07 14:27:49',
      fecha_final: '2025-09-24 14:26:36',
      recordatorio: '2025-10-24 14:26:36',
      tipo_recordatorio: 'MES',
      cantidad_tiempo: 2,
      titulo: 'Andrey',
      observaciones: 'aaaaaaaaa',
      TipoEntidad: 'USUARIO',
      tblentidad: 'SOLICITUD'
    },
    {
      id: 3,
      AlertaTipo: { id_AlertaTipo: 3, tipo: 'PERSONALIZADA', categoria: 'NO PERMITIDO', descripcion: 'específica' },
      fecha_creacion: '2025-03-08 12:27:49',
      fecha_final: '2025-07-24 14:26:36',
      recordatorio: '2025-10-24 14:26:36',
      tipo_recordatorio: 'MES',
      cantidad_tiempo: 2,
      titulo: 'Prueba de alerta a prorroga',
      observaciones: 'aaaaaaaaa',
      TipoEntidad: 'ROL',
      tblentidad: 'CIERRE'
    },
    {
      id: 4,
      // Originalmente tenía: AlertaTipo: 'INMEDIATA' y categoria 'ADVERTENCIA'
      // Se asigna la opción con categoría ADVERTENCIA (opción 2)
      AlertaTipo: { id_AlertaTipo: 2, tipo: 'PERSONALIZADA', categoria: 'ADVERTENCIA', descripcion: 'detallada' },
      fecha_creacion: '2025-08-01 08:27:49',
      fecha_final: '2025-12-24 14:26:36',
      recordatorio: '2025-10-24 14:26:36',
      tipo_recordatorio: 'BIMESTRE',
      cantidad_tiempo: 1,
      titulo: 'Prueba de alerta a prorroga',
      observaciones: 'aaaaaaaaa',
      TipoEntidad: 'ROL',
      tblentidad: 'CIERRE'
    },
    {
      id: 5,
      // Originalmente: AlertaTipo: 'PERSONALIZADA' y categoria 'PERMITIDO'
      // Al no existir opción para PERSONALIZADA con PERMITIDO, se asigna la opción 1 (INMEDIATA) para obtener categoría PERMITIDO
      AlertaTipo: { id_AlertaTipo: 1, tipo: 'INMEDIATA', categoria: 'PERMITIDO', descripcion: 'rápida' },
      fecha_creacion: '2025-02-07 14:27:49',
      fecha_final: '2025-12-24 14:26:36',
      recordatorio: '2025-10-24 14:26:36',
      tipo_recordatorio: 'TRIMESTRE',
      cantidad_tiempo: 3,
      titulo: 'Prueba de alerta a prorroga',
      observaciones: 'aaaaaaaaa',
      TipoEntidad: 'ROL',
      tblentidad: 'CIERRE'
    },
    {
      id: 6,
      AlertaTipo: { id_AlertaTipo: 1, tipo: 'INMEDIATA', categoria: 'PERMITIDO', descripcion: 'rápida' },
      fecha_creacion: '2025-02-07 14:27:49',
      fecha_final: '2025-12-24 14:26:36',
      recordatorio: '2025-10-24 14:26:36',
      tipo_recordatorio: 'TRIMESTRE',
      cantidad_tiempo: 3,
      titulo: 'Prueba de alerta a prorroga',
      observaciones: 'aaaaaaaaa',
      TipoEntidad: 'ROL',
      tblentidad: 'CIERRE'
    }
  ];

  // Variables para controlar la visualización de los modales
  modalAgregar: boolean = false;
  modalEditar: boolean = false;

  // Objeto para crear una nueva alerta actualizado: se utiliza la propiedad "AlertaTipo" en lugar de "id_AlertaTipo" y se elimina "id_categoria"
  nuevaAlerta: any = {
    titulo: '',
    AlertaTipo: null,
    fecha_final: null,
    recordatorio: null,
    tipo_recordatorio: null,
    cantidad_tiempo: null,
    observaciones: '',
    idTipoEntidad: '',
    tblentidad: ''
  };

  // Alerta seleccionada para editar
  alertaSeleccionada: any = null;

  // Opciones para el dropdown de tipo de alerta (nuevas opciones)
  tipoAlertaOptions = [
    { id_AlertaTipo: 1, tipo: 'INMEDIATA', categoria: 'PERMITIDO', descripcion: 'rápida' },
    { id_AlertaTipo: 2, tipo: 'PERSONALIZADA', categoria: 'ADVERTENCIA', descripcion: 'detallada' },
    { id_AlertaTipo: 3, tipo: 'PERSONALIZADA', categoria: 'NO PERMITIDO', descripcion: 'específica' }
  ];

  // Opciones para otros dropdowns
  categoriaOptions = [
    { name: 'PERMITIDO', code: 'PERMITIDO' },
    { name: 'ADVERTENCIA', code: 'ADVERTENCIA' },
    { name: 'NO PERMITIDO', code: 'NO PERMITIDO' }
  ];

  tipoRecordatorioOptions = [
    { name: 'AÑO', code: 'AÑO' },
    { name: 'SEMESTRE', code: 'SEMESTRE' },
    { name: 'CUATRIMESTRE', code: 'CUATRIMESTRE' },
    { name: 'TRIMESTRE', code: 'TRIMESTRE' },
    { name: 'BIMESTRE', code: 'BIMESTRE' },
    { name: 'MES', code: 'MES' },
    { name: 'QUINCENA', code: 'QUINCENA' },
    { name: 'SEMANA', code: 'SEMANA' },
    { name: 'DÍA', code: 'DÍA' },
    { name: 'HORA', code: 'HORA' },
    { name: 'MINUTO', code: 'MINUTO' }
  ];

  // Propiedades para la selección dinámica de columnas.
  // Se eliminó la columna "categoria"
  alertCols: any[] = [
    { field: 'id', header: 'N°' },
    { field: 'AlertaTipo', header: 'Tipo Alerta' },
    { field: 'fecha_creacion', header: 'Fecha Creación' },
    { field: 'fecha_final', header: 'Fecha Final' },
    { field: 'recordatorio', header: 'Recordatorio' },
    { field: 'tipo_recordatorio', header: 'Tipo Recordatorio' },
    { field: 'cantidad_tiempo', header: 'Cantidad Tiempo' },
    { field: 'titulo', header: 'Título' },
    { field: 'observaciones', header: 'Observaciones' },
    { field: 'TipoEntidad', header: 'Tipo Entidad' },
    { field: 'tblentidad', header: 'Entidad' }
  ];
  selectedAlertColumns: any[] = [];

  tipoEntidadOptions = [
    { name: 'USUARIO', code: 'USUARIO' },
    { name: 'ROL', code: 'ROL' },
    { name: 'USUARIO', code: 'USUARIO' },
    { name: 'ROL', code: 'ROL' },
    { name: 'USUARIO', code: 'USUARIO' },
    { name: 'ROL', code: 'ROL' },
  ];

  entidadOptions = [
    { name: 'DESEMBOLSO', code: 'DESEMBOLSO' },
    { name: 'SOLICITUD', code: 'SOLICITUD' },
    { name: 'CIERRE', code: 'CIERRE' }
  ];

  ngOnInit(): void {
    // Inicialmente se seleccionan todas las columnas disponibles
    this.selectedAlertColumns = [...this.alertCols];
  }

  // Método para abrir el modal de agregar alerta
  abrirModalAgregar() {
    this.nuevaAlerta = {
      titulo: '',
      AlertaTipo: null,
      fecha_final: null,
      recordatorio: null,
      tipo_recordatorio: null,
      cantidad_tiempo: null,
      observaciones: '',
      idTipoEntidad: '',
      tblentidad: ''
    };
    this.modalAgregar = true;
  }

  // Método para abrir el modal de editar alerta
  abrirModalEditar(alerta: any) {
    // Se clona el objeto para editar sin modificar el original de inmediato
    this.alertaSeleccionada = { ...alerta };
    this.modalEditar = true;
  }

  // Método para agregar la alerta (por ejemplo, enviarla al backend)
  agregarAlerta() {
    // Se asigna la fecha de creación y se agrega la nueva alerta al listado
    this.alertas.push({
      ...this.nuevaAlerta,
      id: this.alertas.length + 1,
      fecha_creacion: new Date()
    });
    this.modalAgregar = false;
  }

  // Método para editar la alerta
  editarAlerta() {
    // Aquí se actualizaría el objeto en el listado y se enviaría la modificación al backend
    this.modalEditar = false;
  }

  // Método para limpiar filtros de la tabla
  clear(table: any) {
    table.clear();
  }

  // Método para aplicar un filtro global en la tabla
  onGlobalFilter(table: any, event: any) {
    table.filterGlobal(event.target.value, 'contains');
  }

  /**
   * Retorna la severidad (color) basado en la categoría del objeto AlertaTipo.
   * Se utiliza en el template para mostrar el p-tag con el semáforo.
   */
  getSeverity(categoria: string): "success" | "warn" | "danger" | "info" {
    switch (categoria) {
      case 'PERMITIDO':
        return 'success'; // Verde
      case 'ADVERTENCIA':
        return 'warn';    // Amarillo
      case 'NO PERMITIDO':
        return 'danger';  // Rojo
      default:
        return 'info';
    }
  }

  // Método para determinar si una columna está seleccionada (usado para el encabezado dinámico)
  isColumnSelected(field: string): boolean {
    return this.selectedAlertColumns.some(col => col.field === field);
  }


}

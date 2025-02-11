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
  // Listado de alertas
  alertas = [
    {
      id: 1,
      AlertaTipo: 'INMEDIATA',
      categoria: 'PERMITIDO',
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
      AlertaTipo: 'PERSONALIZADA',
      categoria: 'ADVERTENCIA',
      fecha_creacion: '2025-02-07 14:27:49',
      fecha_final: '2025-12-24 14:26:36',
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
      AlertaTipo: 'PERSONALIZADA',
      categoria: 'NO PERMITIDO',
      fecha_creacion: '2025-02-07 14:27:49',
      fecha_final: '2025-12-24 14:26:36',
      recordatorio: '2025-10-24 14:26:36',
      tipo_recordatorio: 'MES',
      cantidad_tiempo: 2,
      titulo: 'Prueba de alerta a prorroga',
      observaciones: 'aaaaaaaaa',
      TipoEntidad: 'ROL',
      tblentidad: 'CIERRE'
    }
  ];

  // Variables para controlar la visualización de los modales
  modalAgregar: boolean = false;
  modalEditar: boolean = false;

  // Objeto para crear una nueva alerta
  nuevaAlerta: any = {
    titulo: '',
    id_AlertaTipo: '',
    id_categoria: '',
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

  // Opciones para el dropdown de tipo_Alerta
  tipoAlertaOptions = [
    { name: 'INMEDIATA', code: 'INMEDIATA' },
    { name: 'PERSONALIZADA', code: 'PERSONALIZADA' },
    { name: 'INMEDIATA', code: 'INMEDIATA' },
    { name: 'PERSONALIZADA', code: 'PERSONALIZADA' },
    { name: 'INMEDIATA', code: 'INMEDIATA' },
    { name: 'PERSONALIZADA', code: 'PERSONALIZADA' },
    { name: 'INMEDIATA', code: 'INMEDIATA' },
    { name: 'PERSONALIZADA', code: 'PERSONALIZADA' },
    { name: 'INMEDIATA', code: 'INMEDIATA' },
    { name: 'PERSONALIZADA', code: 'PERSONALIZADA' }
  ];

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

  // Propiedades para la selección dinámica de columnas
  alertCols: any[] = [
    { field: 'id', header: 'N°' },
    { field: 'AlertaTipo', header: 'Tipo Alerta' },
    { field: 'categoria', header: 'Categoria' },
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
    { name: 'ROL', code: 'ROL' }
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
    this.nuevaAlerta = {}; // Reinicia el objeto de alerta
    this.modalAgregar = true;
  }

  // Método para abrir el modal de editar alerta
  abrirModalEditar(alerta: any) {
    this.alertaSeleccionada = { ...alerta }; // Clona el objeto para editar
    this.modalEditar = true;
  }

  // Método para agregar la alerta (aquí se haría la llamada al servicio o API)
  agregarAlerta() {
    // Asignar fecha_creacion si es necesario, enviar this.nuevaAlerta al backend, etc.
    this.alertas.push({ ...this.nuevaAlerta, id: this.alertas.length + 1, fecha_creacion: new Date() });
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

  // Método para obtener el severity (color) de la categoría
  getSeverity(categoria: string): "success" | "warn" | "danger" | "info" {
    switch (categoria) {
      case 'PERMITIDO':
        return 'success';   // Verde
      case 'ADVERTENCIA':
        return 'warn';      // Amarillo
      case 'NO PERMITIDO':
        return 'danger';    // Rojo
      default:
        return 'info';      // Otro color (opcional)
    }
  }

  // Método para determinar si una columna está seleccionada (usado para el encabezado dinámico)
  isColumnSelected(field: string): boolean {
    return this.selectedAlertColumns.some(col => col.field === field);
  }
}

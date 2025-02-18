import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

// Importación de módulos de PrimeNG para usarlos en la vista y funcionalidad.
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
import { Router } from '@angular/router';
// Importación de componentes de PrimeNG para trabajar con formularios, tablas, fechas y validaciones.
import { DialogModule } from 'primeng/dialog';
import { TextareaModule } from 'primeng/textarea';
import { ListboxModule } from 'primeng/listbox';
// Importación de las validaciones de los inputs con KeyFilter
import { KeyFilterModule } from 'primeng/keyfilter';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { PanelModule } from 'primeng/panel';
import { AccordionModule } from 'primeng/accordion';

import { FileUploadModule } from 'primeng/fileupload';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

// Importación de módulos de PrimeNG para usarlos en la vista y funcionalidad.
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
import { Router } from '@angular/router';
// Importación de componentes de PrimeNG para trabajar con formularios, tablas, fechas y validaciones.
import { DialogModule } from 'primeng/dialog';
import { TextareaModule } from 'primeng/textarea';
import { ListboxModule } from 'primeng/listbox';
// Importación de las validaciones de los inputs con KeyFilter
import { KeyFilterModule } from 'primeng/keyfilter';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { PanelModule } from 'primeng/panel';
import { AccordionModule } from 'primeng/accordion';

import { FileUploadModule } from 'primeng/fileupload';

@Component({
  selector: 'app-item-documento',
  imports: [
    FileUploadModule,
    AccordionModule,
    PanelModule,
    ListboxModule,
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
    DialogModule,
    KeyFilterModule,
    ConfirmDialogModule
],
  selector: 'app-item-documento',
  imports: [
    FileUploadModule,
    AccordionModule,
    PanelModule,
    ListboxModule,
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
    DialogModule,
    KeyFilterModule,
    ConfirmDialogModule
],
  templateUrl: './solicitud.component.html',
  styleUrl: './solicitud.component.scss'
})
export class SolicitudComponent  {

    id_usuario_solicitante = 2
    Usuario = [
        { id: 1, Nombre: "La Licenciada", Entidad: 1 },
        { id: 2, Nombre: "Usuario Postulante 1", Entidad: 2 },
        { id: 3, Nombre: "Usuario Postulante 2", Entidad: 2 }
    ];

    Solicitud = [
        { id: 1, Tipo_id: 2, estado_id: 1, persona_id: 3, nombre: "Beca de excelencia académica", descripcion: "Solicitud de beca por alto rendimiento académico", observacion: "Aprobada y en proceso de asignación de fondos" },
        { id: 2, Tipo_id: 2, estado_id: 2, persona_id: 3, nombre: "Prórroga de entrega de tesis", descripcion: "Solicita una extensión en la entrega de su tesis final", observacion: "Pendiente de revisión por comité académico" },
        { id: 3, Tipo_id: 3, estado_id: 4, persona_id: 2, nombre: "Fondo de movilidad estudiantil", descripcion: "Solicitud de apoyo financiero para intercambio internacional", observacion: "En revisión por la unidad de financiamiento" },
        { id: 4, Tipo_id: 3, estado_id: 3, persona_id: 1, nombre: "Prórroga de pago de colegiatura", descripcion: "Solicita más tiempo para el pago de la cuota universitaria", observacion: "Cancelado por falta de documentación" },
        { id: 5, Tipo_id: 2, estado_id: 2, persona_id: 2, nombre: "Beca de investigación científica", descripcion: "Solicita apoyo para desarrollar un proyecto de investigación", observacion: "Pendiente de evaluación del comité científico" },
        { id: 6, Tipo_id: 3, estado_id: 1, persona_id: 3, nombre: "Fondo para compra de material educativo", descripcion: "Solicitud de apoyo financiero para libros y equipo de estudio", observacion: "Aprobado, se procederá con el depósito" },
        { id: 7, Tipo_id: 2, estado_id: 4, persona_id: 1, nombre: "Beca deportiva", descripcion: "Solicita una beca por su desempeño en el equipo universitario", observacion: "En proceso de validación de logros deportivos" },
        { id: 8, Tipo_id: 2, estado_id: 1, persona_id: 2, nombre: "Prórroga de entrega de prácticas profesionales", descripcion: "Solicita una extensión en la entrega de reportes de prácticas", observacion: "Aprobado con nueva fecha de entrega" },
        { id: 9, Tipo_id: 3, estado_id: 2, persona_id: 3, nombre: "Fondo de emergencia para estudiantes", descripcion: "Solicita apoyo financiero temporal por situación económica", observacion: "Pendiente de evaluación socioeconómica" },
        { id: 10, Tipo_id: 2, estado_id: 3, persona_id: 1, nombre: "Prórroga de presentación de exámenes finales", descripcion: "Solicita permiso para rendir exámenes en una fecha posterior", observacion: "Cancelado por falta de justificación médica" }
    ];


    Solicitud_tipo = [
        { id: 1, Nombre_tipo: "Beca", descripcion: "Solicitud para obtener una beca académica" },
        { id: 2, Nombre_tipo: "Prórroga", descripcion: "Solicitud para extender plazos de pago o trámites" },
        { id: 3, Nombre_tipo: "Fondo", descripcion: "Solicitud para recibir financiamiento adicional" }
    ];

    Solicitud_estado = [
        { id: 1, Nombre_estado: "Aprobado", descripcion: "La solicitud ha sido aprobada" },
        { id: 2, Nombre_estado: "Pendiente", descripcion: "La solicitud está en espera de aprobación" },
        { id: 3, Nombre_estado: "Rechazado", descripcion: "La solicitud ha sido cancelada" },
        { id: 4, Nombre_estado: "Revisión", descripcion: "La solicitud está en proceso de evaluación" }
    ];


    obtenerPersona(personaId: number):any {
        return this.Solicitud.filter(doc => doc.persona_id === personaId);
    }

    TipoSolicitud_Get(solicitudId: number): any{
        const tipo = this.Solicitud_tipo.find(tipo => tipo.id === solicitudId);
        if (!tipo) return "Tipo de documento no encontrado";
        return tipo;
    }
    TipoEstado_Get(estadoId: number): any{
        const tipo = this.Solicitud_estado.find(tipo => tipo.id === estadoId);
        if (!tipo) return "Tipo de documento no encontrado";
        return tipo;
    }
    Usuario_Get(estadoId: number): any{
        const tipo = this.Usuario.find(tipo => tipo.id === estadoId);
        if (!tipo) return "Tipo de documento no encontrado";
        return tipo;
    }
    getSeverity(id: number): "success" | "warn" | "danger" | "info" {
        switch (id) {
          case 1:
            return 'success'; // Verde
          case 2:
            return 'warn';    // Amarillo
          case 3:
            return 'danger';  // Rojo
          default:
            return 'info';
        }
      }


    date: Date | undefined;
    selectedTask: any = {};  // Almacena la tarea seleccionada

    Modal_agregar: boolean = false;
    modalabrir_agregar(){
        this.Modal_agregar = true;
    }
    Modal_Editar: boolean = false;
    modalabrir_editar(task?: any){
        this.Modal_Editar = true;

        this.selectedTask = { ...task };
    };

    iraRuta_beca(Ruta: String) {
        this.router.navigate(['/beca/'+Ruta]);
    }
        constructor(
            private router: Router
          ) {}

}

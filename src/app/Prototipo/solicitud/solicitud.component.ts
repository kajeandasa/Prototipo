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
  templateUrl: './solicitud.component.html',
  styleUrl: './solicitud.component.scss'
})
export class SolicitudComponent  {

    Solicitud=[
        {id:1,Tipo_id:1,estado_id:1,persona_id:1, nombre:" nombre solicitud", descripcion: "holaa", obervacion:" no se puede"},
        {id:1,Tipo_id:2,estado_id:2,persona_id:1, nombre:" nombre solicitud", descripcion: "holaa", obervacion:" no se puede"},
        {id:1,Tipo_id:3,estado_id:1,persona_id:1, nombre:" nombre solicitud", descripcion: "holaa", obervacion:" no se puede"},
        {id:1,Tipo_id:2,estado_id:3,persona_id:1, nombre:" nombre solicitud", descripcion: "holaa", obervacion:" no se puede"},
    ]
    Solicitud_tipo = [
        { id: 1, Nombre_tipo:"Beca" , descripcion:"Beca"},
        { id: 2, Nombre_tipo:"Prorroga" , descripcion:"Prorroga"},
        { id: 3, Nombre_tipo:"Fondo" , descripcion:"Fondo"},
    ];
    Solicitud_estado = [
        { id: 1, Nombre_estado:"Aprobado" , descripcion:"Beca"},
        { id: 2, Nombre_estado:"Pendiente" , descripcion:"Prorroga"},
        { id: 3, Nombre_estado:"Cancelado" , descripcion:"Fondo"},
    ];


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

    iraVerCheckList() {
        this.router.navigate(['/beca/CheckDocumento']);
    }
        constructor(
            private router: Router
          ) {}

}

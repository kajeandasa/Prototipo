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
import { CheckboxModule } from 'primeng/checkbox';
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
  selector: 'app-check-documento',
    imports: [
      CheckboxModule,
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
  standalone: true,
  templateUrl: './check-documento.component.html',
  styleUrl: './check-documento.component.scss'
})
export class CheckDocumentoComponent {

    id_usuario_revisante = 1
    id_usuario_postulante = 3  //tambien puede ser el aval
    Usuario=[
        {id:1,Nombre:"La lic.",Entidad:1},
        {id:2,Nombre:"usuario postulante 1",Entidad:2},
        {id:3,Nombre:"usuario postulante 2",Entidad:2}
    ]
    obtenerUsuarioPorId(Id: number):any {
        return this.Usuario.find(doc => doc.id === Id);
    }



    Persona_Documento=[
        {id:1,persona_id:3,documento_id:1,observacion:""},
        {id:2,persona_id:3,documento_id:2,observacion:""},
        {id:3,persona_id:2,documento_id:3,observacion:""},
        {id:4,persona_id:2,documento_id:4,observacion:""},
        {id:5,persona_id:2,documento_id:5,observacion:""},
    ]


    Item_Documento=[
        {id:1,tipo_id:1,estado_id:1,Descripcion:"itemDocumento, RTN_ejemplo"},
        {id:2,tipo_id:3,estado_id:3,Descripcion:"itemDocumento, Contrado de Explicacion"},
        {id:3,tipo_id:3,estado_id:3,Descripcion:"itemDocumento, Contrado de Explicacion otro"},
        {id:4,tipo_id:4,estado_id:3,Descripcion:"itemDocumento, Contrado de Explicacion otro"},
        {id:5,tipo_id:5,estado_id:3,Descripcion:"itemDocumento, Contrado de Explicacion otro"},
    ]
    Item_Documento_check=[
        {id:1,documento_id:1,Check:0,Check_error:0,observacion:"RTN_ejemplo"},
        {id:2,documento_id:2,Check:0,Check_error:0,observacion:""},
        {id:3,documento_id:3,Check:0,Check_error:0,observacion:""},
        {id:4,documento_id:4,Check:0,Check_error:0,observacion:""},
        {id:5,documento_id:5,Check:0,Check_error:0,observacion:""},
        {id:6,documento_id:6,Check:0,Check_error:0,observacion:""},
        {id:7,documento_id:7,Check:0,Check_error:0,observacion:""},
    ]
    Item_Documento_Achivo = [
        { id: 1, id_Documento:1 ,Version: 1, observacion:" hola"},
        { id: 2, id_Documento:1 ,Version: 2, observacion:" hola"},
        { id: 3, id_Documento:1 ,Version: 3, observacion:" hola"},
        { id: 4, id_Documento:1 ,Version: 1, observacion:" hola"},
        { id: 5, id_Documento:1 ,Version: 2, observacion:" hola"},
        { id: 6, id_Documento:2 ,Version: 3, observacion:" hola"},
        { id: 7, id_Documento:2 ,Version: 4, observacion:" hola"},
        { id: 8, id_Documento:2 ,Version: 5, observacion:" hola"},
        { id: 9, id_Documento:2 ,Version: 5, observacion:" hola"},
    ];


    Item_Documento_Tipo=[
        {id:1,Nombre:"RTN",Descripcion:" Documento RTN documentoacion", Tiempo_vencimiento_Dias:"12-12-12", Categoria_id:1, RutaRepositorio:"RTNs\\"},
        {id:2,Nombre:"DNI",Descripcion:" Documento RTN documentoacion", Tiempo_vencimiento_Dias:"12-12-12", Categoria_id:1, RutaRepositorio:"DNIs\\"},
        {id:3,Nombre:"Contrato",Descripcion:" Documento RTN documentoacion", Tiempo_vencimiento_Dias:"12-12-12", Categoria_id:2, RutaRepositorio:"Contratos\\"},
        {id:4,Nombre:"Resivo",Descripcion:" Documento RTN documentoacion", Tiempo_vencimiento_Dias:"12-12-12", Categoria_id:2, RutaRepositorio:"Resivos\\"}
    ]

    Item_Documento_Categoria = [
        { id: 1, Nombre: "Adocumentos Personales" },
        { id: 2, Nombre: "Documentos administrativos" },
        { id: 3, Nombre: " hola" }
    ];
    Item_Documento_estado = [
        { id: 1, Estado: "Aprovado",Descripcion:" Documento RTN documentoacion"},
        { id: 2, Estado: "Rechazado",Descripcion:" Documento RTN documentoacion"},
        { id: 3, Estado: "Pendiente",Descripcion:" Documento RTN documentoacion"}
    ];



    obtenerDocumentosPorPersona(personaId: number):any {
        return this.Persona_Documento.filter(doc => doc.persona_id === personaId);
    }
    obtenerDocumentoPorId(documentoId: number):any {
        return this.Item_Documento.find(doc => doc.id === documentoId) || "Documento no encontrado";
    }
    getCheckPorId(documentoId: number):any {
        return this.Item_Documento_check.find(doc => doc.documento_id === documentoId);
    }


        getCheckValue(documentoId: number): boolean {
          return !!this.Item_Documento_check.find(doc => doc.documento_id === documentoId)?.Check;
        }

        updateCheckValue(documentoId: number, newValue: boolean) {
          const doc = this.Item_Documento_check.find(doc => doc.documento_id === documentoId);
          if (doc) {
            doc.Check = newValue ? 1 : 0;
            if (newValue)
                doc.Check_error = 0;
          }
        }
        getCheckValue_error(documentoId: number): boolean {
            return !!this.Item_Documento_check.find(doc => doc.documento_id === documentoId)?.Check_error;
          }

          updateCheckValue_error(documentoId: number, newValue: boolean) {
            const doc = this.Item_Documento_check.find(doc => doc.documento_id === documentoId);
            if (doc) {
                doc.Check_error = newValue ? 1 : 0;
                if (newValue)
                    doc.Check = 0;
            }
          }

    TipoDocumento_Get(documentoId: number): any{
        const tipoDocumento = this.Item_Documento_Tipo.find(tipo => tipo.id === documentoId);
        if (!tipoDocumento) return "Tipo de documento no encontrado";

        return tipoDocumento;
    }
    CategoriaDocumento_Get(documentoId: number): any{
        const tipoDocumento = this.Item_Documento_Categoria.find(categoria => categoria.id === documentoId);
        if (!tipoDocumento) return "Tipo de documento no encontrado";

        return tipoDocumento;
    }
    EstadoDocumento_Get(documentoId: number): any{
        const tipoDocumento = this.Item_Documento_estado.find(estado => estado.id === documentoId);
        if (!tipoDocumento) return "Tipo de documento no encontrado";

        return tipoDocumento;
    }
    // Método para filtrar inputs dependiendo del formulario
    ArchivoHistorial(id: number): any {
        return this.Item_Documento_Achivo.filter(item => item.id_Documento === id);
    }


}

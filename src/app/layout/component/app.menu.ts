import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppMenuitem } from './app.menuitem';

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [CommonModule, AppMenuitem, RouterModule],
    template: `
    <ul class="layout-menu">
        <ng-container *ngFor="let item of model; let i = index">
            <li app-menuitem *ngIf="!item.separator" [item]="item" [index]="i" [root]="true"></li>
            <li *ngIf="item.separator" class="menu-separator"></li>
        </ng-container>
    </ul>
    `
})
export class AppMenu {
    model: MenuItem[] = [];

    ngOnInit() {
        this.model = [
            {
                label: 'Index',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
                ]
            },
            {
                label: 'Modulo',
                items: [
                    {
                        label: 'Beca',
                        icon: 'pi pi-fw pi-circle',
                        items: [
                        { label: 'Convocatoria',icon: 'pi pi-fw pi-bookmark', routerLink: ['/beca/convocatoria']},
                        { label: 'Becas',icon: 'pi pi-fw pi-bookmark', routerLink: ['/beca/infobeca']},
                        { label: 'Solicitudes',   icon: 'pi pi-fw pi-bookmark', routerLink: ['/beca/solicitud']},
                        { label: 'Alerta',   icon: 'pi pi-fw pi-bookmark', routerLink: ['/beca/alerta'] },
                        { label: 'Formulario',   icon: 'pi pi-fw pi-bookmark', routerLink: ['/beca/formulario'] },
                        { label: 'Documentos',   icon: 'pi pi-fw pi-bookmark', routerLink: ['/beca/ItemDocumento'] },
                        { label: 'Desembolso',  icon: 'pi pi-fw pi-bookmark', routerLink: ['/beca/desembolso']},
                        { label: 'Prorroga de Beca',  icon: 'pi pi-fw pi-bookmark', routerLink: ['/beca/solicitudprorroga'] },
                        { label: 'Intereses',      icon: 'pi pi-fw pi-bookmark', routerLink: ['/beca/intereses'] },
                    ] }
                ]
            },
            {
                label: 'Mantenimiento',
                items: [
                    {
                        label: 'Beca',
                        icon: 'pi pi-fw pi-circle',
                        items: [
                            { label: 'Formulario', icon: 'pi pi-fw pi-bookmark', routerLink: ['/mantenimiento/formulario'] },
                            {
                                label: 'Alerta',
                                icon: 'pi pi-fw pi-bookmark',
                                items: [
                                    { label: 'Tipo Alerta', routerLink: ['/mantenimiento/alerta_tipo'] }
                                ]
                            },                            {
                                label: 'Documentos',
                                icon: 'pi pi-fw pi-bookmark',
                                items: [
                                    { label: 'Requisitos', routerLink: ['/mantenimiento/plantilla'] }


                                ]
                            },

                            {
                                label: 'Convocatoria',
                                icon: 'pi pi-fw pi-bookmark',
                                items: [
                                    { label: 'Estado convocatoria', routerLink: ['/mantenimiento/estado'] },
                                    { label: 'Tipo convocatoria', routerLink: ['/mantenimiento/tipo'] }



                                ]
                            },
                            { label: 'Desembolso', icon: 'pi pi-fw pi-bookmark' },
                            { label: 'Cierre', icon: 'pi pi-fw pi-bookmark' }
                        ]
                    },
                    {
                        label: 'Mantenimiento',
                        items: [
                            
                            {   label: 'Desembolso',
                                icon: 'pi pi-fw pi-circle',                                
                                items: [
                                { label: 'Becas', icon: 'pi pi-fw pi-book', 
                                    items: [
                                        { label: 'Desembolsos por beca', icon: 'pi pi-wallet', routerLink: ['/beca/desembolsosbeca'] },
                                        { label: 'Estado Desembolso Pagado', icon: 'pi pi-asterisk', routerLink: ['/beca/'] },
                                        { label: 'Tipos de Becas', icon: 'pi pi-address-book', routerLink: ['/beca/tipobeca'] },
                                        { label: 'Monto de la Beca', icon: 'pi pi-money-bill', routerLink: ['/beca/montodefaultbeca'] },
                                    ]
                                },
                                { label: 'Seguimiento',   icon: 'pi pi-fw pi-folder-open', 
                                    items: [
                                        { label: 'Estado de Seguimiento', icon: 'pi pi-lightbulb', routerLink: ['/beca/aprobacionaval'] },
                                        { label: 'Tipo de Avance', icon: 'pi pi-file-import', routerLink: ['/beca/aprobacionaval'] }
                                    ]    
                                },
                                { label: 'Prorroga',  icon: 'pi pi-fw pi-file-plus',
                                    items: [
                                        { label: 'Estado de Prorroga', icon: 'pi pi-clock', routerLink: ['/beca/estadoprorroga'] },
                                        { label: 'Plazo', icon: 'pi pi-calendar-clock', routerLink: ['/beca/plazoprorroga'] },
                                    ]
                                },
                                { label: 'Cierre',  icon: 'pi pi-fw pi-stopwatch',
                                    items: [
                                        { label: 'Tipo de Cierre', icon: 'pi pi-ellipsis-v', routerLink: ['/beca/tipocierre'] },
                                    ]
                                }
                            ] },
                        ]
                    },
                ]
            }
        ];
    }
}

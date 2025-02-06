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
            <li *ngIf="item.separator" class="menu-separator"> </li>
        </ng-container>
    </ul> `
})
export class AppMenu {
    model: MenuItem[] = [];

    ngOnInit() {
        this.model = [
            {
                label: 'Index',
                items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] }]
            },
            {
                label: 'Modulo',
                items: [

                    {   label: 'Beca',
                        icon: 'pi pi-fw pi-circle',
                        items: [
                        { label: 'Convocatoria',icon: 'pi pi-fw pi-bookmark', routerLink: ['/beca/convocatoria']},
                        { label: 'Solicitudes',   icon: 'pi pi-fw pi-bookmark', routerLink: ['/beca/solicitud'] },
                        { label: 'Desembolso',  icon: 'pi pi-fw pi-bookmark', routerLink: ['/beca/solicitud']},
                        { label: 'Cierre',      icon: 'pi pi-fw pi-bookmark'}
                    ] },
                    {   label: 'Becario',
                        icon: 'pi pi-fw pi-circle',
                        items: [
                        { label: 'Solicitud de Postulante',icon: 'pi pi-fw pi-bookmark',
                            items: [
                                { label: 'Paso 1: Postulante realiza la solicitud al aval', icon: 'pi pi-send', routerLink: ['/beca/solicitudpostulante'] },
                                { label: 'Paso 2: Aval recibe la solicitud', icon: 'pi pi-check', routerLink: ['/beca/aprobacionaval'] }
                            ]
                        },
                    ] },
                ]
            },
            {
                label: 'Mantenimiento',
                items: [
                    
                    {   label: 'Desembolso',
                        icon: 'pi pi-fw pi-circle',                                
                        items: [
                        { label: 'Becas',icon: 'pi pi-fw pi-book', 
                            items: [
                                { label: 'Tipos de Becas', icon: 'pi pi-address-book', routerLink: ['/beca/solicitudpostulante'] },
                                { label: 'Desembolsos por beca', icon: 'pi pi-wallet', routerLink: ['/beca/aprobacionaval'] }
                            ]
                        },
                        { label: 'Estados',   icon: 'pi pi-fw pi-lightbulb', 
                            items: [
                                { label: 'Estado de Prorroga', icon: 'pi pi-clock', routerLink: ['/beca/solicitudpostulante'] },
                                { label: 'Estado de Seguimiento', icon: 'pi pi-folder-open', routerLink: ['/beca/aprobacionaval'] }
                            ]    
                        },
                        { label: 'Prorroga',  icon: 'pi pi-fw pi-file-plus',
                            items: [
                                { label: 'Plazo', icon: 'pi pi-calendar-clock', routerLink: ['/beca/solicitudpostulante'] },
                            ]
                        },
                        { label: 'Cierre',      icon: 'pi pi-fw pi-stopwatch',
                            items: [
                                { label: 'Tipo de Cierre', icon: 'pi pi-ellipsis-v', routerLink: ['/beca/solicitudpostulante'] },
                            ]
                        }
                    ] },
                ]
            },
            
        ];
    }
}

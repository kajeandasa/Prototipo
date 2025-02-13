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
<<<<<<< HEAD
                        { label: 'Convocatoria',icon: 'pi pi-fw pi-bookmark', routerLink: ['/beca/convocatoria']},
                        { label: 'Solicituds',   icon: 'pi pi-fw pi-bookmark', routerLink: ['/beca/solicitud'] },
                        { label: 'Alerta',   icon: 'pi pi-fw pi-bookmark', routerLink: ['/beca/alerta'] },
                        { label: 'Formulario',   icon: 'pi pi-fw pi-bookmark', routerLink: ['/beca/formulario'] },
                        { label: 'Documentos',   icon: 'pi pi-fw pi-bookmark', routerLink: ['/beca/ItemDocumento'] },
                        { label: 'Desembolso',  icon: 'pi pi-fw pi-bookmark'},
                        { label: 'Cierre',      icon: 'pi pi-fw pi-bookmark'}
                    ] }
=======
                            { label: 'Convocatoria', icon: 'pi pi-fw pi-bookmark', routerLink: ['/beca/convocatoria'] },
                            { label: 'Solicituds', icon: 'pi pi-fw pi-bookmark', routerLink: ['/beca/solicitud'] },
                            { label: 'Alerta', icon: 'pi pi-fw pi-bookmark', routerLink: ['/beca/alerta'] },
                            { label: 'Formulario', icon: 'pi pi-fw pi-bookmark', routerLink: ['/beca/formulario'] },
                            { label: 'Desembolso', icon: 'pi pi-fw pi-bookmark' },
                            { label: 'Cierre', icon: 'pi pi-fw pi-bookmark' }
                        ]
                    }
>>>>>>> a81a0407ec31bfd12d8f870d651602e89c72b6f8
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
                                    { label: 'Tipo Alerta', routerLink: ['/mantenimiento/alerta_tipo'] },
                                    { label: 'Categoria', routerLink: ['/mantenimiento/categoria'] }
                                ]
                            },
                            { label: 'Desembolso', icon: 'pi pi-fw pi-bookmark' },
                            { label: 'Cierre', icon: 'pi pi-fw pi-bookmark' }
                        ]
                    }
                ]
            }
        ];
    }
}

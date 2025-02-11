import { Routes } from '@angular/router';
import { FormularioManteminientoComponent } from './Formularios/formulario-Manenimiento/formularioMantenimiento.component';

export default [
    { path: 'formulario', data: { breadcrumb: 'formulario' }, component: FormularioManteminientoComponent },
    { path: '**', redirectTo: '/notfound' }
] as Routes;

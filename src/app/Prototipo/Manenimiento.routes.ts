import { Routes } from '@angular/router';
import { FormularioManteminientoComponent } from './Formularios/formulario-Manenimiento/formularioMantenimiento.component';
import { TipoAlertaComponent } from './alertas/tipo-alerta/tipo-alerta.component';
import { CategoriaComponent } from './alertas/categoria/categoria.component';

export default [
    { path: 'formulario', data: { breadcrumb: 'formulario' }, component: FormularioManteminientoComponent },
    { path: 'alerta_tipo',   data: { breadcrumb: 'alerta_tipo' }, component: TipoAlertaComponent },
    { path: 'categoria',   data: { breadcrumb: 'categoria' }, component: CategoriaComponent },
    { path: '**', redirectTo: '/notfound' }
] as Routes;

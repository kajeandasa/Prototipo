import { Routes } from '@angular/router';
import { TablaCombocatoriaComponent } from './tabla-combocatoria/tabla-combocatoria.component';


export default [
    { path: 'convocatoria', data: { breadcrumb: 'convocatoria' }, component: TablaCombocatoriaComponent },
    { path: '**', redirectTo: '/notfound' }
] as Routes;

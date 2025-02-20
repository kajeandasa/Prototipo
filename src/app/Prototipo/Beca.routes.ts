// import { Routes } from '@angular/router';
import { Routes } from '@angular/router';
import { ConvocatoriaComponent } from './Convocatorias/convocatoria/convocatoria.component';
import { SolicitudComponent } from './solicitud/solicitud.component';


export default [
    { path: 'convocatoria', data: { breadcrumb: 'convocatoria' }, component: ConvocatoriaComponent },
    { path: 'solicitud', data: { breadcrumb: 'solicitud' }, component: SolicitudComponent },
    { path: '**', redirectTo: '/notfound' }
] as Routes;











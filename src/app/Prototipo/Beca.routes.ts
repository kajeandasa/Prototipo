import { Routes } from '@angular/router';
import { ConvocatoriaComponent } from './convocatoria/convocatoria.component';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { SolicitudPostulanteComponent } from './postulante/solicitudpostulante.component';
import { aprobacionavalComponent } from './aval/aprobacionaval.component';


export default [
    { path: 'convocatoria', data: { breadcrumb: 'convocatoria' }, component: ConvocatoriaComponent },
    { path: 'solicitud', data: { breadcrumb: 'solicitud' }, component: SolicitudComponent },
    { path: 'solicitudpostulante', data: { breadcrumb: 'solicitudpostulante' }, component: SolicitudPostulanteComponent },
    { path: 'aprobacionaval', data: { breadcrumb: 'aprobacionaval' }, component: aprobacionavalComponent },
    { path: '**', redirectTo: '/notfound' }
] as Routes;

import { Routes } from '@angular/router';
import { ConvocatoriaComponent } from './convocatoria/convocatoria.component';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { SolicitudPostulanteComponent } from './postulante/solicitudpostulante.component';
import { aprobacionavalComponent } from './aval/aprobacionaval.component';
import { desembolsoBecaComponent } from './modulo desembolso/desembolsos por beca/desembolsosbeca.component';


export default [
    { path: 'convocatoria', data: { breadcrumb: 'convocatoria' }, component: ConvocatoriaComponent },
    { path: 'solicitud', data: { breadcrumb: 'solicitud' }, component: SolicitudComponent },
    { path: 'solicitudpostulante', data: { breadcrumb: 'solicitudpostulante' }, component: SolicitudPostulanteComponent },
    { path: 'aprobacionaval', data: { breadcrumb: 'aprobacionaval' }, component: aprobacionavalComponent },
    { path: 'desembolsosbeca', data: { breadcrumb: 'desembolsosbeca' }, component: desembolsoBecaComponent},
    { path: '**', redirectTo: '/notfound' }
] as Routes;

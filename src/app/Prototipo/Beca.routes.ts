import { Routes } from '@angular/router';
import { ConvocatoriaComponent } from './convocatoria/convocatoria.component';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { SolicitudPostulanteComponent } from './postulante/solicitudpostulante.component';
import { aprobacionavalComponent } from './aval/aprobacionaval.component';
import { DesembolsoComponent } from './desembolso/desembolso.component';
import { desembolsoBecaComponent } from './modulo desembolso/desembolsos por beca/desembolsosbeca.component';
import { TipoBecaComponent } from './modulo desembolso/tipo de becas/tipobeca.component';
import { estadoProrrogaComponent } from './modulo desembolso/estado de prorroga/estadoprorroga.component';
import { tipoCierreComponent } from './modulo desembolso/tipos de cierre/tipocierre.component';
import { plazoProrrogaComponent } from './modulo desembolso/plazo de prorroga/plazoprorroga.component';
import { montodefaultbecaComponent } from './modulo desembolso/monto predeterminado beca/montodefaultbeca.component';
import { becasComponent } from './modulo desembolso/informacion de la beca/infobeca.component';
import { prorrogabecaComponent } from './modulo desembolso/prorroga por beca/prorrogabeca.component';
import { solicitudProrrogaComponent } from './modulo desembolso/solicitud prorroga/soliprorroga.component';

export default [
    { path: 'convocatoria', data: { breadcrumb: 'convocatoria' }, component: ConvocatoriaComponent },
    { path: 'solicitud', data: { breadcrumb: 'solicitud' }, component: SolicitudComponent },
    { path: 'solicitudpostulante', data: { breadcrumb: 'solicitudpostulante' }, component: SolicitudPostulanteComponent },
    { path: 'aprobacionaval', data: { breadcrumb: 'aprobacionaval' }, component: aprobacionavalComponent },
    { path: 'desembolsosbeca', data: { breadcrumb: 'desembolsosbeca' }, component: desembolsoBecaComponent},
    { path: 'desembolso', data: { breadcrumb:'/desembolso' }, component: DesembolsoComponent },
    { path: 'tipobeca', data: { breadcrumb: 'tipobeca' }, component: TipoBecaComponent },
    { path: 'estadoprorroga', data: { breadcrumb: 'estadoprorroga' }, component: estadoProrrogaComponent },
    { path: 'tipocierre', data: { breadcrumb: 'tipocierre' }, component: tipoCierreComponent },
    { path: 'plazoprorroga', data: { breadcrumb: 'plazoprorroga' }, component: plazoProrrogaComponent },
    { path: 'montodefaultbeca', data: { breadcrumb: 'montodefaultbeca' }, component: montodefaultbecaComponent },
    { path: 'infobeca', data: { breadcrumb: 'infobeca' }, component: becasComponent },
    { path: 'prorrogabeca', data: { breadcrumb: 'prorrogabeca' }, component: prorrogabecaComponent },
    { path: 'solicitudprorroga', data: { breadcrumb: 'solicitudprorroga' }, component: solicitudProrrogaComponent },
 

    

] as Routes;


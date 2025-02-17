// import { Routes } from '@angular/router';
import { Routes } from '@angular/router';
import { ConvocatoriaComponent } from './convocatoria/convocatoria.component';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { SolicitudPostulanteComponent } from './postulante/solicitudpostulante.component';
import { aprobacionavalComponent } from './aval/aprobacionaval.component';
import { TipoBecaComponent } from './modulo desembolso/tipo de becas/tipobeca.component';
import { estadoProrrogaComponent } from './modulo desembolso/estado de prorroga/estadoprorroga.component';
import { tipoCierreComponent } from './modulo desembolso/tipos de cierre/tipocierre.component';
import { plazoProrrogaComponent } from './modulo desembolso/plazo de prorroga/plazoprorroga.component';
import { montodefaultbecaComponent } from './modulo desembolso/monto predeterminado beca/montodefaultbeca.component';
import { becasComponent } from './modulo desembolso/informacion de la beca/infobeca.component';
import { prorrogabecaComponent } from './modulo desembolso/prorroga por beca/prorrogabeca.component';
import { solicitudProrrogaComponent } from './modulo desembolso/solicitud prorroga/soliprorroga.component';
import { desembolsoBecaComponent } from './modulo desembolso/desembolsos por beca/desembolsosbeca.component';

import { DesembolsoComponent } from './desembolso/desembolso.component';
// import { Seguimiento } from './desembolso/seguimiento';
import { Cierre } from './desembolso/cierre/cierre.component';

// import { Gestiondesembolso } from './desembolso/gestionDesembolsos';

export default [
    { path: 'tipobeca', data: { breadcrumb: 'tipobeca' }, component: TipoBecaComponent },
    { path: 'estadoprorroga', data: { breadcrumb: 'estadoprorroga' }, component: estadoProrrogaComponent },
    { path: 'tipocierre', data: { breadcrumb: 'tipocierre' }, component: tipoCierreComponent },
    { path: 'plazoprorroga', data: { breadcrumb: 'plazoprorroga' }, component: plazoProrrogaComponent },
    { path: 'montodefaultbeca', data: { breadcrumb: 'montodefaultbeca' }, component: montodefaultbecaComponent },
    { path: 'infobeca', data: { breadcrumb: 'infobeca' }, component: becasComponent },
    { path: 'prorrogabeca', data: { breadcrumb: 'prorrogabeca' }, component: prorrogabecaComponent },
    { path: 'solicitudprorroga', data: { breadcrumb: 'solicitudprorroga' }, component: solicitudProrrogaComponent },
    { path: 'convocatoria', component: ConvocatoriaComponent, data: { breadcrumb: 'Convocatoria' } },
    { path: 'solicitud', component: SolicitudComponent, data: { breadcrumb: 'Solicitud' } },
    { path: 'solicitudpostulante', component: SolicitudPostulanteComponent, data: { breadcrumb: 'Solicitud Postulante' } },
    { path: 'aprobacionaval', component: aprobacionavalComponent, data: { breadcrumb: 'Aprobación Aval' } },
    { path: 'desembolsosbeca', component: desembolsoBecaComponent, data: { breadcrumb: 'Desembolsos Beca' } },
    {
      path: 'desembolso', component: DesembolsoComponent, children: [
        // { path: 'gestionDesembolso', component: Gestiondesembolso },
        // { path: 'seguimiento', component: Seguimiento },
        { path: 'cierre', component: Cierre }
      ]
    }



] as Routes;











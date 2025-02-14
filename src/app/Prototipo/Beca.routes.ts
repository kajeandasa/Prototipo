// import { Routes } from '@angular/router';
import { Routes } from '@angular/router';
import { ConvocatoriaComponent } from './convocatoria/convocatoria.component';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { SolicitudPostulanteComponent } from './postulante/solicitudpostulante.component';
import { aprobacionavalComponent } from './aval/aprobacionaval.component';
import { desembolsoBecaComponent } from './modulo desembolso/desembolsos por beca/desembolsosbeca.component';

import { DesembolsoComponent } from './desembolso/desembolso.component';
import { Seguimiento } from './desembolso/seguimiento';
import { Cierre } from './desembolso/cierre';

import { Gestiondesembolso } from './desembolso/gestionDesembolsos';

export default [
    { path: 'convocatoria', component: ConvocatoriaComponent, data: { breadcrumb: 'Convocatoria' } },
    { path: 'solicitud', component: SolicitudComponent, data: { breadcrumb: 'Solicitud' } },
    { path: 'solicitudpostulante', component: SolicitudPostulanteComponent, data: { breadcrumb: 'Solicitud Postulante' } },
    { path: 'aprobacionaval', component: aprobacionavalComponent, data: { breadcrumb: 'Aprobación Aval' } },
    { path: 'desembolsosbeca', component: desembolsoBecaComponent, data: { breadcrumb: 'Desembolsos Beca' } },
    {
      path: 'desembolso', component: DesembolsoComponent, children: [
        { path: 'gestionDesembolso', component: Gestiondesembolso },
        { path: 'seguimiento', component: Seguimiento },
        { path: 'cierre', component: Cierre }
      ]
    }


  ] as Routes;










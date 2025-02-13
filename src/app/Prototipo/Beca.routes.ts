import { Routes } from '@angular/router';
import { ConvocatoriaComponent } from './convocatoria/convocatoria.component';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { FormularioComponent } from './Formularios/formulario/formulario.component'
import { ItemFormularioComponent } from './Formularios/item-formulario/item-formulario.component'
import { FormularioUsuarioComponent } from './Formularios/formulario-usuario/formulario-usuario.component';
import { AlertaComponent } from './alertas/alerta/alerta.component'
import { TipoAlertaComponent } from './alertas/tipo-alerta/tipo-alerta.component';

export default [
    { path: 'convocatoria',         data: { breadcrumb: 'convocatoria' },   component: ConvocatoriaComponent },
    { path: 'solicitud',            data: { breadcrumb: 'solicitud' },      component: SolicitudComponent },
    { path: 'formulario',           data: { breadcrumb: 'formulario' },     component: FormularioComponent },
    { path: 'formulario-usuario',   data: { breadcrumb: 'Usuarioformulario'},component: FormularioUsuarioComponent },
    { path: 'itemformulario/:id',   data: { breadcrumb: 'itemformulario' }, component: ItemFormularioComponent },
    { path: 'alerta',   data: { breadcrumb: 'alerta' }, component: AlertaComponent },
    { path: 'alerta_tipo',   data: { breadcrumb: 'alerta_tipo' }, component: TipoAlertaComponent },
    { path: '**', redirectTo: '/notfound' }
] as Routes;

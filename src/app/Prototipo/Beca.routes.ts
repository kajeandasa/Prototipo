import { Routes } from '@angular/router';
import { ConvocatoriaComponent } from './convocatoria/convocatoria.component';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { FormularioComponent } from './Formularios/formulario/formulario.component'
import { ItemFormularioComponent } from './Formularios/item-formulario/item-formulario.component'


export default [
    { path: 'convocatoria', data: { breadcrumb: 'convocatoria' }, component: ConvocatoriaComponent },
    { path: 'solicitud', data: { breadcrumb: 'solicitud' }, component: SolicitudComponent },
    { path: 'formulario',    data: { breadcrumb: 'formulario' },     component: FormularioComponent },
    { path: 'itemformulario',    data: { breadcrumb: 'itemformulario' },     component: ItemFormularioComponent },
    { path: 'itemformulario/:id',    data: { breadcrumb: 'itemformulario' },     component: ItemFormularioComponent },
    { path: '**', redirectTo: '/notfound' }
] as Routes;

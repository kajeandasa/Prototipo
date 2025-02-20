import { Routes } from '@angular/router';
import { FormularioManteminientoComponent } from './Formularios/formulario-Manenimiento/formularioMantenimiento.component';
import { TipoAlertaComponent } from './alertas/tipo-alerta/tipo-alerta.component';
import { CategoriaComponent } from './alertas/categoria/categoria.component';
import { ContenidoComponent } from './Documento/contenido/contenido.component';
import { PlantillasComponent } from './Documento/plantillas/plantillas.component';
import { EstadoConvocatoriaComponent } from './Convocatorias/estado-convocatoria/estado-convocatoria.component';
import { TipoConvocatoriaComponent } from './Convocatorias/tipo-convocatoria/tipo-convocatoria.component';


export default [
    { path: 'formulario', data: { breadcrumb: 'formulario' }, component: FormularioManteminientoComponent },
    { path: 'alerta_tipo',   data: { breadcrumb: 'alerta_tipo' }, component: TipoAlertaComponent },
    { path: 'categoria',   data: { breadcrumb: 'categoria' }, component: CategoriaComponent },
    { path: 'contenido/:id',   data: { breadcrumb: 'contenido' }, component: ContenidoComponent },
    { path: 'plantilla',   data: { breadcrumb: 'plantilla' }, component: PlantillasComponent },
    { path: 'estado',   data: { breadcrumb: 'estado' }, component: EstadoConvocatoriaComponent },
    { path: 'tipo',   data: { breadcrumb: 'tipo' }, component: TipoConvocatoriaComponent },
    { path: '**', redirectTo: '/notfound' }
] as Routes;

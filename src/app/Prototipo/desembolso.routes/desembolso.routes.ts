// import { Routes } from '@angular/router';
import { Routes } from '@angular/router';


import { Seguimiento } from '../desembolso/seguimiento';
//import { Cierre } from '../desembolso/cierre';
import { Gestiondesembolso } from '../desembolso/gestionDesembolsos';

export default [
    { path: 'gestionDesembolso', component: Gestiondesembolso, data: { breadcrumb: 'Gestion Desembolso' } },
    { path: 'seguimiento', component: Seguimiento, data: { breadcrumb: 'Seguimiento' } },
    //{ path: 'cierre', component: Cierre, data: { breadcrumb: 'Cierre' } },
    
    

  ] as Routes; 










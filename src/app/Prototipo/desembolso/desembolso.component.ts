import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // ✅ Importación necesaria
import { ButtonModule } from 'primeng/button';

// import { Dashboard } from './app/pages/dashboard/dashboard';
@Component({
  selector: 'app-desembolso',
  standalone: true, // ✅ Asegura que pueda importar módulos de forma independiente
  imports: [CommonModule, ButtonModule], // ✅ Importar CommonModule para usar *ngFor y otras directivas
  styleUrls: ['./desembolso.component.css'],
  templateUrl: './desembolso.component.html',
})
export class DesembolsoComponent {
  constructor(private router: Router) {}

  // Opciones de navegación
  options = [
    { title: 'Gestión de Desembolso', description: 'Formulario para registrar una instancia.', route: 'desembolso/gestionDesembolso', color: 'card-blue' },
    { title: 'Seguimiento de Becas', description: 'Seguimiento de becas activas.', route: 'desembolso/seguimiento', color: 'card-white' },
    { title: 'Cierre de Becas', description: 'Formulario para cerrar becas en curso.', route: 'desembolso/cierre', color: 'card-blue' }
  ];

  // Redirección corregida
  redirectTo(route: string) {
    if (route) {
      console.log('Redirigiendo a:', route);
      this.router.navigate([route]);
    } else {
      console.error('Ruta no definida');
    }
  }
}

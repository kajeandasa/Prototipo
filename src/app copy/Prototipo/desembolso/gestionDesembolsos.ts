import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Importa RouterModule para manejar rutas

@Component({
    standalone: true,
    selector: 'app-gestiondesembolso',
    imports: [CommonModule],
    // styleUrls: ['./desembolso.component.css'],
    template: `
        <div class="container">
            <div class="service-item">
                <h3>Gestión de Desembolso</h3>
                <!-- <button [routerLink]="['/desembolso/gestionDesembolso']">Ver más</button> -->
            </div>
        </div>
    `
})

export class Gestiondesembolso {
    verMas() {
        alert('Más información sobre Desembolsos');
      }
}

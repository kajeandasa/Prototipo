import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Importa RouterModule para manejar rutas

@Component({
    standalone: true,
    selector: 'app-cierre',
    // templateUrl: './desembolso.component.html',
    imports: [CommonModule, RouterModule], // Agrega RouterModule para que routerLink funcione
    // styleUrls: ['./desembolso.component.css'],
    template: `
        <div class="container">
            <div class="service-item">
                <h3>Cierre de Beca</h3>
                <button [routerLink]="['/desembolso/cierre']">Ver más</button>
            </div>
        </div>
    `
})

export class Cierre {
}

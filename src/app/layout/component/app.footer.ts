import { Component } from '@angular/core';

@Component({
    standalone: true,
    selector: 'app-footer',
    template: `

    <div class="footer">
        <!-- Imagen a la izquierda -->
        <img src="./assets/Sello_Calidad_Blanco.png" alt="Logo Izquierda" class="img-left">

        <!-- Texto centrado -->
        <div class="footer-text">
            <span class="navbar-text text-light">
                © Derechos Reservados UNAH 2024
                <br>
                Dirección Ejecutiva de Gestión de Tecnología (DEGT)
            </span>
        </div>

        <!-- Imagen a la derecha -->
        <img src="./assets/UNAH_Blanco.png" alt="Logo Derecha" class="img-right" style="margin-right: 50px;">
    </div>
    `
})
export class AppFooter {}

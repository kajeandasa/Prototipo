import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    standalone: true,
    selector: 'app-stats-widget',
    imports: [CommonModule],
    styleUrls: ['./stats-widget.css'],
    template: `<div class="col-span-12 lg:col-span-6 xl:col-span-3">

<!-- Modal: Mostrar la información de todas las becas al hacer clic -->
        <div *ngIf="isVisible" class="modal-overlay">
        <div class="modal">
            <div class="modal-header">
            <h2>{{ selectedData?.title }}</h2>
            <button (click)="closeModal()" class="close-btn">&times;</button>
            </div>
            <div class="modal-body">
            <p>{{ selectedData?.description }}</p>

            <!-- Mostrar archivos descargables -->
            <div *ngIf="selectedData?.files?.length">
                <h3 class="mt-4 font-semibold">Archivos disponibles:</h3>
                <ul class="mt-2">
                <li *ngFor="let file of selectedData?.files" class="mb-2">
                    📄 <a [href]="file.url" download class="text-blue-500 hover:underline">{{ file.name }}</a>
                </li>
                </ul>
            </div>
            </div>
        </div>
        </div>


<!-- becas sustantivas (cards) -->
        <div class="col-span-12 lg:col-span-6 xl:col-span-3">
        <div class="card mb-0 bg-blue-900 dark:bg-gray-900 hover:bg-blue-800 dark:hover:bg-gray-800 cursor-pointer transition-colors text-white p-5 rounded-xl shadow-md" (click)="showModal({ title: 'Becas Sustantivas', description: 'Detalles adicionales sobre becas sustantivas...' })">
            <div class="flex justify-between items-center mb-4">
            <div>
                <span class="block text-yellow-400 dark:text-yellow-300 font-semibold text-sm mb-2 uppercase tracking-wide">Información</span>
                <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">152 becas otorgadas</div>
            </div>
            <div class="flex items-center justify-center bg-purple-100 dark:bg-purple-400/10 rounded-border" style="width: 2.5rem; height: 2.5rem">
                <i class="pi pi-users text-cyan-500 !text-xl"></i>
            </div>
            </div>
            <div class="text-sm text-blue-300 dark:text-blue-400">
            <span class="font-semibold text-yellow-400 dark:text-yellow-300">Becas Sustantivas</span> · <span class="text-blue-200 dark:text-blue-500">Ver mas.</span>
            </div>
        </div>
        </div>

<!-- fondos concursables -->
        <div class="col-span-12 lg:col-span-6 xl:col-span-3">
                <div class="card mb-0 bg-blue-900 dark:bg-gray-900 hover:bg-blue-800 dark:hover:bg-gray-800 cursor-pointer transition-colors text-white p-5 rounded-xl shadow-md" (click)="showModal({ title: 'Fondos Concursables', description: 'Detalles adicionales sobre becas sustantivas...' })">
                    <div class="flex justify-between items-center mb-4">
                        <div>
                            <span class="block text-yellow-400 dark:text-yellow-300 font-semibold text-sm mb-2 uppercase tracking-wide">INFORMACION</span>
                            <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">100 becas otorgadas</div>
                        </div>
                        <div class="flex items-center justify-center bg-purple-100 dark:bg-purple-400/10 rounded-border" style="width: 2.5rem; height: 2.5rem">
                            <i class="pi pi-users text-cyan-500 !text-xl"></i>
                        </div>
                    </div>
                    <div class="text-sm text-blue-300 dark:text-blue-400">
                        <span class="font-semibold text-yellow-400 dark:text-yellow-300">Fondos Concursables </span> · <span class="text-blue-200 dark:text-blue-500">Ver mas.</span>
                    </div>
                </div>
            </div>
        </div>

<!-- Becas de Posgrado -->
        <div class="col-span-12 lg:col-span-6 xl:col-span-3">
        <div class="card mb-0 bg-blue-900 dark:bg-gray-900 hover:bg-blue-800 dark:hover:bg-gray-800 cursor-pointer transition-colors text-white p-5 rounded-xl shadow-md" (click)="showModal({ title: 'Becas de Posgrado', description: 'Detalles adicionales sobre Becas de Posgrado...' })">
                    <div class="flex justify-between items-center mb-4">
                        <div>
                            <span class="block text-yellow-400 dark:text-yellow-300 font-semibold text-sm mb-2 uppercase tracking-wide">Información</span>
                            <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">100 becas otorgadas</div>
                        </div>
                        <div class="flex items-center justify-center bg-blue-300 dark:bg-blue-500/10 rounded-full shadow-md" style="width: 2.5rem; height: 2.5rem">
                            <i class="pi pi-users text-yellow-400 !text-xl"></i>
                        </div>
                    </div>
                    <div class="text-sm text-blue-300 dark:text-blue-400">
                        <span class="font-semibold text-yellow-400 dark:text-yellow-300">Becas de Posgrado</span> · <span class="text-blue-200 dark:text-blue-500">Ver mas.</span>
                    </div>
            </div>
        </div>

<!-- Grado/Pregrado -->
        <div class="col-span-12 lg:col-span-6 xl:col-span-3">
        <div class="card mb-0 bg-blue-900 dark:bg-gray-900 hover:bg-blue-800 dark:hover:bg-gray-800 cursor-pointer transition-colors text-white p-5 rounded-xl shadow-md" (click)="showModal({ title: 'Becas de Grado/Pregrado', description: 'Detalles adicionales sobre Becas deGrado/Pregrado...' })">
                <div class="flex justify-between items-center mb-4">
                    <div>
                        <span class="block text-yellow-400 dark:text-yellow-300 font-semibold text-sm mb-2 uppercase tracking-wide">Información</span>
                        <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">871 becas otorgadas</div>
                    </div>
                    <div class="flex items-center justify-center bg-purple-100 dark:bg-purple-400/10 rounded-border" style="width: 2.5rem; height: 2.5rem">
                        <i class="pi pi-users text-cyan-500 !text-xl"></i>
                    </div>
                </div>
                <div class="text-sm text-blue-300 dark:text-blue-400">
                    <span class="font-semibold text-yellow-400 dark:text-yellow-300">Becas de Grado/Pregrado</span> · <span class="text-blue-200 dark:text-blue-500">Ver mas</span>
                </div>
            </div>
        </div>

<!-- Grupos de Investigación -->
        <div class="col-span-12 lg:col-span-6 xl:col-span-3">
            <div class="card mb-0 bg-blue-900 dark:bg-gray-900 hover:bg-blue-800 dark:hover:bg-gray-800 cursor-pointer transition-colors text-white p-5 rounded-xl shadow-md" (click)="showModal({ title: 'Grupos de Investigación', description: 'Detalles adicionales sobre Grupos de Investigación...' })">
                    <div class="flex justify-between items-center mb-4">
                        <div>
                            <span class="block text-yellow-400 dark:text-yellow-300 font-semibold text-sm mb-2 uppercase tracking-wide">Información</span>
                            <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">152 becas otorgadas</div>
                        </div>
                        <div class="flex items-center justify-center bg-blue-300 dark:bg-blue-500/10 rounded-full shadow-md" style="width: 2.5rem; height: 2.5rem">
                            <i class="pi pi-users text-yellow-400 !text-xl"></i>
                        </div>
                    </div>
                    <div class="text-sm text-blue-300 dark:text-blue-400">
                        <span class="font-semibold text-yellow-400 dark:text-yellow-300">Grupos de Investigación</span> · <span class="text-blue-200 dark:text-blue-500">Ver mas.</span>
                    </div>
            </div>
        </div>

`
})

export class StatsWidget {
  // Estado para controlar la visibilidad del modal
  isVisible: boolean = false;

  // Datos del panel que se mostrarán en el modal
  selectedData: any = null;

  // Función para alternar la visibilidad del modal y cargar datos
  showModal(data: any) {
    this.selectedData = data;
    this.isVisible = true;
  }

  // Función para cerrar el modal
  closeModal() {
    this.isVisible = false;
    this.selectedData = null;
  }
}


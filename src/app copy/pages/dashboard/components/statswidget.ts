import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    standalone: true,
    selector: 'app-stats-widget',
    imports: [CommonModule],
    styleUrls: ['./stats-widget.css'],
    template: `
    <div class="col-span-12 lg:col-span-6 xl:col-span-3">
        <!-- Modal: Mostrar la información de todas las becas al hacer clic -->
        <div *ngIf="isVisible" class="modal-overlay">
            <div class="modal">
                <div class="modal-header">
                    <h2>{{ selectedData?.title }}</h2>
                    <button (click)="closeModal()" class="close-btn">&times;</button>
                </div>
                <div class="modal-body">
                    <p>{{ selectedData?.description }}</p>
                    <div *ngIf="selectedData?.files?.length">
                        <h3>Requisitos:</h3>
                        <ul>
                            <li *ngFor="let file of selectedData?.files">
                                <a [href]="file.url" download>{{ file.requisitos }}</a>
                            </li>
                        </ul>
                        <h3>Archivos:</h3>
                        <ul>
                            <li *ngFor="let file of selectedData?.files">
                                <a [href]="file.url" download>{{ file.name }}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="stats-container">
            <div class="stats-widgets">
                <!-- Paneles (tarjetas) -->
                <!-- becas sustantivas (cards) -->
                <div class="col-span-12 lg:col-span-6 xl:col-span-3">
                    <div class="card mb-0 bg-blue-900 dark:bg-gray-900 hover:bg-blue-800 dark:hover:bg-gray-800 cursor-pointer transition-colors text-white p-5 rounded-xl shadow-md" (click)="showModal(becasSustantivas)">
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
                <div class="card mb-0 bg-blue-900 dark:bg-gray-900 hover:bg-blue-800 dark:hover:bg-gray-800 cursor-pointer transition-colors text-white p-5 rounded-xl shadow-md" (click)="showModal(fondosConcursables)">
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
                <div class="card mb-0 bg-blue-900 dark:bg-gray-900 hover:bg-blue-800 dark:hover:bg-gray-800 cursor-pointer transition-colors text-white p-5 rounded-xl shadow-md" (click)="showModal(BecasPosgrado)">
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
                <div class="card mb-0 bg-blue-900 dark:bg-gray-900 hover:bg-blue-800 dark:hover:bg-gray-800 cursor-pointer transition-colors text-white p-5 rounded-xl shadow-md" (click)="showModal(BecasGradoPregrado)">
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
                <div class="card mb-0 bg-blue-900 dark:bg-gray-900 hover:bg-blue-800 dark:hover:bg-gray-800 cursor-pointer transition-colors text-white p-5 rounded-xl shadow-md" (click)="showModal(GruposInvestigacion)">
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
        </div>
    </div>
`
})

export class StatsWidget {
  // Estado para controlar la visibilidad del modal
  isVisible: boolean = false;
  // Datos del panel que se mostrarán en el modal
  selectedData: any = null;

// informacion de becas
    becasSustantivas = {
        title: 'Becas Sustantivas',
        description:[ 'Se otorgan a instancias de investigación (institutos de investigación científica, observatorios universitarios, centros experimentales y/o de innovación, entre otras) de la UNAH para apoyar proyectos científicos que buscan resolver problemas nacionales, en línea con el artículo 160 de la Constitución de Honduras.',

        ],

        files: [
            {requisitos:'a.	Constancia Laboral'},
            {requisitos:'b.	Curriculum'},
            {requisitos:'c.	Formulario de postulación (contener el proyecto registrado en la DICIHT)'},
            {requisitos:'d.	Propuesta de proyecto de investigación según formato suministrado en versión impresa y digital.'},
            {requisitos:'e.	Plan de acción'},
            {requisitos:'f.	Cronograma'},
            {requisitos:'g.	Copia del ultimo titulo académico obtenido por cada uno de los postulantes.'},
            {requisitos:'h.	Fotocopia de identidad (cada postulante)'},
            {requisitos:'i.	RTN (cada postulante)'},
            {requisitos:'j.	Recibo de servicio público (cada postulante)'},
            {requisitos:'k.	Constancia de estar en proceso de jubilación (cada postulante)'},
            {requisitos:'l.	Constancia de no haber iniciado acciones legales en contra de la universidad.'},

            { name: 'Requisitos.pdf', url: '/assets/docs/requisitos_becas.pdf' },
            { name: 'Formulario.docx', url: '/assets/docs/formulario_becas.docx' }
        ]
    };

    fondosConcursables = {
        title: 'Fondos Concursables',
        description: [
            'Apoyo a proyectos de investigación, desarrollo e innovación (I+D+i).',
            'Formación de investigadores en áreas prioritarias.',
          ],
        funding: [
            { type: 'Proyectos de investigación científica', amount: 'L. 100,000.00 - L. 500,000.00 (según convocatoria 2024)' },
            { type: 'Proyectos de I+D+i', amount: 'L. 100,000.00 - L. 500,000.00 (según convocatoria 2024)' },
            { type: 'Apoyo a gestión curricular', amount: '100% al inicio' },
        ],
        notes: [
            'Los detalles específicos varían según la convocatoria.',
            'Consulta la convocatoria 2024 para más información.',
        ],
        files: [
            {requisitos:'a.	Constancia Laboral'},
            {requisitos:'b.	Curriculum'},
            {requisitos:'c.	Formulario de postulación (contener el proyecto registrado en la DICIHT)'},
            {requisitos:'d.	Propuesta de proyecto de investigación según formato suministrado en versión impresa y digital.'},
            {requisitos:'e.	Plan de acción'},
            {requisitos:'f.	Cronograma'},
            {requisitos:'k.	Constancia de estar en proceso de jubilación (cada postulante)'},
            {requisitos:'l.	Constancia de no haber iniciado acciones legales en contra de la universidad.'},

            { name: 'Convocatoria.pdf', url: '/assets/docs/convocatoria_fondos.pdf' }
        ]
    };

    BecasPosgrado = {
        title: 'Becas de Posgrado',
        description: 'La beca básica de postgrado de la UNAH ayuda a estudiantes de postgrado a desarrollar sus tesis. Los doctorandos pueden obtener una segunda beca debido a la complejidad de sus investigaciones. El objetivo es mejorar la finalización de tesis y convertir los resultados en artículos científicos.',
        files: [
            {requisitos:'Estudiente:'},
            {requisitos:'   1.Fotocopia de identidad (cada postulante)'},
            {requisitos:'   2.	RTN (cada postulante)'},
            {requisitos:'   3.	Recibo de servicio público (cada postulante)'},
            {requisitos:'   5.	Curriculum'},
            {requisitos:'   6.	Plan de acción'},
            {requisitos:'   7.	Cronograma'},
            {requisitos:'   8.	Croquis'},
            {requisitos:'   9.	Formulario de postulación (contener el proyecto registrado en la DICIHT)'},
            {requisitos:'   10.Propuesta de proyecto de investigación según formato suministrado (impresa y digital).'},

            {requisitos:'Estudiente (unah):'},
            {requisitos:'   1.Fotocopia de identidad (cada postulante)'},
            {requisitos:'   2.	RTN (cada postulante)'},
            {requisitos:'   3.	Recibo de servicio público (cada postulante)'},
            {requisitos:'   5.	Curriculum'},
            {requisitos:'   6.	Plan de acción'},
            {requisitos:'   7.	Cronograma'},
            {requisitos:'   8.	Croquis'},
            {requisitos:'   9.	Formulario de postulación (contener el proyecto registrado en la DICIHT)'},
            {requisitos:'   10. Propuesta de proyecto de investigación según formato suministrado (impresa y digital).'},
            {requisitos:'   11.	Constancia de estar en proceso de jubilación (cada postulante)'},
            {requisitos:'   12.	Constancia de no haber iniciado acciones legales en contra de la universidad.'},

            { name: 'Requisitos.pdf', url: '/assets/docs/requisitos_becas.pdf' },
            { name: 'Formulario.docx', url: '/assets/docs/formulario_becas.docx' }
        ]
    };

    BecasGradoPregrado = {
        title: 'Becas de Grado/Pregrado',
        description: 'Se otorga a estudiantes de pregrado de la UNAH que forman parte de un grupo de investigación o son invitados a un equipo de investigación de una beca sustantiva. La beca está diseñada para enseñar a investigar, integrando a los alumnos en proyectos generales con un plan de trabajo aprobado.',
        files: [
            {requisitos:'Estudiente:'},
            {requisitos:'   1.Fotocopia de identidad (cada postulante)'},
            {requisitos:'   2.	RTN (cada postulante)'},
            {requisitos:'   3.	Recibo de servicio público (cada postulante)'},
            {requisitos:'   5.	Curriculum'},
            {requisitos:'   6.	Plan de acción'},
            {requisitos:'   7.	Cronograma'},
            {requisitos:'   8.	Croquis'},
            {requisitos:'   9.	Formulario de postulación (contener el proyecto registrado en la DICIHT)'},
            {requisitos:'   10.Propuesta de proyecto de investigación según formato suministrado (impresa y digital).'},
            {requisitos:'               '},
            {requisitos:'Aval:'},
            {requisitos:'   1.Fotocopia de identidad (cada postulante)'},
            {requisitos:'   2.	RTN (cada postulante)'},
            {requisitos:'   3.	Recibo de servicio público (cada postulante)'},
            {requisitos:'   4.	Constancia Laboral'},
            {requisitos:'   c.	Formulario de postulación (contener el proyecto registrado en la DICIHT)'},
            {requisitos:'   d.	Propuesta de proyecto de investigación según formato suministrado en versión impresa y digital.'},
            // {requisitos:'k.	Constancia de estar en proceso de jubilación (cada postulante)'},
            // {requisitos:'l.	Constancia de no haber iniciado acciones legales en contra de la universidad.'},

            { name: 'Convocatoria.pdf', url: '/assets/docs/convocatoria_fondos.pdf' }
        ]
    };

    GruposInvestigacion = {
        title: 'Grupos de Investigación',
        description: 'Se otorga a grupos de investigación científica activos (conformados por alumnos y profesores de la UNAH; mas expertos temáticos internos y externos) y registrados de la UNAH, con el objetivo de incentivar y fortalecer estos grupos como elementos fundamentales del Sistema de Investigación Científica, Humanística y Tecnológica.',
        files: [
            {requisitos:'a.	Constancia Laboral'},
            {requisitos:'b.	Curriculum'},
            {requisitos:'c.	Formulario de postulación (contener el proyecto registrado en la DICIHT)'},
            {requisitos:'d.	Propuesta de proyecto de investigación según formato suministrado en versión impresa y digital.'},
            {requisitos:'e.	Plan de acción'},
            {requisitos:'f.	Cronograma'},
            {requisitos:'g.	Constancia de estar en proceso de jubilación (cada postulante)'},
            {requisitos:'h.	Constancia de no haber iniciado acciones legales en contra de la universidad.'},

            { name: 'Convocatoria.pdf', url: '/assets/docs/convocatoria_fondos.pdf' }
        ]
    };
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


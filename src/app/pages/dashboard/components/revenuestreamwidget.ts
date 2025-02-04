import { Component } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { debounceTime, Subscription } from 'rxjs';
import { LayoutService } from '../../../layout/service/layout.service';

@Component({
    standalone: true,
    selector: 'app-revenue-stream-widget',
    imports: [ChartModule],
    template: `<div class="card !mb-8">
        <div class="font-semibold text-xl mb-4">Becas otorgadas en los Centros Regionales</div>
        <p-chart type="bar" [data]="chartData" [options]="chartOptions" class="h-80" />
    </div>`
})
export class RevenueStreamWidget {
    chartData: any;

    chartOptions: any;

    subscription!: Subscription;

    constructor(public layoutService: LayoutService) {
        this.subscription = this.layoutService.configUpdate$.pipe(debounceTime(25)).subscribe(() => {
            this.initChart();
        });
    }

    ngOnInit() {
        this.initChart();
    }

    initChart() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const borderColor = documentStyle.getPropertyValue('--surface-border');
        const textMutedColor = documentStyle.getPropertyValue('--text-color-secondary');

        this.chartData = {
            labels: ['Grupos de investigación', 'Sustantivas', 'Posgrado', 'Fondos Concursables', 'Grado'],
            datasets: [
                {
                    type: 'bar',
                    label: 'CU',
                    backgroundColor: '#1E3A8A', // Azul oscuro
                    borderColor: '#1E3A8A',
                    borderWidth: 1,
                    data: [4000, 10000, 15000, 4000, 5000],
                    barThickness: 25
                },
                {
                    type: 'bar',
                    label: 'Curla',
                    backgroundColor: '#FACC15', // Amarillo (tono profesional)
                    borderColor: '#FACC15',
                    borderWidth: 1,
                    data: [2100, 8400, 2400, 7500, 6200],
                    barThickness: 25
                },
                {
                    type: 'bar',
                    label: 'UNAH-TEC DANLI',
                    backgroundColor: '#60A5FA', // Azul cielo
                    borderColor: '#60A5FA',
                    borderWidth: 1,
                    data: [4100, 5200, 3400, 7400, 3300],
                    barThickness: 25
                },
                {
                    type: 'bar',
                    label: 'CURNO',
                    backgroundColor: '#111827', // Negro serio y corporativo
                    borderColor: '#111827',
                    borderWidth: 1,
                    data: [4100, 5200, 3400, 7400, 2900],
                    barThickness: 25
                }
            ]
        };

        this.chartOptions = {
            maintainAspectRatio: false,
            aspectRatio: 0.8,
            plugins: {
                legend: {
                    labels: {
                        color: textColor,
                        font: {
                            size: 12
                        }
                    },
                    align: 'end',
                    position: 'right'
                }
            },
            scales: {
                x: {
                    stacked: false,
                    ticks: {
                        color: textMutedColor,
                        font: {
                            size: 12
                        }
                    },
                    grid: {
                        display: false
                    }
                },
                y: {
                    stacked: false,
                    ticks: {
                        color: textMutedColor,
                        font: {
                            size: 12
                        },
                        stepSize: 2000
                    },
                    grid: {
                        color: borderColor,
                        borderDash: [2, 2]
                    }
                }
            },
            animation: {
                duration: 600,
                easing: 'easeOutQuad'
            }
        };
    }



    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}

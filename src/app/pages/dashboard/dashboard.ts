import { Component } from '@angular/core';
import { NotificationsWidget } from './components/notificationswidget';
import { StatsWidget } from './components/statswidget';
import { RecentSalesWidget } from './components/recentsaleswidget';
import { BestSellingWidget } from './components/bestsellingwidget';
import { RevenueStreamWidget } from './components/revenuestreamwidget';

@Component({
    selector: 'app-dashboard',
    imports: [StatsWidget, RecentSalesWidget, BestSellingWidget, RevenueStreamWidget, NotificationsWidget],
    template: `

<div class="grid grid-cols-12 gap-8 dashboard-container">
    <!-- Revenue Stream Widget (Gráfica) a la izquierda -->
    <div class="col-span-12 xl:col-span-7">
        <app-revenue-stream-widget class="w-full xl:w-auto" />
    <!-- Sección de informacion de becas y proyectos -->
        <app-recent-sales-widget class="w-full"/>
    </div>

    <!-- Stats Widget (Tarjetas) a la derecha -->
    <div class="col-span-12 xl:col-span-5 flex justify-end">
        <app-stats-widget class="w-full xl:w-auto" />
    </div>

<<<<<<< HEAD
    <!-- Sección de ventas rec
    ientes y productos más vendidos -->
=======
    <!--h-->
>>>>>>> 5208918dc350ba47a166aa56b88db40bd0a15075
    <div class="col-span-12 xl:col-span-6">
        <app-best-selling-widget />
    </div>

    <!-- preguntas frecuentes-->
    <div class="col-span-12">
        <app-notifications-widget />
    </div>
</div> `
})
export class Dashboard {}

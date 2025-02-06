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
    <div class="col-span-12 xl:col-span-6">
        <app-revenue-stream-widget class="w-full xl:w-auto" />
    </div>

    <!-- Stats Widget (Tarjetas) a la derecha -->
    <div class="col-span-12 xl:col-span-6 flex justify-end">
        <app-stats-widget class="w-full xl:w-auto" />
    </div>

    <!-- Sección de ventas recientes y productos más vendidos -->
    <div class="col-span-12 xl:col-span-6">
        <app-recent-sales-widget />
        <app-best-selling-widget />
    </div>

    <!-- Notificaciones -->
    <div class="col-span-12 xl:col-span-6">
        <app-notifications-widget />
    </div>
</div>

    `
})
export class Dashboard {}

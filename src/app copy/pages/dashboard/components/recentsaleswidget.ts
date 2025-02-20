import { Component } from '@angular/core';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { Product, ProductService } from '../../service/product.service';

@Component({
    standalone: true,
    selector: 'app-recent-sales-widget',
    imports: [CommonModule, TableModule, ButtonModule, RippleModule],
    template: `
    <div class="card !mb-9">
        <div class="font-semibold text-xl mb-5">Proyectos en Ejecucion</div>
        <p-table [value]="products" [paginator]="true" [rows]="5" responsiveLayout="scroll">
            <ng-template #header>
                <tr>
                    <th>Beca</th>
                    <th pSortableColumn="name">Investigador Principal <p-sortIcon field="name"></p-sortIcon></th>
                    <th pSortableColumn="price">Proyecto <p-sortIcon field="price"></p-sortIcon></th>
                    <th>Tipo de Beca</th>
                </tr>
            </ng-template>
            <ng-template #body let-product>
                <tr>
                    <td style="width: 20%; min-width: 5rem;">{{ product.beca}}</td>
                    <td style="width: 35%; min-width: 7rem;">{{ product.nombre }}</td>
                    <td style="width: 35%; min-width: 8rem;">{{ product.Proyecto}}</td>
                    <td style="width: 15%; min-width: 5rem;">{{ product.monto}}
                    </td>
                </tr>
            </ng-template>
        </p-table>
    </div>`,
    providers: [ProductService]
})
export class RecentSalesWidget {
    products!: Product[];

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService.getProductsSmall().then((data) => (this.products = data));
    }
}

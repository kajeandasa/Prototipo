import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-desembolso',
  standalone: true,
  encapsulation: ViewEncapsulation.None, // 🔴 Deshabilita el aislamiento de estilos
  imports: [
    CommonModule,
    NgFor,
    TableModule,
    ButtonModule,
    CardModule
  ],
  templateUrl: './desembolso.component.html',
  styleUrls: ['./desembolso.component.scss']
})

export class DesembolsoComponent {
  services = [
    { icon: 'bi bi-activity', title: 'Nesciunt Mete', description: 'Provident nihil minus qui consequatur non omnis maiores.', delay: 100, color: 'item-cyan' },
    { icon: 'bi bi-broadcast', title: 'Eosle Commodi', description: 'Ut autem aut autem non a. Sint sint sit facilis.', delay: 200, color: 'item-orange' },
    { icon: 'bi bi-easel', title: 'Ledo Markt', description: 'Ut excepturi voluptatem nisi sed. Quidem fuga consequatur.', delay: 300, color: 'item-teal' },
    { icon: 'bi bi-bounding-box-circles', title: 'Asperiores Commodi', description: 'Non et temporibus minus omnis sed dolor esse consequatur.', delay: 400, color: 'item-red' },
    { icon: 'bi bi-calendar4-week', title: 'Velit Doloremque', description: 'Cumque et suscipit saepe. Est maiores autem enim facilis.', delay: 500, color: 'item-indigo' },
    { icon: 'bi bi-chat-square-text', title: 'Dolori Architecto', description: 'Hic molestias ea quibusdam eos. Fugiat enim doloremque aut.', delay: 600, color: 'item-pink' }
  ];
}

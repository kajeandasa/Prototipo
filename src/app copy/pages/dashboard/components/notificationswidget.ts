import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
// import { MenuModule } from 'primeng/menu';
import { CommonModule } from '@angular/common';


@Component({
    standalone: true,
    selector: 'app-notifications-widget',
    imports: [CommonModule],
    template: `
    <!-- Faq Section -->
    <section class="faq section light-background" id="faq">
      <div class="container">
        <div class="row align-items-start">
          <!-- Columna Izquierda -->
          <div class="col-lg-5" data-aos="fade-up">
            <h2 class="faq-title">Tienes Alguna pregunta?</h2>
            <p class="faq-description">
              Maecenas tempus tellus eget condimentum rhoncus sem quam semper.
            </p>
            <div class="faq-arrow d-none d-lg-block" data-aos="fade-up" data-aos-delay="200">
              <svg class="faq-arrow" width="200" height="211" viewBox="0 0 200 211" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M198.804 194.488C189.279 189.596 179.529 185.52 169.407 182.07L169.384 182.049C169.227 181.994 169.07 181.939 168.912 181.884C166.669 181.139 165.906 184.546 167.669 185.615C174.053 189.473 182.761 191.837 189.146 195.695C156.603 195.912 119.781 196.591 91.266 179.049C62.5221 161.368 48.1094 130.695 56.934 98.891C84.5539 98.7247 112.556 84.0176 129.508 62.667C136.396 53.9724 146.193 35.1448 129.773 30.2717C114.292 25.6624 93.7109 41.8875 83.1971 51.3147C70.1109 63.039 59.63 78.433 54.2039 95.0087C52.1221 94.9842 50.0776 94.8683 48.0703 94.6608C30.1803 92.8027 11.2197 83.6338 5.44902 65.1074C-1.88449 41.5699 14.4994 19.0183 27.9202 1.56641C28.6411 0.625793 27.2862 -0.561638 26.5419 0.358501C13.4588 16.4098 -0.221091 34.5242 0.896608 56.5659C1.8218 74.6941 14.221 87.9401 30.4121 94.2058C37.7076 97.0203 45.3454 98.5003 53.0334 98.8449C47.8679 117.532 49.2961 137.487 60.7729 155.283C87.7615 197.081 139.616 201.147 184.786 201.155L174.332 206.827C172.119 208.033 174.345 211.287 176.537 210.105C182.06 207.125 187.582 204.122 193.084 201.144C193.346 201.147 195.161 199.887 195.423 199.868C197.08 198.548 193.084 201.144 195.528 199.81C196.688 199.192 197.846 198.552 199.006 197.935C200.397 197.167 200.007 195.087 198.804 194.488Z" fill="currentColor"></path>
              </svg>
            </div>
          </div>

          <!-- Columna Derecha -->
          <div class="col-lg-7" data-aos="fade-up" data-aos-delay="300">
            <div class="faq-container">
              <div *ngFor="let item of faqItems" class="faq-item" [ngClass]="{'faq-active': item.active}" (click)="toggleItem(item)">
                <p>{{ item.question }}</p>
                <div class="faq-content" *ngIf="item.active">
                  <p>{{ item.answer }}</p>
                </div>
                <i class="faq-toggle bi" [ngClass]="{'bi-chevron-down': item.active, 'bi-chevron-right': !item.active}"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`

    .faq-item { cursor: pointer; margin-bottom: 10px; padding: 10px; border: 1px solid #ddd; border-radius: 5px; }
    .faq-active { font-weight: bold; background-color: #f8f9fa; }
    .faq-content { display: none; padding-top: 5px; }
    .faq-active .faq-content { display: block; }
    .faq-toggle { float: right; transition: transform 0.3s ease-in-out; }
    .faq-active .faq-toggle { transform: rotate(180deg); }

    .faq-title {
      font-size: 2rem;
      font-weight: bold;
      margin-bottom: 10px;
      color: var(--heading-color);
    }

    .faq-description {
      font-size: 1rem;
      color: var(--default-color);
      margin-bottom: 20px;
    }

    .faq-container {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .faq-item {
      background-color: var(--surface-color);
      padding: 15px;
      border-radius: 8px;
      cursor: pointer;
      transition: background 0.3s;
      position: relative;
    }

    .faq-toggle {
      font-size: 1.2rem;
      transition: transform 0.3s;
      position: absolute;
      right: 15px;
      top: 50%;
      transform: translateY(-50%);
    }

    .faq-active .faq-toggle {
      transform: rotate(90deg);
    }
  `]
})
export class NotificationsWidget {
    faqItems = [
        { question: '¿Cómo reinicio mi contraseña?', answer: 'Puedes reiniciar tu contraseña desde la configuración de tu cuenta.', active: false },
        { question: '¿Dónde puedo ver mis notificaciones?', answer: 'Tus notificaciones aparecen en el icono de campana en la parte superior.', active: false },
        { question: 'Dolor sit amet consectetur adipiscing elit pellentesque?', answer: 'Eleifend mi in nulla posuere sollicitudin...', active: false },
        { question: 'Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?', answer: 'Dolor sit amet consectetur adipiscing elit...', active: false },
        { question: 'Tempus quam pellentesque nec nam aliquam sem et tortor?', answer: 'Molestie a iaculis at erat pellentesque adipiscing...', active: false },
        { question: 'Perspiciatis quod quo quos nulla quo illum ullam?', answer: 'Enim ea facilis quaerat voluptas quidem...', active: false }
    ];

    toggleItem(item: any) {
     item.active = !item.active;
    }
}


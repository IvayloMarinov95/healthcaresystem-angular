import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';

interface CarouselObjects {
  img: string;
  text: string;
}

@Component({
  selector: 'app-carousel',
  imports: [CarouselModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent {
  items: Array<CarouselObjects> = [
    {
      img: 'assets/bg-4.jpg',
      text: 'Medical excellency every day',
    },
    {
      img: 'assets/bg-3-1.jpg',
      text: 'Exceptional People. Exceptional care.',
    },
    {
      img: 'assets/bg-2-1-1.jpg',
      text: 'Medical services that you can trust',
    },
  ];
}

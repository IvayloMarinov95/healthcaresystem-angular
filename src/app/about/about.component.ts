import { Component } from '@angular/core';
import { TitleComponent } from '../title/title.component';
import { Carousel } from 'primeng/carousel';
import { AccordionMenuComponent } from './accordion-menu/accordion-menu.component';

interface CarouselObjects {
  img: string;
}

@Component({
  selector: 'app-about',
  imports: [TitleComponent, Carousel, AccordionMenuComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  items: Array<CarouselObjects> = [
    { img: 'assets/pic1.jpg' },
    { img: 'assets/pic2.jpg' },
    { img: 'assets/pic3.jpg' },
  ];
}

import { Component } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';

@Component({
  selector: 'app-accordion-menu',
  imports: [AccordionModule],
  templateUrl: './accordion-menu.component.html',
  styleUrl: './accordion-menu.component.scss',
})
export class AccordionMenuComponent {}

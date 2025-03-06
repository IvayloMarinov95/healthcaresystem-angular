import { Component } from '@angular/core';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { InfoComponent } from './info/info.component';

@Component({
  selector: 'app-footer',
  imports: [ContactInfoComponent, InfoComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {}

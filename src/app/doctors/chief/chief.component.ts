import { Component } from '@angular/core';
import { ContactComponent } from '../doctors-contact/doctors-contact.component';

@Component({
  selector: 'app-chief',
  imports: [ContactComponent],
  templateUrl: './chief.component.html',
  styleUrl: './chief.component.scss',
})
export class ChiefComponent {}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-doctors-contact',
  imports: [],
  templateUrl: './doctors-contact.component.html',
  styleUrl: './doctors-contact.component.scss',
})
export class ContactComponent {
  @Input() phone!: string;
  @Input() email!: string;
}

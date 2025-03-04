import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  @Input() icon: any;
  @Input() text!: string;
  @Input() provider?: string;
}

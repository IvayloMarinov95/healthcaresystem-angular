import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-information-box',
  imports: [CommonModule],
  templateUrl: './information-box.component.html',
  styleUrl: './information-box.component.scss',
})
export class InformationBoxComponent {
  @Input() type!: string;
  @Input() service!: string;
  @Input() description?: string;
}

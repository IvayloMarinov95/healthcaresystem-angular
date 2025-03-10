import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-kitchen-sink',
  imports: [CardModule],
  templateUrl: './kitchen-sink.component.html',
  styleUrl: './kitchen-sink.component.scss',
})
export class KitchenSinkComponent {
  @Input() src!: string;
  @Input() title!: string;
  @Input() subtitle!: string;
}

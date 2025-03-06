import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-provided-service',
  imports: [],
  templateUrl: './provided-service.component.html',
  styleUrl: './provided-service.component.scss',
})
export class ProvidedServiceComponent {
  @Input() service!: string;
  @Input() description!: string;
}

import { Component } from '@angular/core';
import { ProvidedServiceComponent } from './provided-service/provided-service.component';

@Component({
  selector: 'app-provided-services',
  imports: [ProvidedServiceComponent],
  templateUrl: './provided-services.component.html',
  styleUrl: './provided-services.component.scss',
})
export class ProvidedServicesComponent {}

import { Component } from '@angular/core';
import { ContactsComponent } from './contacts/contacts.component';
import { InformationBoxesComponent } from './information-boxes/information-boxes.component';
import { InformationComponent } from './information/information.component';
import { ProvidedServicesComponent } from './provided-services/provided-services.component';

@Component({
  selector: 'app-home-page',
  imports: [
    ContactsComponent,
    InformationBoxesComponent,
    InformationComponent,
    ProvidedServicesComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {}

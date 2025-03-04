import { Component } from '@angular/core';
import { ContactsComponent } from './contacts/contacts.component';
import { InformationBoxesComponent } from './information-boxes/information-boxes.component';

@Component({
  selector: 'app-home-page',
  imports: [ContactsComponent, InformationBoxesComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {}

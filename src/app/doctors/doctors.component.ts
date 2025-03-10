import { Component } from '@angular/core';
import { TitleComponent } from '../title/title.component';
import { ChiefComponent } from './chief/chief.component';
import { KitchenSinkComponent } from '../kitchen-sink/kitchen-sink.component';

@Component({
  selector: 'app-doctors',
  imports: [TitleComponent, ChiefComponent, KitchenSinkComponent],
  templateUrl: './doctors.component.html',
  styleUrl: './doctors.component.scss',
})
export class DoctorsComponent {}

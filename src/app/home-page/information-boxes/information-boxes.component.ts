import { Component } from '@angular/core';
import { InformationBoxComponent } from './information-box/information-box.component';
import { OpenningHoursComponent } from './openning-hours/openning-hours.component';

@Component({
  selector: 'app-information-boxes',
  imports: [InformationBoxComponent, OpenningHoursComponent],
  templateUrl: './information-boxes.component.html',
  styleUrl: './information-boxes.component.scss',
})
export class InformationBoxesComponent {}

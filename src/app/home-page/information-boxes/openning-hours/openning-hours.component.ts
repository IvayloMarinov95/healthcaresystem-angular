import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-openning-hours',
  imports: [],
  templateUrl: './openning-hours.component.html',
  styleUrl: './openning-hours.component.scss',
})
export class OpenningHoursComponent {
  @Input() service!: string;
}

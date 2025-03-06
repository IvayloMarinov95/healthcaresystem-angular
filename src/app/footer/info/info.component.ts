import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info',
  imports: [],
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss',
})
export class InfoComponent {
  @Input() header!: string;
  @Input() item1!: string;
  @Input() item2!: string;
  @Input() item3!: string;
  @Input() item4!: string;
}

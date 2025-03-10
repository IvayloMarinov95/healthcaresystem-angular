import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-department',
  imports: [],
  templateUrl: './department.component.html',
  styleUrl: './department.component.scss',
})
export class DepartmentComponent {
  @Input() image!: string;
  @Input() header!: string;
  @Input() text!: string;
}

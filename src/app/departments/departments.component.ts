import { Component } from '@angular/core';
import { DepartmentInfoComponent } from './department-info/department-info.component';
import { OpenningHoursComponent } from '../home-page/information-boxes/openning-hours/openning-hours.component';
import { DepartmentComponent } from './department/department.component';

@Component({
  selector: 'app-departments',
  imports: [
    DepartmentInfoComponent,
    OpenningHoursComponent,
    DepartmentComponent,
  ],
  templateUrl: './departments.component.html',
  styleUrl: './departments.component.scss',
})
export class DepartmentsComponent {}

import { Component } from '@angular/core';
import { TitleComponent } from '../title/title.component';
import { ChiefComponent } from './chief/chief.component';
import { KitchenSinkComponent } from '../kitchen-sink/kitchen-sink.component';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

interface DoctorObject {
  src: string;
  title: string;
  subtitle: string;
}

@Component({
  selector: 'app-doctors',
  imports: [
    TitleComponent,
    ChiefComponent,
    KitchenSinkComponent,
    NgFor,
    CommonModule,
    FormsModule,
    InputTextModule,
  ],
  templateUrl: './doctors.component.html',
  styleUrl: './doctors.component.scss',
})
export class DoctorsComponent {
  searchInput!: string;
  searchFilter?: Array<DoctorObject>;
  doctors: Array<DoctorObject> = [
    {
      src: 'assets/julia.jpg',
      title: 'Dr. Julia',
      subtitle: 'Pediater',
    },
    {
      src: 'assets/michael.jpg',
      title: 'Dr. Michael',
      subtitle: 'Ortoped',
    },
    {
      src: 'assets/amy.jpg',
      title: 'Dr. Amy',
      subtitle: 'Gynecologist',
    },
  ];

  constructor() {
    this.searchFilter = this.doctors;
  }

  change(event: any) {
    if (!event.target.value) {
      this.searchFilter = this.doctors;
    }
    if (event.target.value !== '') {
      this.searchFilter = this.doctors?.filter((doctor) =>
        doctor.title.includes(event.target.value)
      );
    }
  }
}

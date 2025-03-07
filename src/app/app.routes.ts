import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  // {
  //   path: 'departments',
  //   component: Departments,
  // },
  // {
  //   path: 'doctors',
  //   component: Doctors,
  // },
];

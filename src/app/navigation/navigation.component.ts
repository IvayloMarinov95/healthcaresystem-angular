import { Component } from '@angular/core';
import { DesktopNavigationComponent } from './desktop-navigation/desktop-navigation.component';

@Component({
  selector: 'app-navigation',
  imports: [DesktopNavigationComponent],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {}

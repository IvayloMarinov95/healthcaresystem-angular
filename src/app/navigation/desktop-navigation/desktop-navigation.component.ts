import { CommonModule } from '@angular/common';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';

@Component({
  selector: 'app-desktop-navigation',
  imports: [CommonModule, CarouselComponent, RouterLink, RouterLinkActive],
  templateUrl: './desktop-navigation.component.html',
  styleUrl: './desktop-navigation.component.scss',
})
export class DesktopNavigationComponent implements OnInit, OnDestroy {
  @HostListener('scroll', ['$event'])
  scrolled: boolean = false;
  resized: boolean = false;
  pathname: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.pathname = this.router.url;
    window.addEventListener('scroll', () => this.handleScroll());
    window.addEventListener('resize', () => this.handleMobile);
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleMobile);
  }

  handleScroll() {
    if (window.scrollY > 100) {
      this.scrolled = true;
    } else {
      this.scrolled = false;
    }
  }

  handleMobile() {
    if (window.innerWidth < 769) {
      this.resized = true;
    } else {
      this.resized = false;
    }
  }
}

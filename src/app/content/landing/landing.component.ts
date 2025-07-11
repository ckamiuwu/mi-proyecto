import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  standalone: true
})
export class LandingComponent {

  private router = inject(Router);

  constructor() {}

  irAHome(): void {
    this.router.navigate(['/home']);
  }
}


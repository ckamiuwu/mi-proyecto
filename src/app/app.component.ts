import { Component, inject, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { NavbarComponent } from './content/navbar/navbar.component';
import {filter} from 'rxjs';
import { FooterComponent } from "./content/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterModule, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private router = inject(Router);
  showNav: boolean = true;
  title = 'portafolio';

  ngOnInit(): void {
    /*Detecta cualquier cambio en la url*/
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        const currentUrl = event.urlAfterRedirects;
        this.showNav = true;
        if (currentUrl === '/landing') {
          this.showNav = false;
        }
      });
    /*Detecta cualquier cambio en la url*/

  }
}

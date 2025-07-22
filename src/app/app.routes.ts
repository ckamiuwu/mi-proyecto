import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './content/landing/landing.component';
import { HomeComponent } from './content/home/home.component';
import { BrandingComponent } from './content/branding/branding.component';
import { SocialMediaComponent } from './content/social-media/social-media.component';
import { DisenoUiComponent } from './content/diseno-ui/diseno-ui.component';
import { LogofolioComponent } from './content/logofolio/logofolio.component';

export const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: 'landing', component: LandingComponent },
  { path: 'home', component: HomeComponent },
  { path: 'branding', component: BrandingComponent },
  { path: 'social-media', component: SocialMediaComponent },
  { path: 'diseno-ui', component: DisenoUiComponent},
  { path: 'logofolio', component: LogofolioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

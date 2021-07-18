import { Routes, RouterModule } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
import { WorksComponent } from './components/works/works.component';
import { HomeComponent } from './components/home/home.component';

//Array de rutas
const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'works', component: WorksComponent},
  {path: 'about-me', component: AboutMeComponent},
  {path: '**', component: ErrorComponent}
];

export const appRoutingProviders: any[] = [];
export const routing = RouterModule.forRoot(appRoutes, {
    initialNavigation: 'enabled'
});

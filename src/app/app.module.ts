import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { routing, appRoutingProviders } from './app.routing';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ContactComponent } from './components/contact/contact.component';
import { WorksComponent } from './components/works/works.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule, NgbProgressbar } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    ContactComponent,
    WorksComponent,
    ErrorComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    BrowserAnimationsModule,
    MatButtonModule,
    NgbModule,
    MaterialModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [
    AppComponent,
    NgbProgressbar
  ]
})
export class AppModule { }

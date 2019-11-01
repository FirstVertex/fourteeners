import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MountainListComponent } from './components/mountain-list/mountain-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MountainMapComponent } from './components/mountain-map/mountain-map.component';
import { MountainPhotoComponent } from './components/mountain-photo/mountain-photo.component';

@NgModule({
  declarations: [
    AppComponent,
    MountainListComponent,
    DashboardComponent,
    MountainMapComponent,
    MountainPhotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

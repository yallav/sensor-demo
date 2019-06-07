import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SensorComponent } from './sensor/sensor.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule } from '@angular/router';
import { GprComponent } from './gpr/gpr.component';
import { GprModule } from './gpr/gpr.module';
import { SeismicComponent } from './seismic/seismic.component';
import { SeismicModule } from './seismic/seismic.module';
import { AllsensorsComponent } from './allsensors/allsensors.component';
import { AllsensorsModule } from './allsensors/allsensors.module';
import { HomeComponent } from './home/home.component';
import { SensorModule } from './sensor/sensor.module';
import { HomeModule } from './home/home.module';

export const ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'gpr', component: GprComponent },
  { path: 'seismic', component: SeismicComponent},
  { path: 'allsensors', component: AllsensorsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    NgbModule,
    HomeModule,
    SensorModule,
    GprModule,
    SeismicModule,
    AllsensorsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

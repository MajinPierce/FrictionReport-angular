import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SendexValueComponent } from './components/sendex-value/sendex-value.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MapComponent } from './pages/map/map.component';
import { WeeklyGraphComponent } from './components/weekly-graph/weekly-graph.component';
import { HourlyGraphComponent } from './components/hourly-graph/hourly-graph.component';
import { WeeklyForecastComponent } from './components/weekly-forecast/weekly-forecast.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';


import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MapComponent,
    SidebarComponent,
    SendexValueComponent,
    WeeklyGraphComponent,
    HourlyGraphComponent,
    WeeklyForecastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatExpansionModule,
    HttpClientModule,
    MatIconModule,
    NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MapComponent } from './pages/map/map.component';

const routes: Routes = [
    { path: 'map', component: MapComponent },
    { path: ':area', component: DashboardComponent},
    { path: '', redirectTo: '/StoneFort', pathMatch: 'full'},
    { path: '**', redirectTo: '/StoneFort' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

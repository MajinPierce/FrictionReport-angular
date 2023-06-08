import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'friction-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{

  weather: any;
  weatherSubscription$: Observable<any> = new Observable();

  constructor(private apiService: ApiService){}

  ngOnInit(){
    this.apiService.getAreaWeather('Leda').subscribe((data: any) => {
      console.log(data);
      this.weather = data;
    });
  }

  getData(){

  }
}

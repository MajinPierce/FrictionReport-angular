import { Component } from '@angular/core';
import { AreaData } from 'src/app/models/area-data.model';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'friction-weekly-forecast',
  templateUrl: './weekly-forecast.component.html',
  styleUrls: ['./weekly-forecast.component.scss']
})
export class WeeklyForecastComponent {

  area!: AreaData;

  constructor(private dashboardService: DashboardService){}

  ngOnInit(){
    this.dashboardService.areaData.subscribe((data: AreaData | null) => {
      if(data){
        this.area = data;
      }
    });
  }
}

import { Component } from '@angular/core';
import { AreaData } from 'src/app/models/area-data.model';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'friction-weekly-graph',
  templateUrl: './weekly-graph.component.html',
  styleUrls: ['./weekly-graph.component.scss']
})
export class WeeklyGraphComponent {

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

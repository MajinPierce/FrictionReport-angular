import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { AreaData } from 'src/app/models/area-data.model';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'friction-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{

  area!: AreaData;
  test: string = "empty";

  constructor(
    private dashboardService: DashboardService,
    private route: ActivatedRoute
  ){}

  ngOnInit(){
    this.route.params.subscribe((params: Params) => {
      this.getArea(params['area']);
    });
    this.dashboardService.areaData.subscribe((data: AreaData | null) => {
      if(data){
        this.area = data;
      }
    });
  }

  getArea(areaName: string){
    this.dashboardService.getAreaData(areaName);
  }
}

import { Component, OnChanges, OnInit } from '@angular/core';

import { AreaData } from 'src/app/models/area-data.model';
import { ngxDataFormat } from 'src/app/models/ngx-data-format.model';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'friction-hourly-graph',
  templateUrl: './hourly-graph.component.html',
  styleUrls: ['./hourly-graph.component.scss']
})
export class HourlyGraphComponent implements OnInit {

  area!: AreaData;
  timeframe: number = 24; // in hours
  hourlySendexValues: Array<ngxDataFormat>;
  reset: Array<ngxDataFormat> = [
    {
      name: "Hourly Sendex",
      series: []
    }
  ];

  //graph options
  xAxis: boolean = true;
  yAxis: boolean = true;
  showXAxisLabel: boolean = true;
  showYAxisLabel: boolean = true;
  xAxisLabel: string = "Time";
  yAxisLabel: string = "Sendex";
  autoScale: boolean = false;
  yScaleMin: number = 20;
  yScaleMax: number = 180;
  showGridLines: boolean = false;

  constructor(private dashboardService: DashboardService){
    this.hourlySendexValues = this.reset.slice();
  }

  ngOnInit(){
    this.dashboardService.areaData.subscribe((data: AreaData | null) => {
      if(data){
        this.area = data;
        this.setHourlySendexValues();
      }
    });
  }

  setHourlySendexValues(): void {
    this.hourlySendexValues = this.reset.slice();
    this.hourlySendexValues[0].series.length = 0;
      let i = 0;
      this.area.hourly.every((hour) => {
        if(i < this.timeframe){
          this.hourlySendexValues[0].series.push({
            "name": new Date(hour.dt * 1000).toLocaleTimeString([],{hour: "2-digit"}),
            "value":  this.dashboardService.calculateHourlySendex(hour)
          });
        } else {
          return false;
        }
        i++;
        return true;
      })
  }
}

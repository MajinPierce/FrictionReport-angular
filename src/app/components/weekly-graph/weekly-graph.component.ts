import { Component, OnInit } from '@angular/core';
import { AreaData } from 'src/app/models/area-data.model';
import { ngxDataFormat } from 'src/app/models/ngx-data-format.model';
import { DashboardService } from 'src/app/services/dashboard.service';
import * as shape from 'd3-shape';
import { LegendPosition } from '@swimlane/ngx-charts';

@Component({
  selector: 'friction-weekly-graph',
  templateUrl: './weekly-graph.component.html',
  styleUrls: ['./weekly-graph.component.scss']
})
export class WeeklyGraphComponent implements OnInit {

  area!: AreaData;
  timeframe: number = 7; // in days
  //array settings
  minTempIndex = 0;
  maxTempIndex = 1;
  humidityIndex = 2;
  dewPointIndex = 3;
  popIndex = 4;
  sendexIndex = 5;
  weeklyValues: Array<ngxDataFormat>;
  reset: Array<ngxDataFormat> = [
    {
      name: "Min Temperature (°F)",
      series: []
    },
    {
      name: "Max Temperature (°F)",
      series: []
    },
    {
      name: "Humidity (%)",
      series: []
    },
    {
      name: "Dew Point (°F)",
      series: []
    },
    {
      name: "Precipitation Chance (%)",
      series: []
    },
    {
      name: "Sendex",
      series: []
    },
  ];

  //graph options
  xAxis: boolean = true;
  yAxis: boolean = true;
  showXAxisLabel: boolean = true;
  showYAxisLabel: boolean = true;
  xAxisLabel: string = "Time";
  yAxisLabel: string = "Values"; //inactive
  //need to hide legend under certain width
  //need to max legend labels full width
  legend: boolean = false;
  autoScale: boolean = false;
  yScaleMin: number = 0;
  yScaleMax: number = 180;
  showGridLines: boolean = false;
  curve = shape.curveCatmullRom;
  legendPosition: LegendPosition = LegendPosition.Right;


  constructor(private dashboardService: DashboardService){
    this.weeklyValues = this.reset.slice();
  }

  ngOnInit(){
    this.dashboardService.areaData.subscribe((data: AreaData | null) => {
      if(data){
        this.area = data;
        this.setWeeklyValues();
      }
    });
  }

  setWeeklyValues(): void {
    this.weeklyValues = this.reset.slice();
    this.weeklyValues.forEach((ngxData) => {
      ngxData.series.length = 0;
    });
    let i = 0;
    this.area.daily.every((day) => {
      if(i < this.timeframe){
        let date = new Date(day.dt * 1000).toLocaleDateString('en-US', {month: "numeric", day: "numeric"});
        this.weeklyValues[this.minTempIndex].series.push({
          "name": date,
          "value": day.temp.min
        });
        this.weeklyValues[this.maxTempIndex].series.push({
          "name": date,
          "value": day.temp.max
        });
        this.weeklyValues[this.humidityIndex].series.push({
          "name": date,
          "value": day.humidity
        });
        this.weeklyValues[this.dewPointIndex].series.push({
          "name": date,
          "value": day.dew_point
        });
        this.weeklyValues[this.popIndex].series.push({
          "name": date,
          "value": (day.pop * 100)
        });
        this.weeklyValues[this.sendexIndex].series.push({
          "name": date,
          "value": this.dashboardService.calculateDailySendex(day)
        });
      } else {
        return false;
      }
      i++;
      return true;
    })
  }
}

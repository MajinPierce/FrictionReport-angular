import { Component, Input, OnInit } from '@angular/core';
import { AreaData } from 'src/app/models/area-data.model';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'friction-sendex-value',
  templateUrl: './sendex-value.component.html',
  styleUrls: ['./sendex-value.component.scss']
})
export class SendexValueComponent implements OnInit {

  @Input() public index: number = 0;
  @Input() public title: string = "";

  area!: AreaData;
  sendexValue: number = 0;

  constructor(private dashboardService: DashboardService){}

  ngOnInit(){
    this.dashboardService.areaData.subscribe((data: AreaData | null) => {
      if(data){
        this.area = data;
        this.sendexValue = this.dashboardService.calculateDailySendex(this.area.daily[this.index]);
      }
    });
  }

}

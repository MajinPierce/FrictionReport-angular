import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { ApiService } from './api.service';
import { AreaData } from 'src/app/models/area-data.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  areaData = new BehaviorSubject<AreaData | null>(null);

  constructor(private apiService: ApiService) {}

  getAreaData(areaName: string){
    this.apiService.getAreaData(areaName).subscribe((data: AreaData) => {
      this.areaData.next(data);
    });
  }

  calculateDailySendex(day: any): number {
    let sendex = Math.round(2 * day.dewPoint + day.humidity - day.temperature.min);
    return sendex;
  }

  calculateHourlySendex(hour: any): number {
    console.log("hour: "+ hour);
    let sendex = Math.round(2 * hour.dewPoint + hour.humidity - hour.temperature);
    return sendex;
  }
}

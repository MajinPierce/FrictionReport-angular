import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { ApiService } from './api.service';
import { AreaData } from 'src/app/models/area-data.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  areaData = new BehaviorSubject<AreaData | null>(null);

  constructor(private apiService: ApiService) { 
    this.apiService.getAreaData('Leda').subscribe((data: AreaData) => {
      this.areaData.next(data);
      console.log(this.areaData.getValue());
    });
  }

  getAreaData(areaName: string){
    this.apiService.getAreaData(areaName).subscribe((data: AreaData) => {
      this.areaData.next(data);
      console.log(this.areaData.getValue());
    });
  }
}

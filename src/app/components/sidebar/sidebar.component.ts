import { Component, OnInit } from '@angular/core';

import { ClimbingArea } from 'src/app/models/climbing-area.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'friction-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit{

  opened: boolean = true;
  climbingAreas: ClimbingArea[] = [];
  states: Array<string> = new Array();

  constructor(private apiService: ApiService){}

  ngOnInit(): void {
    this.apiService.getAreasInit().subscribe(data =>{
      this.climbingAreas = data.sort((a: ClimbingArea ,b: ClimbingArea) => a.name.localeCompare(b.name));
      let set = new Set<string>;
      this.climbingAreas.forEach(area => {
        set.add(area.state);
      });
      this.states = Array.from(set).sort();
    });
  }

  areaByName(index: number, area: ClimbingArea){
    return area.name;
  }
}

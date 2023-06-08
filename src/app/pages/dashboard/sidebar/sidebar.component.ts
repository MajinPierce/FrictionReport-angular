import { Component, OnInit } from '@angular/core';

import { ClimbingArea } from 'src/app/models/climbing-area.model';
import { ClimbingAreaService } from 'src/app/services/climbing-area.service';

@Component({
  selector: 'friction-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit{

  climbingAreas: ClimbingArea[] = [];

  constructor(public climbingAreaService: ClimbingAreaService){}

  ngOnInit(): void {
    this.climbingAreaService.areasSubject$.subscribe(data =>{
      this.climbingAreas = data.sort((a,b) => a.name.localeCompare(b.name));
    })
  }

  areaByName(index: number, area: ClimbingArea){
    return area.name;
  }
}

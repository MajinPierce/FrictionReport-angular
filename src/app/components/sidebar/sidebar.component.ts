import { Component, OnInit } from '@angular/core';
import {BreakpointObserver, BreakpointState} from '@angular/cdk/layout';
import { ClimbingArea } from 'src/app/models/climbing-area.model';
import { ApiService } from 'src/app/services/api.service';
import { MatDrawerContent, MatDrawerMode } from '@angular/material/sidenav';

@Component({
  selector: 'friction-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit{

  opened: boolean = true;
  mode: MatDrawerMode = "side";
  hasBackdrop: boolean = false;
  climbingAreas: ClimbingArea[] = [];
  states: Array<string> = new Array();

  constructor(private apiService: ApiService, private breakpointObserver: BreakpointObserver){}

  ngOnInit(): void {
    this.breakpointObserver
      .observe(['(max-width: 710px)'])
      .subscribe((state: BreakpointState) => {
        console.log(state);
        if (state.matches) {
          this.opened = false;
          this.mode = 'over';
          this.hasBackdrop = true;
        } else {
          this.mode = 'side';
          this.opened = true;
          this.hasBackdrop = false;
        }
        console.log(this.mode);
      });
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

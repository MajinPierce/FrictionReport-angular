import { Injectable, OnInit } from '@angular/core';
import { climbingAreasConfig } from '../data/climbing-areas-config';
import { ClimbingArea } from '../models/climbing-area.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimbingAreaService{
  public climbingAreas: ClimbingArea[] = [];
  public areasSubject$ = new BehaviorSubject(this.climbingAreas);

  constructor(){
    climbingAreasConfig.map(
      area => this.climbingAreas.push(area as ClimbingArea)
    );
    this.areasSubject$.next(this.climbingAreas);
  }

}


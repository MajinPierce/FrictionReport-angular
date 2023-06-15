import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HourlyGraphComponent } from './hourly-graph.component';

describe('HourlyGraphComponent', () => {
  let component: HourlyGraphComponent;
  let fixture: ComponentFixture<HourlyGraphComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HourlyGraphComponent]
    });
    fixture = TestBed.createComponent(HourlyGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

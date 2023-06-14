import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyForecastComponent } from './weekly-forecast.component';

describe('WeeklyForecastComponent', () => {
  let component: WeeklyForecastComponent;
  let fixture: ComponentFixture<WeeklyForecastComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeeklyForecastComponent]
    });
    fixture = TestBed.createComponent(WeeklyForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

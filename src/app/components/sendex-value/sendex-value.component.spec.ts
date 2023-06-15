import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendexValueComponent } from './sendex-value.component';

describe('SendexValueComponent', () => {
  let component: SendexValueComponent;
  let fixture: ComponentFixture<SendexValueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SendexValueComponent]
    });
    fixture = TestBed.createComponent(SendexValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

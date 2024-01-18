import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendexInfoComponent } from './sendex-info.component';

describe('SendexInfoComponent', () => {
  let component: SendexInfoComponent;
  let fixture: ComponentFixture<SendexInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SendexInfoComponent]
    });
    fixture = TestBed.createComponent(SendexInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

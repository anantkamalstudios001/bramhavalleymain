import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicCalenderComponent } from './academic-calender.component';

describe('AcademicCalenderComponent', () => {
  let component: AcademicCalenderComponent;
  let fixture: ComponentFixture<AcademicCalenderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcademicCalenderComponent]
    });
    fixture = TestBed.createComponent(AcademicCalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

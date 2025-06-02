import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicRegulationComponent } from './academic-regulation.component';

describe('AcademicRegulationComponent', () => {
  let component: AcademicRegulationComponent;
  let fixture: ComponentFixture<AcademicRegulationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcademicRegulationComponent]
    });
    fixture = TestBed.createComponent(AcademicRegulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

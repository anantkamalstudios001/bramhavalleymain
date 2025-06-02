import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesOfferedComponent } from './courses-offered.component';

describe('CoursesOfferedComponent', () => {
  let component: CoursesOfferedComponent;
  let fixture: ComponentFixture<CoursesOfferedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesOfferedComponent]
    });
    fixture = TestBed.createComponent(CoursesOfferedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

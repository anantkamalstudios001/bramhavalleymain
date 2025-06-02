import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicsOverviewComponent } from './academics-overview.component';

describe('AcademicsOverviewComponent', () => {
  let component: AcademicsOverviewComponent;
  let fixture: ComponentFixture<AcademicsOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcademicsOverviewComponent]
    });
    fixture = TestBed.createComponent(AcademicsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

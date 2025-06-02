import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityofficersComponent } from './universityofficers.component';

describe('UniversityofficersComponent', () => {
  let component: UniversityofficersComponent;
  let fixture: ComponentFixture<UniversityofficersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UniversityofficersComponent]
    });
    fixture = TestBed.createComponent(UniversityofficersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

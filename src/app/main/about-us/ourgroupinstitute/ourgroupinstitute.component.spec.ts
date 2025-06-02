import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurgroupinstituteComponent } from './ourgroupinstitute.component';

describe('OurgroupinstituteComponent', () => {
  let component: OurgroupinstituteComponent;
  let fixture: ComponentFixture<OurgroupinstituteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurgroupinstituteComponent]
    });
    fixture = TestBed.createComponent(OurgroupinstituteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

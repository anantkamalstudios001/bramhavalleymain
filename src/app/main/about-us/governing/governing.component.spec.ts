import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoverningComponent } from './governing.component';

describe('GoverningComponent', () => {
  let component: GoverningComponent;
  let fixture: ComponentFixture<GoverningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GoverningComponent]
    });
    fixture = TestBed.createComponent(GoverningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

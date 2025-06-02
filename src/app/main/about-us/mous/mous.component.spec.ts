import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MousComponent } from './mous.component';

describe('MousComponent', () => {
  let component: MousComponent;
  let fixture: ComponentFixture<MousComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MousComponent]
    });
    fixture = TestBed.createComponent(MousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EBrochureComponent } from './e-brochure.component';

describe('EBrochureComponent', () => {
  let component: EBrochureComponent;
  let fixture: ComponentFixture<EBrochureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EBrochureComponent]
    });
    fixture = TestBed.createComponent(EBrochureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

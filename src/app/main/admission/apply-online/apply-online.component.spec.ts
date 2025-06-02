import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyOnlineComponent } from './apply-online.component';

describe('ApplyOnlineComponent', () => {
  let component: ApplyOnlineComponent;
  let fixture: ComponentFixture<ApplyOnlineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplyOnlineComponent]
    });
    fixture = TestBed.createComponent(ApplyOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

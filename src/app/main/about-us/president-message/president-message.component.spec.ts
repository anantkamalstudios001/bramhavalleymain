import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresidentMessageComponent } from './president-message.component';

describe('PresidentMessageComponent', () => {
  let component: PresidentMessageComponent;
  let fixture: ComponentFixture<PresidentMessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PresidentMessageComponent]
    });
    fixture = TestBed.createComponent(PresidentMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

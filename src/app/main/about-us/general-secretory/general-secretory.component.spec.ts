import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralSecretoryComponent } from './general-secretory.component';

describe('GeneralSecretoryComponent', () => {
  let component: GeneralSecretoryComponent;
  let fixture: ComponentFixture<GeneralSecretoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneralSecretoryComponent]
    });
    fixture = TestBed.createComponent(GeneralSecretoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

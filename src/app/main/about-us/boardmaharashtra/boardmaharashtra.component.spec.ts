import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardmaharashtraComponent } from './boardmaharashtra.component';

describe('BoardmaharashtraComponent', () => {
  let component: BoardmaharashtraComponent;
  let fixture: ComponentFixture<BoardmaharashtraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoardmaharashtraComponent]
    });
    fixture = TestBed.createComponent(BoardmaharashtraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

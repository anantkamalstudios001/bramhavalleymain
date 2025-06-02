import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsGalleryComponent } from './events-gallery.component';

describe('EventsGalleryComponent', () => {
  let component: EventsGalleryComponent;
  let fixture: ComponentFixture<EventsGalleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsGalleryComponent]
    });
    fixture = TestBed.createComponent(EventsGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CampusLifeRoutingModule } from './campus-life-routing.module';
import { GalleryComponent } from './gallery/gallery.component';
import { EventsGalleryComponent } from './events-gallery/events-gallery.component';
import { AchievementComponent } from './achievement/achievement.component';
import { SportsComponent } from './sports/sports.component';
import { MediaCoverageComponent } from './media-coverage/media-coverage.component';


@NgModule({
  declarations: [
    GalleryComponent,
    EventsGalleryComponent,
    AchievementComponent,
    SportsComponent,
    MediaCoverageComponent
  ],
  imports: [
    CommonModule,
    CampusLifeRoutingModule
  ]
})
export class CampusLifeModule { }

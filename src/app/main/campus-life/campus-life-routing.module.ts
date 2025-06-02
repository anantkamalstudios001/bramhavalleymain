import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { EventsGalleryComponent } from './events-gallery/events-gallery.component';
import { AchievementComponent } from './achievement/achievement.component';
import { SportsComponent } from './sports/sports.component';
import { MediaCoverageComponent } from './media-coverage/media-coverage.component';

const routes: Routes = [
  {path : 'gallery' , component : GalleryComponent},
  {path : 'eventgallery' , component : EventsGalleryComponent},
  {path : 'achievement' , component : AchievementComponent},
  {path : 'sports' , component : SportsComponent},
  {path : 'media-coverage' , component : MediaCoverageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampusLifeRoutingModule { }

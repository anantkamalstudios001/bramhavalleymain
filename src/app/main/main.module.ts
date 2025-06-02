import { NgModule } from '@angular/core';

import { MainRoutingModule } from './main-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PlacementsComponent } from './placements/placements.component';
import { IqacComponent } from './iqac/iqac.component';


@NgModule({
  declarations: [
  
  
  
    PlacementsComponent,
               IqacComponent
  ],
  imports: [
    MainRoutingModule,
    
  ]
})
export class MainModule { }

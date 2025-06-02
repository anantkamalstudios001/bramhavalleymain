import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcademicsRoutingModule } from './academics-routing.module';
import { AcademicsOverviewComponent } from './academics-overview/academics-overview.component';
import { AcademicCalenderComponent } from './academic-calender/academic-calender.component';
import { ListOfHolidaysComponent } from './list-of-holidays/list-of-holidays.component';
import { AcademicRegulationComponent } from './academic-regulation/academic-regulation.component';


@NgModule({
  declarations: [
    AcademicsOverviewComponent,
    AcademicCalenderComponent,
    ListOfHolidaysComponent,
    AcademicRegulationComponent
  ],
  imports: [
    CommonModule,
    AcademicsRoutingModule
  ]
})
export class AcademicsModule { }

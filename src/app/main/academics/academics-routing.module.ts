import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcademicsOverviewComponent } from './academics-overview/academics-overview.component';
import { AcademicCalenderComponent } from './academic-calender/academic-calender.component';
import { ListOfHolidaysComponent } from './list-of-holidays/list-of-holidays.component';
import { AcademicRegulationComponent } from './academic-regulation/academic-regulation.component';

const routes: Routes = [
  {path : 'academics-overview', component : AcademicsOverviewComponent},
  {path : 'academic-calender', component : AcademicCalenderComponent},
  {path : 'list-of-holidays', component : ListOfHolidaysComponent},
  {path : 'academics-regulation', component : AcademicRegulationComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcademicsRoutingModule { }

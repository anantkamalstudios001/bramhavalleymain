import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { VisionMissionComponent } from './vision-mission/vision-mission.component';
import { PresidentMessageComponent } from './president-message/president-message.component';
import { ChairmanComponent } from './chairman/chairman.component';
import { GeneralSecretoryComponent } from './general-secretory/general-secretory.component';
import { ApprovalsComponent } from './approvals/approvals.component';
import { OurgroupinstituteComponent } from './ourgroupinstitute/ourgroupinstitute.component';
import { GoverningComponent } from './governing/governing.component';
import { BoardmaharashtraComponent } from './boardmaharashtra/boardmaharashtra.component';
import { UniversityofficersComponent } from './universityofficers/universityofficers.component';
import { CommitteesComponent } from './committees/committees.component';
import { MousComponent } from './mous/mous.component';
import { MembershipComponent } from './membership/membership.component';

const routes: Routes = [
  {path : 'about' ,component : AboutUsComponent},
  {path : 'vision-mission' ,component : VisionMissionComponent},
  {path : 'president' ,component : PresidentMessageComponent},
  {path : 'chairman' ,component : ChairmanComponent},
  {path : 'general-secretory' ,component : GeneralSecretoryComponent},
  {path : 'approvals' ,component : ApprovalsComponent},
  {path : 'ourgroupinstitute' ,component : OurgroupinstituteComponent},
  {path : 'governing' ,component : GoverningComponent},
  {path : 'boardmaharashtra' ,component : BoardmaharashtraComponent},
  {path : 'universityofficers' ,component : UniversityofficersComponent},
  {path : 'committees' ,component : CommitteesComponent},
  {path : 'mous' ,component : MousComponent},
  {path : 'membership' ,component : MembershipComponent},  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutUsRoutingModule { }

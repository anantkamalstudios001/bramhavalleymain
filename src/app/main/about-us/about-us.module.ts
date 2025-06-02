import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
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


@NgModule({
  declarations: [
    AboutUsComponent,
    VisionMissionComponent,
    PresidentMessageComponent,
    ChairmanComponent,
    GeneralSecretoryComponent,
    ApprovalsComponent,
    OurgroupinstituteComponent,
    GoverningComponent,
    BoardmaharashtraComponent,
    UniversityofficersComponent,
    CommitteesComponent,
    MousComponent,
    MembershipComponent
  ],
  imports: [
    CommonModule,
    AboutUsRoutingModule
  ]
})
export class AboutUsModule { }

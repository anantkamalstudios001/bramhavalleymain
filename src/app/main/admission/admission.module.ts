import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmissionRoutingModule } from './admission-routing.module';
import { ApplyOnlineComponent } from './apply-online/apply-online.component';
import { CoursesOfferedComponent } from './courses-offered/courses-offered.component';
import { RulesRegulationsComponent } from './rules-regulations/rules-regulations.component';
import { ScholarshipDetailsComponent } from './scholarship-details/scholarship-details.component';
import { EligibilityCriteriaComponent } from './eligibility-criteria/eligibility-criteria.component';
import { DocumentRequiredComponent } from './document-required/document-required.component';
import { FeeStructureComponent } from './fee-structure/fee-structure.component';
import { FaqsComponent } from './faqs/faqs.component';
import { EBrochureComponent } from './e-brochure/e-brochure.component';


@NgModule({
  declarations: [
    ApplyOnlineComponent,
    CoursesOfferedComponent,
    RulesRegulationsComponent,
    ScholarshipDetailsComponent,
    EligibilityCriteriaComponent,
    DocumentRequiredComponent,
    FeeStructureComponent,
    FaqsComponent,
    EBrochureComponent
  ],
  imports: [
    CommonModule,
    AdmissionRoutingModule
  ]
})
export class AdmissionModule { }

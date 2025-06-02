import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyOnlineComponent } from './apply-online/apply-online.component';
import { CoursesOfferedComponent } from './courses-offered/courses-offered.component';
import { RulesRegulationsComponent } from './rules-regulations/rules-regulations.component';
import { ScholarshipDetailsComponent } from './scholarship-details/scholarship-details.component';
import { EligibilityCriteriaComponent } from './eligibility-criteria/eligibility-criteria.component';
import { DocumentRequiredComponent } from './document-required/document-required.component';
import { FeeStructureComponent } from './fee-structure/fee-structure.component';
import { FaqsComponent } from './faqs/faqs.component';
import { EBrochureComponent } from './e-brochure/e-brochure.component';

const routes: Routes = [
  {path : 'apply-online' , component: ApplyOnlineComponent},
  {path : 'courses-offered' , component: CoursesOfferedComponent},
  {path : 'rules-regulations' , component: RulesRegulationsComponent},
  {path : 'scholarship-details' , component: ScholarshipDetailsComponent},
  {path : 'eligibility-criteria' , component: EligibilityCriteriaComponent},
  {path : 'document-required' , component: DocumentRequiredComponent},
  {path : 'fee-structure' , component: FeeStructureComponent},
  {path : 'faqs' , component: FaqsComponent},
  {path : 'e-brochure' , component: EBrochureComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmissionRoutingModule { }

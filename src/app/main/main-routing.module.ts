import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlacementsComponent } from './placements/placements.component';
import { IqacComponent } from './iqac/iqac.component';

const routes: Routes = [
  { path:'',loadChildren : () => import('../main/home/home.module').then(m => m.HomeModule), },
  { path: 'about-us', loadChildren: () => import('../main/about-us/about-us.module').then(m => m.AboutUsModule) },
  { path: 'contact-us', loadChildren: () => import('../main/contact-us/contact-us.module').then(m => m.ContactUsModule), },
  { path: 'blogs', loadChildren: () => import('../main/blogs/blogs.module').then(m => m.BlogsModule), },
  { path: 'academics', loadChildren: () => import('../main/academics/academics.module').then(m => m.AcademicsModule), },
  { path: 'admission', loadChildren: () => import('../main/admission/admission.module').then(m => m.AdmissionModule), },
  { path: 'placements', component : PlacementsComponent },
  { path: 'iqac', component : IqacComponent },
  { path: 'campus-life', loadChildren: () => import('../main/campus-life/campus-life.module').then(m => m.CampusLifeModule), },






  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }

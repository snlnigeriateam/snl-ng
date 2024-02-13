import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { CareersComponent } from './careers/careers.component';
import { ApplyComponent } from './apply/apply.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent, title: 'SNL Nigeria' },
  { path: 'team', component: TeamComponent, title: 'Our Team | SNL Nigeria' },
  { path: 'contact', component: ContactComponent, title: 'Contact Us | SNL Nigeria' },
  { path: 'careers', component: CareersComponent, title: 'Careers | SNL Nigeria' },
  { path: 'careers/:r_id', component: CareersComponent, title: 'Careers | SNL Nigeria' },
  { path: 'careers/:r_id/:p_id', component: ApplyComponent, title: 'Application - Careers | SNL Nigeria' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

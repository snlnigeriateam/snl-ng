import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { CareersComponent } from './careers/careers.component';
import { ApplyComponent } from './apply/apply.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent, title: 'SNL Nigeria' },
  { path: 'team', component: TeamComponent, title: 'Our Team | SNL Nigeria' },
  { path: 'contact', component: ContactComponent, title: 'Contact Us | SNL Nigeria' },
  { path: 'careers', component: CareersComponent, title: 'Careers | SNL Nigeria' },
  { path: 'careers/:r_id', component: CareersComponent, title: 'Careers | SNL Nigeria' },
  { path: 'careers/:r_id/:p_id', component: ApplyComponent, title: 'Application - Careers | SNL Nigeria' },
  { path: '**', component: NotFoundComponent, title: 'Page Not Found | SNL Nigeria' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResumeComponent } from './resume/resume.component';
import { HomeComponent } from './home/home.component';
import { WorksComponent } from './works/works.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'home', component: HomeComponent },
  {path: 'resume', component: ResumeComponent },
  {path: 'works', component: WorksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAcademicYearComponent } from './add-academic-year/add-academic-year.component';
import { AddClassTypeComponent } from './add-class-type/add-class-type.component';
import { AddClassComponent } from './add-class/add-class.component';
import { ViewClassesComponent } from './view-classes/view-classes.component';
import { ViewSectionsComponent } from './view-sections/view-sections.component';
import { AcademicsDashboardComponent } from './academics-dashboard/academics-dashboard.component';
import { AddSectionComponent } from './add-section/add-section.component';

const routes: Routes = [
  { path: 'academics-dashboard', component: AcademicsDashboardComponent},
  { path: 'add-academic-year', component: AddAcademicYearComponent},
  { path: 'add-class-type', component: AddClassTypeComponent},
  { path: 'add-class', component: AddClassComponent},
  { path: 'add-section', component: AddSectionComponent},
  { path: 'view-classes', component: ViewClassesComponent},
  { path: 'view-sections', component: ViewSectionsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcademicsRoutingModule { }

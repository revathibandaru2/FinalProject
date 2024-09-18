import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcademicsRoutingModule } from './academics-routing.module';
import { AddAcademicYearComponent } from './add-academic-year/add-academic-year.component';
import { AddClassTypeComponent } from './add-class-type/add-class-type.component';
import { AddClassComponent } from './add-class/add-class.component';
import { ViewClassesComponent } from './view-classes/view-classes.component';
import { AddSectionComponent } from './add-section/add-section.component';
import { ViewSectionsComponent } from './view-sections/view-sections.component';
import { AcademicsDashboardComponent } from './academics-dashboard/academics-dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


@NgModule({
  declarations: [
    AddAcademicYearComponent,
    AddClassTypeComponent,
    AddClassComponent,
    ViewClassesComponent,
    AddSectionComponent,
    ViewSectionsComponent,
    AcademicsDashboardComponent
  ],
  imports: [
    CommonModule,
    AcademicsRoutingModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot()
  ]
})
export class AcademicsModule { }

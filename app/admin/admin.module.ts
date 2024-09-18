import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AddRoleComponent } from './add-role/add-role.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AssignMenusRoleComponent } from './assign-menus-role/assign-menus-role.component';
import { AssignMenusUserComponent } from './assign-menus-user/assign-menus-user.component';
import { AddMenuItemsComponent } from './add-menu-items/add-menu-items.component';
import { AddModuleComponent } from './add-module/add-module.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MastersDashboardComponent } from './masters-dashboard/masters-dashboard.component';
import { AddNationalityComponent } from './add-nationality/add-nationality.component';
import { AddCasteCategoryComponent } from './add-caste-category/add-caste-category.component';
<<<<<<< HEAD
import { AddEmployeeComponent } from './add-employee/add-employee.component';
=======
import { AddReligionComponent } from './add-religion/add-religion.component';
import { AddBranchComponent } from './add-branch/add-branch.component';
import { AddOrganisationComponent } from './add-organisation/add-organisation.component';
import { HttpClientModule } from '@angular/common/http';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
>>>>>>> 497329842f6fd5516943c8cd8ea2f8d1be87d2cb


@NgModule({
  declarations: [
    AdminDashboardComponent,
    AddRoleComponent,
    AddUserComponent,
    AssignMenusRoleComponent,
    AssignMenusUserComponent,
    AddMenuItemsComponent,
    AddModuleComponent,
    MastersDashboardComponent,
    AddNationalityComponent,
    AddCasteCategoryComponent,
    AddEmployeeComponent
    AddReligionComponent,
    AddBranchComponent,
    AddOrganisationComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BsDatepickerModule.forRoot()
  ]
})
export class AdminModule { }

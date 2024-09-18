import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AddMenuItemsComponent } from './add-menu-items/add-menu-items.component';
import { AddRoleComponent } from './add-role/add-role.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AssignMenusRoleComponent } from './assign-menus-role/assign-menus-role.component';
import { AssignMenusUserComponent } from './assign-menus-user/assign-menus-user.component';
import { AddModuleComponent } from './add-module/add-module.component';
import { MastersDashboardComponent } from './masters-dashboard/masters-dashboard.component';
import { AddNationalityComponent } from './add-nationality/add-nationality.component';
import { AddCasteCategoryComponent } from './add-caste-category/add-caste-category.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AddReligionComponent } from './add-religion/add-religion.component';
import { AddBranchComponent } from './add-branch/add-branch.component';
import { AddOrganisationComponent } from './add-organisation/add-organisation.component';



const routes: Routes = [
  { path: '', component: AdminDashboardComponent },
  { path: 'masters-dashboard', component: MastersDashboardComponent },
  { path: 'add-menu-item', component: AddMenuItemsComponent },
  { path: 'add-role', component: AddRoleComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'assign-menus-role', component: AssignMenusRoleComponent },
  { path: 'assign-menus-user', component: AssignMenusUserComponent },
  { path: 'add-module', component: AddModuleComponent },
  { path: 'add-nationality', component: AddNationalityComponent },
  { path: 'add-caste-category', component: AddCasteCategoryComponent },
  { path: 'add-employee', component: AddEmployeeComponent },
  { path: 'add-religion', component: AddReligionComponent },
  { path: 'add-branch', component: AddBranchComponent },
  { path: 'add-orginsation', component: AddOrganisationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ADMIN_ROUTES } from './routings/admin-routing';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth-helpers/auth.guard';




const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'admin', component: AdminLayoutComponent, children: ADMIN_ROUTES, canActivate: [authGuard] },
  { path: 'academics', component: AdminLayoutComponent, children: ADMIN_ROUTES, canActivate: [authGuard] },
  { path: 'fee-masters', component: AdminLayoutComponent, children: ADMIN_ROUTES, canActivate: [authGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

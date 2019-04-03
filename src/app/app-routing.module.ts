import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './COMPONENTS/registration/registration.component';
//import { RegisterFormComponent } from './COMPONENTS/register-form/register-form.component';
//import { LoginFormComponent } from './COMPONENTS/login-form/login-form.component';

const routes: Routes = [
  { path: 'registration', component: RegistrationComponent },
  {path : '', component : RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SupportComponent } from './support/support.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
  {path:"", redirectTo:"home", pathMatch:'full'},
  {path:"home", component:HomeComponent},
  {path:"about", component:AboutComponent},
  {path:"contact", component:ContactComponent},
  {path:"support", component:SupportComponent},
  {path:"employee", component:EmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

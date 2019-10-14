import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisrationComponent } from './regisration/regisration.component';
import { AdminComponent } from "./admin/admin.component";
import { UserComponent } from './user/user.component';
import { AdCarDetailsComponent } from './ad-car-details/ad-car-details.component';



const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home' , component : HomeComponent},
  {path: 'login' , component : LoginPageComponent},
  {path: 'registration', component: RegisrationComponent},
  {path: 'admin' , component: AdminComponent},
  {path: 'user', component: UserComponent},
  {path: 'add', component:AdCarDetailsComponent},
    ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

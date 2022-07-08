import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { HeaderComponent } from './header/header.component';
const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  { path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent },
  {path: 'home', component: HomeComponent },
  {path: 'e-commerce', component: ECommerceComponent },
  {path:'header',component:HeaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
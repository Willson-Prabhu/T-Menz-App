import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { HeaderComponent } from './header/header.component';
import { BillComponent } from './bill/bill.component';
import { CustomerbillComponent } from './customerbill/customerbill.component';
import { CashondeliveryComponent } from './cashondelivery/cashondelivery.component';
const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  { path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent },
  {path: 'home', component: HomeComponent },
  {path: 'e-commerce', component: ECommerceComponent },
  {path:'header',component:HeaderComponent},
  {path:'bill',component:BillComponent},
  {path:'customerbill',component:CustomerbillComponent},
  {path:'cashondelivery',component:CashondeliveryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
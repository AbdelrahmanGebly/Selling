import { LoginComponent } from './Authentication/auth/components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavAuthComponent } from './Authentication/auth/components/nav-auth/nav-auth.component';
import { AuthComponent } from './Authentication/auth/auth.component';
import { RegisterComponent } from './Authentication/auth/components/register/register.component';
import { BlankComponent } from './Authentication/blank/blank.component';
import { CartComponent } from './Cart/components/cart/cart.component';
import { WhishListComponent } from './Cart/components/whish-list/whish-list.component';
import { AllCategoriesComponent } from './Category/components/all-categories/all-categories.component';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { NotFoundComponent } from './Shared/components/not-found/not-found.component';
import { ForgotPasswordComponent } from './Authentication/auth/components/forgot-password/forgot-password.component';
import { authGuard } from './Authentication/auth.guard';

const routes: Routes = [
  {path:'',component:AuthComponent,children:[
    {path:'',redirectTo:'login',pathMatch:"full"},
    {path:'login',component:LoginComponent,title:"Login"},
    {path:'register',component:RegisterComponent,title:"Register"},
    {path:'forgotPassword',component:ForgotPasswordComponent,title:"Forgot Password"}
  ]},
  {path:'',component:BlankComponent,children:[
    {path:'cart',component:CartComponent,title:"Cart",canActivate:[authGuard]},
    {path:'whishlist',component:WhishListComponent,title:"Whishlist",canActivate:[authGuard]},
    {path:'categories',component:AllCategoriesComponent,title:"All Categories",canActivate:[authGuard]},
    {path:'products',component:AllProductsComponent,title:"All Products",canActivate:[authGuard]},
    {path:'**',component:NotFoundComponent,title:"Error 404"},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ContactComponent } from './Components/contact/contact.component';
import { ProductComponent } from './Components/product/product.component';
import { AppComponent } from './app.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ErroeComponent } from './Components/erroe/erroe.component';
import { AuthGuard } from './service/auth.guard';
import { MobileComponent } from './Components/mobile/mobile.component';
import { TvComponent } from './Components/tv/tv.component';
import { ProductInfoComponent } from './Components/product-info/product-info.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';

const routes: Routes = [
  {path:"", redirectTo:"home", pathMatch:"full"},
  
  
  {path:'home',component:HomeComponent,
children:[
  {path: 'mobile', component: MobileComponent},
  {path: 'tv', component: TvComponent},
]},
  {path:'contact',component:ContactComponent},
  {path:'product', component:ProductComponent},
  {path:'product-details', component:ProductDetailsComponent,  canActivate:[AuthGuard]},
  {path:'product-info', component:ProductInfoComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
{path:'**', component:ErroeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

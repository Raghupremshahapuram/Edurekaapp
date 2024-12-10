import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { ProductComponent } from './Components/product/product.component';
import { ContactComponent } from './Components/contact/contact.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErroeComponent } from './Components/erroe/erroe.component';
import { NavigationComponent } from './Components/navigation/navigation.component';
import { HttpClientModule } from '@angular/common/http';
import { TvComponent } from './Components/tv/tv.component';
import { MobileComponent } from './Components/mobile/mobile.component';
import { ProductInfoComponent } from './Components/product-info/product-info.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    ContactComponent,
    ProductDetailsComponent,
    ErroeComponent,
    NavigationComponent,
    TvComponent,
    MobileComponent,
    ProductInfoComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

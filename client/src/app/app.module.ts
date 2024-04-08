import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module } from 'ng-recaptcha';
import { RecaptchaModule } from 'ng-recaptcha';



//services
import { HttpClientModule } from '@angular/common/http';

 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/shared/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RetCaptchaComponent } from './components/shared/captcha/ret-captcha.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RetCaptchaComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RecaptchaV3Module,
    AppRoutingModule,
    FormsModule,
    RecaptchaModule,
    ReactiveFormsModule

  ],
  providers: [
  
    {
      provide: RECAPTCHA_V3_SITE_KEY,
      useValue: "6LfrtLMpAAAAAAF8K-Sa7H_KFnWX1acuyIgRZTnu",
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//services
import {RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module} from 'ng-recaptcha';

import { HttpClientModule } from '@angular/common/http';
 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/shared/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RetCaptchaComponent } from './components/shared/ret-captcha/ret-captcha.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RetCaptchaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RecaptchaV3Module,
    HttpClientModule
  ],
  providers: [
    {
      provide: RECAPTCHA_V3_SITE_KEY,
      useValue: '6LcLoLMpAAAAAJYkJAvNbOtuWfDHlBbFuAvn5Osr',
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/envrironments';

//Modulos
import {ReactiveFormsModule} from '@angular/forms';
import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module } from 'ng-recaptcha';
import { RecaptchaModule } from 'ng-recaptcha';
import { HttpClientModule } from '@angular/common/http';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {CloudinaryModule} from '@cloudinary/ng';



//Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './components/shared/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RetCaptchaComponent } from './components/shared/captcha/ret-captcha.component';
import { RegisterComponent } from './components/gerente/register/register.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UsersComponent } from './components/gerente/users/users.component';
import { LoadingComponent } from './components/shared/loading/loading.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RetCaptchaComponent,
    RegisterComponent,
    NavbarComponent,
    DashboardComponent,
    UsersComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RecaptchaV3Module,
    AppRoutingModule,
    FormsModule,
    RecaptchaModule,
    ReactiveFormsModule,
    NgxDropzoneModule,
    CloudinaryModule

  ],
  providers: [

    {
      provide: RECAPTCHA_V3_SITE_KEY,
      useValue: environment.key,
    },

    FormsModule,
    NgxDropzoneModule,
    CloudinaryModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

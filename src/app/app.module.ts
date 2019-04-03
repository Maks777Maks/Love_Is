import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterFormComponent } from './COMPONENTS/register-form/register-form.component';
import { LoginFormComponent } from './COMPONENTS/login-form/login-form.component';
import { RegistrationComponent } from './COMPONENTS/registration/registration.component';

import {ReactiveFormsModule} from '@angular/forms';
import { ApiService } from './CORE/api.service';
import { HttpClientModule } from '@angular/common/http';

import { TokenInterceptor } from './CORE/interceptor';



// Components PrimeNG
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {PasswordModule} from 'primeng/password';
import {TabViewModule} from 'primeng/tabview';




@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    RegisterFormComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    InputTextModule,
    ButtonModule,
    PasswordModule,
    TabViewModule
  ],
  providers: [ ApiService, TokenInterceptor],
  bootstrap: [AppComponent]
})
export class AppModule { }

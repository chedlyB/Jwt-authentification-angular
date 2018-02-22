import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { BaseRequestOptions } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthguardGuard } from './authguard.guard';
import { UserService } from './user.service';
import { AuthenticationService } from './authentication.service';
import { RegisterComponent } from './register/register.component';
import { RegisterService } from './register.service';

const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'home',
    canActivate: [AuthguardGuard],
    component: HomeComponent
  },
  { path: '**', redirectTo: '' }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent
  ],
  imports: [
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [
    AuthenticationService,
    UserService,
    AuthguardGuard,
    BaseRequestOptions,
    RegisterService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
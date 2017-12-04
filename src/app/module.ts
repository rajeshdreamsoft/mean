import { routes } from './router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

 /** component */
import { HeaderComponent,FooterComponent } from '../layout/index'; 


import { IndexComponent } from './IndexComponent';
import { LoginComponent } from './LoginComponent';
import{NewUserComponent} from './NewUserComponent';
import { ChangepasswordComponent } from './UserProfile/ChangePasswordComponent';
import{ProfileComponent } from './UserProfile/ProfileComponent';
/** services  */
import { AuthGuard } from './../_guards/index';
import { AuthenticationService, UserService } from '../services/index';
@NgModule({
  declarations: [
    IndexComponent,
    LoginComponent,
    NewUserComponent,
    ProfileComponent , 
    ChangepasswordComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    routes,
    BrowserModule,
    FormsModule,
    HttpModule,
    
  ],
  providers: [ AuthGuard, AuthenticationService, UserService,],
  bootstrap: [IndexComponent]
})
export class AppModule { }

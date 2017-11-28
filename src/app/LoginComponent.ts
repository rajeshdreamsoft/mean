import { Component,OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthenticationService } from '../services/index';
@Component({
  selector: 'app-root',
  templateUrl: './Login.html' 
})
export class LoginComponent implements   OnInit {
 title : 'Login';
 router:any ;
 model: any={};
  ngOnInit(){}
  constructor(_router: Router, private authenticationService: AuthenticationService) {
    this.router=_router;
  }
  Login (){
    this.authenticationService.login(this.model.username, this.model.password)
    .subscribe(result => {
        if (result === true) {
            // login successful
            this.router.navigate(['/']);
        } else {
            // login failed
            this.router.navigate(['/Login',{Id:1, name:this.model.username}]); 
        }
    });
    this.router.navigate(['/Profile',{Id:1, name:this.model.username}]);
  }
}
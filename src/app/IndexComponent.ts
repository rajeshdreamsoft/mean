import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { AuthenticationService } from '../services/index';

@Component({
  selector: 'app-root',
  templateUrl: './Index.html',
  
})
export class IndexComponent {
  title = 'index';
  router;
  constructor(_router: Router, private authenticationService: AuthenticationService) {
    this.router=_router;
  }
  Logout(){
    alert("logout")
    this.authenticationService.logout()
    this.router.navigate(['/Login']);
  }
}

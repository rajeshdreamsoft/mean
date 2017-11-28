import { Component,OnInit } from '@angular/core';
import {Router} from '@angular/router';
 
@Component({
  selector: 'app-root',
  templateUrl: './Profile.html' ,
  
})
export class ProfileComponent implements   OnInit {
 title : 'Login';
 router:any ;
 model: any={};
 
  ngOnInit(){ alert();}
  constructor(_router: Router ) {
    
    this.router=_router;
   
  }
   
}
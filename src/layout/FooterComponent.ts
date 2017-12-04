import { Component } from '@angular/core';

@Component({
  selector: 'layout-footer',
  templateUrl: './Footer.html'
})
export class FooterComponent {
  today: number = Date.now();
}

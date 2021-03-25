import { Component, OnInit } from '@angular/core';
import { ValidateService } from './../../services/validate.service';
import { AuthService } from './../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
      private validateService: ValidateService,
      private flashMessage: FlashMessagesService,
      public authService: AuthService,
      private router: Router
  ) { }

  ngOnInit(): void {
  }

  onLogoutClick(){
      this.authService.logout();
      this.flashMessage.show("Logout Successful", {
          cssClass: 'alert-success',
          timeout: 3000});
      this.router.navigate(['/login']);
      return false;
  }

}

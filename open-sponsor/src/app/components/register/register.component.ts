import { Component, OnInit } from '@angular/core';
import { ValidateService } from './../../services/validate.service';
import { AuthService } from './../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    user = new User();


  constructor(
      private validateService: ValidateService,
      private flashMessage: FlashMessagesService,
      private authService: AuthService,
      private router: Router
  ) {
      this.user.lfsponsor = false;
      this.user.sponsoring = false;
      this.user.sponsor = undefined;
      this.user.sponsee = [{}];
      this.user.bio = '';
      this.user.status = 'offline';
    }

  ngOnInit(): void {
  }

  onRegisterSubmit(){
      //Required Fields
      if(!this.validateService.validateRegister(this.user)){
          this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
          return false;
      }

      if(!this.validateService.validateEmail(this.user.email)){
          this.flashMessage.show('Please enter a valid email', {cssClass: 'alert-danger', timeout: 3000});
          return false;
      }

      // Register User
      this.authService.registerUser(this.user).subscribe((data: any) => {
          if(data.success){
              this.flashMessage.show('You are now registered and can log in', {cssClass: 'alert-success', timeout: 3000});
              this.router.navigate(['/login']);
          } else {
              this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
              this.router.navigate(['/register']);
          }
      });

  }
}

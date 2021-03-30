import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    username: string;
    password: string;

  constructor(
      private authService:AuthService,
      private router:Router,
      private flashMessage:FlashMessagesService
  ) {
      this.username = '';
      this.password = '';
  }

  ngOnInit(): void {
  }

  onLoginSubmit(){
      const user = {
          username: this.username,
          password: this.password
      }

      this.authService.authenticateUser(user).subscribe((data: any) => {
          if(data.success){
              this.authService.storeUserData(data.token, data.user);
              setTimeout(() => {}, 1000);
              this.authService.updateUserOnline().subscribe((data: any) => {
                  if(data.success){
                      console.log(data);
                  } else {
                      console.log(data);
                  }
              });
              this.flashMessage.show("Login Successful", {
                  cssClass: 'alert-success',
                  timeout: 5000});
              this.router.navigate(['/dashboard']);
          } else {
              this.flashMessage.show(data.msg, {
                  cssClass: 'alert-danger',
                  timeout: 5000});
              this.router.navigate(['/login']);
          }
      });
  }
}

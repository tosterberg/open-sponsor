import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { User } from '../../models/user.model';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    user!: User;
    edit: Boolean;

    //inject dependencies
  constructor(
      private authService:AuthService,
      private flashMessage: FlashMessagesService
  ) {
      this.edit = false;
  }

  ngOnInit() {
      /** View the User from db */
       this.authService.getProfile().subscribe((profile: any) => {
           if(profile.user !== null || profile.user !== undefined){
               this.user = profile.user;
           }
       },
        err => {
            console.log(err);
            return false;
        });
  }

  onEdit() {
      this.edit = true;
  }

  onSave() {
      this.authService.updateUser(this.user).subscribe((data: any) => {
          if(data.success){
              this.flashMessage.show('Your account was updated', {cssClass: 'alert-success', timeout: 3000});
          } else {
              this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
          }
      });
      this.edit = false;
  }

  onRemoveSponsor(){}
}

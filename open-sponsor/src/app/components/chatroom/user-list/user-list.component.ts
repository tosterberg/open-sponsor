import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
    user!: any;

  constructor(private authService: AuthService) {
  }

//Needs extended to show everyone currently logged in
  ngOnInit(): void {
      this.authService.getProfile().subscribe((user: any) => {
          if(user.user !== null || user.user !== undefined){
              this.user = user.user;
          }
      },
       err => {
           console.log(err);
           return false;
       });
  }
}

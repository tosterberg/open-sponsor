import { Component, OnInit, OnChanges} from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
    users!: Array<any>;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
      this.getLoggedInUsers();
  }


  ngOnChanges() {
      this.getLoggedInUsers();
  }

  //Needs extended to show everyone currently logged in
  getLoggedInUsers() {
      this.authService.getAllOnlineUsers().subscribe((user: any) => {
          if(user.user !== null){
              this.users = user.users;
          }
      },
       err => {
           console.log(err);
           return false;
       });
  }
}

import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    user!: any;

    //inject dependencies
  constructor(private authService:AuthService) { }

  ngOnInit() {
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

}

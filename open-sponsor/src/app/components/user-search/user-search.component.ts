import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {

    search: any;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  searchSponsor(){
      this.authService.getAllSponsoringUsers().subscribe((search: any) => {
          if(search.users !== null){
              this.search = search.users.slice().reverse();
          }
      },
       err => {
           console.log(err);
           return false;
       });
  }


  searchSponsee(){
      this.authService.getAllSponseeUsers().subscribe((search: any) => {
          if(search.users !== null){
              this.search = search.users.slice().reverse();
          }
      },
       err => {
           console.log(err);
           return false;
       });
  }

}

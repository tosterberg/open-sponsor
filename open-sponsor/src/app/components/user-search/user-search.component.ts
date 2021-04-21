import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {

    search: any;
    searchType: string;

  constructor(private authService: AuthService) {
      this.searchType = 'none';
  }

  ngOnInit(): void {
  }

  searchSponsor(){
      this.searchType = 'sponsor';
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
      this.searchType = 'sponsee';
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

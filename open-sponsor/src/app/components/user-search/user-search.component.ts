import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ConnectService } from '../../services/connect.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {

    user !: any;
    key !: string;
    search: any;
    searchTarget !: string;
    searchType: string;

  constructor(
      private authService: AuthService,
      private connect: ConnectService,
      private flashMessage: FlashMessagesService
  ) {
      this.searchType = 'none';
  }

  ngOnInit(): void {
      this.user = this.authService.getUser();
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

  sponsorRequest(target: any){
      this.searchTarget = target;
      this.key = target._id + " " + this.user._id;
      this.connect.makeSponsorRequest(this.key, target.username).subscribe((res: any) => {
          if(res){
              this.flashMessage.show("Request sent successfully", {
                  cssClass: 'alert-success',
                  timeout: 3000});
          }
      },
      err => {
          console.error(err);
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

  sponseeRequest(target: any){
      this.searchTarget = target;
      this.key = this.user._id + " " + target._id;
      this.connect.makeSponseeRequest(this.key, target.username).subscribe((res: any) => {
          if(res){
              this.flashMessage.show("Request sent successfully", {
                  cssClass: 'alert-success',
                  timeout: 3000});
          }
      },
      err => {
          console.error(err);
          return false;
      });
  }

}

import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ConnectService {
    myUsername: any;
    myRooms: Array<any>;
    connectKeys: any;

  constructor(private auth: AuthService) {
      this.myRooms = [];
      this.myRooms.push('chatroom');
      this.myUsername = this.auth.getMyUsername();
  }

  acceptSponsorRequest(username: string){
      /** Update the local account sponsor & the remote account sponsees */
      this.updateMySponsor(username);
      this.updateTheirSponsees(this.myUsername);
  }

  acceptSponseeRequest(username: string){
      /** Update the local account sponsees & the remote account sponsor */
      this.updateMySponsees(username);
      this.updateTheirSponsor(this.myUsername);
  }

  getMyConnections(){
      /** Create list of "rooms" for communication with connections */
      console.log(this.connectKeys);
  }

  sendSponsorRequest(username: string){
      /** Post request message to remote users requests */
      console.log(username);
  }

  sendSponseeRequest(username: string){
       /** Post request message to remote users requests */
       console.log(username);
  }

  rejectSponsorRequest(){
      /** Delete message and remove connectKeys */
      console.log("Rejecting sponsor request");
  }

  rejectSponseeRequest(){
      /** Delete message and remove connectKeys */
      console.log("Rejecting sponsee request");
  }

  updateMySponsor(username: string){
      console.log(username);
  }

  updateMySponsees(username: string){
      console.log(username);
  }

  updateTheirSponsor(username: string){
      console.log(username);
  }

  updateTheirSponsees(username: string){
      console.log(username);
  }
}

import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Request } from '../models/request.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ConnectService {
    myUsername: any;
    myUser: User;
    myRooms: Array<any>;
    connectKeys: any;
    request: Request;
    url: String = 'http://localhost:3000/';

  constructor(
      private auth: AuthService,
      private http: HttpClient
  ) {
      this.myRooms = [];
      this.myRooms.push({room: 'chatroom', key: 'chatroom'});
      this.myUsername = this.auth.getMyUsername();
      this.myUser = this.auth.getUser();
      this.request = {
          // _id: string,
          // key: string,
          fromUsername: this.myUsername
          // request: string,
          // timestamp: string,
          // datetime: number,
          // connect: boolean

      }
  }

  acceptSponsorRequest(username: string): any{
      /** Update the local account sponsor & the remote account sponsees */
      this.updateMySponsor(username, () => {
          return this.updateTheirSponsees(username);
      });
  }

  acceptSponseeRequest(username: string): any{
      /** Update the local account sponsees & the remote account sponsor */
      this.updateMySponsees(username, () => {
          return this.updateTheirSponsor(username);
      });
  }

  deleteRequest(key: string){
      console.log('removing ', key);
  }

  getMyConnections(): any{
      /** Create list of "rooms" for communication with connections */
      let headers = new HttpHeaders();
      headers = headers.append('Authorization', this.auth.getToken());
      return this.http.get(this.url+'requests/connections/'+this.myUser._id, {headers: headers});
  }

  getMyRequests(){
      let headers = new HttpHeaders();
      headers = headers.append('Authorization', this.auth.getToken());
      return this.http.get(this.url+'requests/myRequests/'+this.myUsername, {headers: headers});
  }

  makeSponsorRequest(key: string, theirUsername: string){
      /** Post request message to remote users requests */
      this.request.key = key;
      this.request.request = 'Do you want to be my sponsor?';
      this.request.toUsername = theirUsername;
      this.request.reqType = 'sponsor';
      return this.sendRequest(this.request);
  }

  makeSponseeRequest(key: string, theirUsername: string){
       /** Post request message to remote users requests */
       this.request.key = key;
       this.request.request = 'Do you want to be my sponsee?';
       this.request.toUsername = theirUsername;
       this.request.reqType = 'sponsee';
       return this.sendRequest(this.request);
  }

  sendRequest(req: Request){
      let headers = new HttpHeaders();
      headers = headers.append('Content-Type', 'application/json');
      return this.http.post(this.url+'requests/connect', req, {headers: headers});
  }

  rejectRequest(req: any){
      /** Delete message and remove connectKeys */
      let headers = new HttpHeaders();
      headers = headers.append('Content-Type', 'application/json');
      this.http.put(this.url+'requests/edit/'+req._id, req, {headers: headers}).subscribe((data: any) => {
          return data;
      });
  }

  updateMySponsor(username: string, callback: any){
      this.auth.setTargetUser(this.myUsername, () => {
          callback(this.auth.updateUserSponsor(username));
      });
  }

  updateMySponsees(username: string, callback: any){
      this.auth.setTargetUser(this.myUsername, () => {
          callback(this.auth.updateUserSponsee(username));
      });
  }

  updateTheirSponsor(username: string){
      this.auth.setTargetUser(username, () => {
          return this.auth.updateUserSponsor(this.myUsername);
      });
  }

  updateTheirSponsees(username: string){
      this.auth.setTargetUser(username, () => {
          return this.auth.updateUserSponsee(this.myUsername);
      });
  }

  updateRequest(req: any){
      let headers = new HttpHeaders();
      headers = headers.append('Content-Type', 'application/json');
      this.http.put(this.url+'requests/edit/'+req._id, req, {headers: headers}).subscribe((data: any) => {
          return data;
      });
  }
}

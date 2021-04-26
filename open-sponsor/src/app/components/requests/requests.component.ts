import { Component, OnInit } from '@angular/core';
import { ConnectService } from '../../services/connect.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {
    requests !: any;

  constructor(private connect: ConnectService) {
      this.connect.getMyRequests().subscribe(data => {
          if(data){
              this.requests = data;
          }
      });
  }

  ngOnInit(): void {
  }

  acceptRequest(req: any){
      if(req.reqType === 'sponsee'){
          this.connect.acceptSponsorRequest(req.fromUsername);
          req.reqType = 'connected';
          this.connect.updateRequest(req);
      } else {
          this.connect.acceptSponseeRequest(req.fromUsername);
          req.reqType = 'connected';
          this.connect.updateRequest(req);
      }
  }

  rejectRequest(req: any){
      req.reqType = 'rejected';
      this.connect.updateRequest(req);
  }

}

import { Component, OnInit } from '@angular/core';
import { ConnectService } from '../../services/connect.service';

@Component({
  selector: 'app-connect-users',
  templateUrl: './connect-users.component.html',
  styleUrls: ['./connect-users.component.css']
})
export class ConnectUsersComponent implements OnInit {

  constructor(private connect: ConnectService) { }

  ngOnInit(): void {
  }
}

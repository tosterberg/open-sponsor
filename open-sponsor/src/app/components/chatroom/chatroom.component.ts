import { Component, OnInit } from '@angular/core';
import { ConnectService } from '../../services/connect.service';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit {

    rooms: Array<string>;

  constructor(private connect: ConnectService) {
      this.rooms = [];
  }

  ngOnInit(): void {
      this.connect.getMyConnections();
  }

}

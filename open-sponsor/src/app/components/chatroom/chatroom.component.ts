import { Component, OnInit } from '@angular/core';
import { ConnectService } from '../../services/connect.service';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit {

    rooms: Array<any>;
    title: string;

  constructor(private connect: ConnectService) {
      this.rooms = [];
      this.rooms.push({room: 'chatroom', key: 'chatroom'});
      this.title = 'chatroom';
  }

  ngOnInit(): void {
      this.connect.getMyConnections().subscribe((data: any) => {
          for (var i in data) {
              this.rooms.push({room: data[i].toUsername + "/" + data[i].fromUsername, key: data[i].key});
          }
      });
  }

  filterMessages(room: any){
      this.title = room.room;
  }

}

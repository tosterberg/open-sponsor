import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../../services/chat.service';


@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.css']
})
export class ChatFormComponent implements OnInit {
    message: string;


  constructor(private chat: ChatService) {
      this.message = '';
  }

  ngOnInit(): void {

  }

  send() {
      this.chat.sendMessage(this.message, 'chatroom');
      this.message = '';
      /** Below forces a window refresh until messaging can be updated with sockets */
      window.location.reload();
  }

  handleSubmit(event: any) {
      if (event.keyCode == 13) {
          this.send();
      } else {return}
  }

}

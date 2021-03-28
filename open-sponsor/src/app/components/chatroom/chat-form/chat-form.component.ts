import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../../services/chat.service';
//import { AuthService } from '../../../services/auth.service';

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
      console.log('send()', this.message);
      this.chat.sendMessage(this.message);
      this.message = '';
  }

  handleSubmit(event: any) {
      if (event.keyCode == 13) {
          this.send();
      } else {return}
  }

}

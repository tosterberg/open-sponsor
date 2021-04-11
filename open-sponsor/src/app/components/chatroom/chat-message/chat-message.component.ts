import { Component, OnInit, Input } from '@angular/core';
//import { ChatService } from '../../../services/chat.service';
import { ChatMessage } from '../../../models/chat-message.model';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.css']
})
export class ChatMessageComponent implements OnInit {

    @Input() chatMessage: ChatMessage;
    username?: string;
    message?: string;
    timestamp?: string;


  constructor() {
      this.chatMessage = {};
      this.chatMessage.message = '';
  }

  ngOnInit(chatMessage = this.chatMessage) {
      this.message = chatMessage.message;
      this.username = chatMessage.username;
      this.timestamp = chatMessage.timestamp;
  }

}

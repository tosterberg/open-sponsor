import { Component, OnInit, Input } from '@angular/core';
//import { ChatService } from '../../../services/chat.service';
//import { AuthService } from '../../../services/auth.service';
import { ChatMessage } from '../../../models/chat-message.model';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.css']
})
export class ChatMessageComponent implements OnInit {

    @Input() chatMessage: ChatMessage;
    username?: string;
    messageContent?: string;
    timestamp?: Date = new Date();
    //isOwnMessage: boolean;


  constructor() {
      this.chatMessage = {};
      this.messageContent = '';
      this.username = '';
      this.timestamp = new Date();
  }

  ngOnInit(chatMessage = this.chatMessage) {
      this.messageContent = chatMessage.message;
      this.username = chatMessage.username;
      this.timestamp = chatMessage.timestamp;
  }

}

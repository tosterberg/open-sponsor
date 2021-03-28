import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { ChatMessage } from '../models/chat-message.model';


@Injectable({
  providedIn: 'root'
})
export class ChatService {
    user: any;
    //chatMessages: Observable<ChatMessage[]>;
    chatMessage: ChatMessage = {};
    username: any;

  constructor(private authService: AuthService) {
      this.authService.loadUser();
      //this.chatMessages = [this.chatMessage];
      this.user = this.authService.user;
  }

  sendMessage(msg: string) {
      const timestamp = this.getTimeStamp();
      /*
      this.chatMessages = this.getMessages();

      this.chatMessages.push({
          message: msg,
          timeSent: timestamp,
          username: this.user,
      });
      */
      console.log('sendMessages(msg)', msg, this.authService.user, timestamp);
  }

  getMessages() { //: Observable<ChatMessage[]>
      console.log('getMessages()');
      //query to create our message feed binding
      //return this.chatMessages;
  }

  getTimeStamp() {
        const now = new Date();
        const date = now.getUTCFullYear() + '/' +
            (now.getUTCMonth()+1) + '/' +
            now.getUTCDate();

        const time = now.getUTCHours() + ':' +
            now.getUTCMinutes() + ':' +
            now.getUTCSeconds();

        return (date + ' ' + time);
  }
}

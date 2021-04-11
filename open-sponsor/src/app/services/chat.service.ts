import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { ChatMessage } from '../models/chat-message.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class ChatService {
    user: User;
    chatMessage!: ChatMessage;
    chatMessages: ChatMessage[];
    url: String = 'http://localhost:3000/';

  constructor(private authService: AuthService, private http: HttpClient) {
      this.authService.loadUser();
      this.user = this.authService.user;
      this.chatMessage = new ChatMessage;
      this.chatMessages = [];   //set to load the most recent 25 Messages
  }

  sendMessage(msg: string) {
      const timestamp = this.getTimeStamp();
      const chatMessage = new ChatMessage();
      let headers = new HttpHeaders();

      headers = headers.set('Content-Type', 'application/json');

      chatMessage.timestamp = timestamp;
      chatMessage.username = this.user.username;
      chatMessage.message = msg;
      chatMessage.datetime = Date.now();

      //this.chatMessage.key = [{}]; //replace with all online user id's when available

      return this.http.post(this.url+'messages/chatmessage', JSON.stringify(chatMessage), {headers: headers}).subscribe();
  }

//Testing only for Content-Length param
/*
lengthInUtf8Bytes(str: string) {
  // Matches only the 10.. bytes that are non-initial characters in a multi-byte sequence.
  var m = encodeURIComponent(str).match(/%[89ABab]/g);
  return str.length + (m ? m.length : 0);
}
*/

  getMessages() {
      let headers = new HttpHeaders();
      headers = headers.append('Content-Type', 'application/json');
      return this.http.get(this.url+'messages/chatmessage', {headers: headers});
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

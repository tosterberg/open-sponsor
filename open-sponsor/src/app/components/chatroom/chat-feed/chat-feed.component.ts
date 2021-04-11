import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../../services/chat.service';

@Component({
  selector: 'app-chat-feed',
  templateUrl: './chat-feed.component.html',
  styleUrls: ['./chat-feed.component.css']
})
export class ChatFeedComponent implements OnInit {
    feed: any;

  constructor(private chat: ChatService) { }

  ngOnInit(): void {
      this.chat.getMessages().subscribe((feed: any) => {
          if(feed.messages !== null){
              this.feed = feed.messages.slice().reverse();
          }
      },
       err => {
           console.log(err);
           return false;
       });
  }
}

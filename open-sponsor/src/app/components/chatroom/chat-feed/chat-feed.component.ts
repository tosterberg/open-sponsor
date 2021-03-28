import { Component, OnInit, OnChanges } from '@angular/core';
import { ChatService } from '../../../services/chat.service';
import { ChatMessage } from '../../../models/chat-message.model';

@Component({
  selector: 'app-chat-feed',
  templateUrl: './chat-feed.component.html',
  styleUrls: ['./chat-feed.component.css']
})
export class ChatFeedComponent implements OnInit, OnChanges {
    feed: any;

  constructor(private chat: ChatService) { }

  ngOnInit(): void {
      this.feed = this.chat.getMessages();
  }

  ngOnChanges() {
      this.feed = this.chat.getMessages();
  }

}

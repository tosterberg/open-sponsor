import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../../services/chat.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.css']
})
export class ChatFormComponent implements OnInit {
    message: string;
    user!: any;

  constructor(private chat: ChatService, private authService:AuthService) {
      this.message = '';
  }

  ngOnInit(): void {
      this.authService.getProfile().subscribe((user: any) => {
          if(user.user !== null || user.user !== undefined){
              this.user = user.user;
          }
      },
       err => {
           console.log(err);
           return false;
       });
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

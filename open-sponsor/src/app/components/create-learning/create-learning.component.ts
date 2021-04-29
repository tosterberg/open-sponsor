import { Component, OnInit } from '@angular/core';
import { Learn } from '../../models/learn.model';
import { AuthService } from '../../services/auth.service';
import { LearningService } from '../../services/learning.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-create-learning',
  templateUrl: './create-learning.component.html',
  styleUrls: ['./create-learning.component.css']
})
export class CreateLearningComponent implements OnInit {
    learn = new Learn();

  constructor(
      private auth : AuthService,
      private learningService : LearningService,
      private flashMessage : FlashMessagesService
  ) {
      this.learn.creator = this.auth.getMyUsername();
      this.learn.title =  '';
      this.learn.step =  '';
      this.learn.content =  '';
      this.learn.stepwork =  '';
  }

  ngOnInit(): void {
  }

  onSaveModule() {
      this.learningService.postNewLearning(this.learn).subscribe((data: any) => {
          if(data.success){
              this.flashMessage.show('You published your learning module.', {cssClass: 'alert-success', timeout: 3000});
          } else {
              this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
          }
      });;
  }

}

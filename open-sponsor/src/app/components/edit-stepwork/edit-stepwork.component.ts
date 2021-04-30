import { Component, OnInit } from '@angular/core';
import { LearningService } from './../../services/learning.service';
import { Learn } from '../../models/learn.model';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-stepwork',
  templateUrl: './edit-stepwork.component.html',
  styleUrls: ['./edit-stepwork.component.css']
})
export class EditStepworkComponent implements OnInit {
    username !: any;
    learn !: Learn;

  constructor(
      private learnService: LearningService,
      private flashMessage: FlashMessagesService,
      private router: Router
  ) { }

  ngOnInit(): void {
      this.learn = this.learnService.getStoredLearning();
      if(!this.learn){
          this.learn = new Learn();
      }
  }

  onSaveModule() {
      this.learnService.updateLearning(this.learn).subscribe((data: any) => {
          if(data.success){
              this.flashMessage.show('You saved your stepwork.', {cssClass: 'alert-success', timeout: 3000});
              this.router.navigate(['/stepwork']);
          } else {
              this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
          }
      });;
  }

}

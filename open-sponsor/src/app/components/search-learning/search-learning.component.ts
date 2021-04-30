import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { LearningService } from './../../services/learning.service';
import { User } from '../../models/user.model';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-search-learning',
  templateUrl: './search-learning.component.html',
  styleUrls: ['./search-learning.component.css']
})
export class SearchLearningComponent implements OnInit {
    search: String;
    user = new User();
    learnings!: Array<any>;

  constructor(
      private authService: AuthService,
      private learnService: LearningService,
      private flashMessage: FlashMessagesService
  ) {
      this.user = this.authService.getUser();
      this.search = '';
  }

  ngOnInit(): void {

  }

  onSearch() {
      /** Clear learnings so that new search starts on a fresh screen */
      this.learnings = new Array();
      this.learnService.getSearchLearnings(this.search).subscribe((res: any) => {
          if (res.learnings[0]) {
              this.learnings = res.learnings;
              return true;
          }
      },
      err => {
          console.log(err);
          return false;
      });
  }

  handleSubmit(event: any) {
      // Allows the enter key to be used instead of the click event
      if (event.keyCode == 13) {
          this.onSearch();
      } else {return}
  }

  onSave(index: number) {
      this.learnService.saveLearningToStepwork(this.learnings[index]).subscribe((res: any) => {
          if(res.success){
              this.flashMessage.show('You saved the learning module to your stepwork.', {cssClass: 'alert-success', timeout: 3000});
          } else {
              this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
          }
      });
  }
}

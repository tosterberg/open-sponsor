import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { LearningService } from './../../services/learning.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stepwork',
  templateUrl: './stepwork.component.html',
  styleUrls: ['./stepwork.component.css']
})
export class StepworkComponent implements OnInit {
    username !: any;
    learnings !: Array<any>;

  constructor(
      private authService: AuthService,
      private learnService: LearningService,
      private flashMessage: FlashMessagesService,
      private router: Router
  ) { }

  ngOnInit(): void {
      this.username = this.authService.getMyUsername();
      this.onSearch();
  }

  onSearch() {
    /** Clear books so that new search starts on a fresh screen */
    this.learnService.getMyStepwork(this.username).subscribe((res: any) => {
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

    onEdit(index: number) {
        this.learnService.storeLearningForEdit(this.learnings[index]);
        this.router.navigate(['/editStepwork']);
    }

    onRemove(index: number){
        console.log(this.learnings[index]);
        this.learnService.removeStepwork(this.learnings[index])
        .subscribe((data: any) => {
            if(data.success === false){
                this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
            } else {
                this.flashMessage.show('Stepwork successfully deleted', {cssClass: 'alert-success', timeout: 3000});
                window.location.reload();
            }
        });
    }
}

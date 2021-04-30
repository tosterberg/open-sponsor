import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { LearningService } from './../../services/learning.service';

@Component({
  selector: 'app-my-published-learnings',
  templateUrl: './my-published-learnings.component.html',
  styleUrls: ['./my-published-learnings.component.css']
})
export class MyPublishedLearningsComponent implements OnInit {
    username !: any;
    learnings !: Array<any>;

  constructor(
      private authService: AuthService,
      private learnService: LearningService
  ) {  }

  ngOnInit(): void {
      this.username = this.authService.getMyUsername();
  }

  onSearch() {
    /** Clear books so that new search starts on a fresh screen */
    this.learnService.getMyLearnings(this.username).subscribe((res: any) => {
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
}

}

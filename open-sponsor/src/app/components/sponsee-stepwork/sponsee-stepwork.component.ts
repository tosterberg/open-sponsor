import { Component, OnInit } from '@angular/core';
import { LearningService } from '../../services/learning.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-sponsee-stepwork',
  templateUrl: './sponsee-stepwork.component.html',
  styleUrls: ['./sponsee-stepwork.component.css']
})
export class SponseeStepworkComponent implements OnInit {
    sponsees !: Array<any>;
    learnings !: Array<any>;
    user !: User;

  constructor(
      private authService: AuthService,
      private learnService: LearningService,
      private router: Router
  ) { }

  ngOnInit(): void {
      this.user = this.authService.getUser();
      this.sponsees = this.user.sponsee;
      this.onSearch();
  }

  onSearch() {
    /** Clear books so that new search starts on a fresh screen */
    this.learnService.getSponseeStepwork(this.sponsees).subscribe((res: any) => {
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

  onView(index: number) {
      this.learnService.storeLearningForEdit(this.learnings[index]);
      this.router.navigate(['/viewStepwork']);
  }

}

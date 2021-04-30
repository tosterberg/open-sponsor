import { Component, OnInit } from '@angular/core';
import { Learn } from '../../models/learn.model';
import { LearningService } from '../../services/learning.service';


@Component({
  selector: 'app-view-stepwork',
  templateUrl: './view-stepwork.component.html',
  styleUrls: ['./view-stepwork.component.css']
})
export class ViewStepworkComponent implements OnInit {
    learn !: Learn;

  constructor(
      private learnService: LearningService
  ) { }

  ngOnInit(): void {
      this.learn = this.learnService.getStoredLearning();
  }

}

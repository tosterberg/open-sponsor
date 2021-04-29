import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Learn } from '../models/learn.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LearningService {
    myUsername: any;
    user !: User;
    url: String = 'http://localhost:3000/';

  constructor(
      private auth: AuthService,
      private http: HttpClient
  ) {
        this.myUsername = this.auth.getMyUsername();
        this.user = this.auth.getUser();
      }

      postNewLearning(newLearn: Learn){
          let headers = new HttpHeaders();
          headers = headers.append('Content-Type', 'application/json');
          return this.http.post(this.url+'learnings', newLearn, {headers: headers});
      }
  }

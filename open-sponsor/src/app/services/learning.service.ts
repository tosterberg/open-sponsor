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
    learning !: Learn;
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

      getStoredLearning(): Learn{
          if(!this.learning){
              this.loadStepwork();
          }
          return this.learning;
      }

      getSearchLearnings(query: String) {
          let headers = new HttpHeaders();
          headers = headers.append('Content-Type', 'application/json');
          return this.http.get(this.url+'learnings/search/'+query, {headers: headers});
      }

      storeLearningForEdit(learn: Learn){
          this.learning = learn;
          this.storeUserData(learn);
      }

      saveLearningToStepwork(learn: Learn){
          this.loadUsername();
          learn.username = this.myUsername;
          learn.master = false;
          let headers = new HttpHeaders();
          headers = headers.append('Content-Type', 'application/json');
          return this.http.post(this.url+'learnings', learn, {headers: headers});
      }

      removeStepwork(learn: Learn){
          let headers = new HttpHeaders();
          headers = headers.append('Content-Type', 'application/json');
          return this.http.delete(this.url+'learnings/stepwork/'+learn._id, {headers: headers});
      }

      updateLearning(learn: Learn){
          let headers = new HttpHeaders();
          headers = headers.append('Content-Type', 'application/json');
          return this.http.put(this.url+'learnings/edit', learn, {headers: headers});
      }

      getMyLearnings(creator: any){
          let headers = new HttpHeaders();
          headers = headers.append('Content-Type', 'application/json');
          return this.http.get(this.url+'learnings/'+creator, {headers: headers});
      }

      getMyStepwork(username: any){
          let headers = new HttpHeaders();
          headers = headers.append('Content-Type', 'application/json');
          return this.http.get(this.url+'learnings/stepwork/'+username, {headers: headers});
      }

      getSponseeStepwork(query: any){
          let headers = new HttpHeaders();
          headers = headers.append('Content-Type', 'application/json');
          return this.http.put(this.url+'learnings/sponsees/', query, {headers: headers});
      }

      loadStepwork(){
          const learn = localStorage.getItem('stepwork');
          if(learn != null){
              this.learning = JSON.parse(learn);
          }
      }

      loadUsername(){
          this.myUsername = this.auth.getMyUsername();
      }

      storeUserData(learn: Learn){
          localStorage.setItem('stepwork', JSON.stringify(learn));
          this.learning = learn;
      }
  }

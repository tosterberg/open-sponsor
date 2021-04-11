import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '../models/user.model';


@Injectable()
export class AuthService {
    authToken: any;
    user!: User;
    url: String = 'http://localhost:3000/';

    constructor(private http: HttpClient) {
        this.user = new User();
    }

    registerUser(user: User){
        let headers = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
        return this.http.post(this.url+'users/register', user, {headers: headers});
    }

    authenticateUser(user: User){
        let headers = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
        return this.http.post(this.url+'users/authenticate', user, {headers: headers});
    }

    getProfile(){
        let headers = new HttpHeaders();
        this.loadToken();
        headers = headers.append('Authorization', this.authToken);
        return this.http.get(this.url+'users/profile', {headers: headers});
    }

    getUser(){
        this.loadUser();
        return this.user;
    }

    updateUser(user: User){
        let headers = new HttpHeaders();
        this.loadToken();
        this.storeUserData(this.authToken, user);
        headers = headers.append('Content-Type', 'application/json');
        return this.http.put(this.url+'users/edit/'+user._id, user, {headers: headers});
    }

    updateUserOnline(){
        let headers = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
        return this.http.put(this.url+'users/edit/'+this.user._id, {_id: this.user._id, status: "online"}, {headers: headers});
    }

    updateUserOffline(){
        let headers = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
        return this.http.put(this.url+'users/edit/'+this.user._id, {_id: this.user._id, status: "offline"}, {headers: headers});
    }

    loadToken(){
        const token = localStorage.getItem('id_token');
        this.authToken = token;
    }

    loadUser(){
        const user = localStorage.getItem('user');
        if(user != null){
            this.user = JSON.parse(user);
        }
    }

    loggedIn(){
        const helper = new JwtHelperService();
        this.loadToken();
        const isExpired = helper.isTokenExpired(this.authToken)
        return !isExpired;
    }

    storeUserData(token: any, user: User){
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    }

    logout(){
        setTimeout(() => {}, 1000);
        localStorage.clear();
    }
}

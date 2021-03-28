import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable()
export class AuthService {
    authToken: any;
    user: any;
    url: String = 'http://localhost:3000/';

    constructor(
        private http: HttpClient,
    ) { }

    registerUser(user: any){
        let headers = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
        return this.http.post(this.url+'users/register', user, {headers: headers});
    }

    authenticateUser(user: any){
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

    loadToken(){
        const token = localStorage.getItem('id_token');
        this.authToken = token;
    }

    loggedIn(){
        const helper = new JwtHelperService();
        this.loadToken();
        const isExpired = helper.isTokenExpired(this.authToken)
        return !isExpired;
    }

    storeUserData(token: any, user: any){
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    }

    logout(){
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    }
}

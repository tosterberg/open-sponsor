import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '../models/user.model';


@Injectable()
export class AuthService {
    authToken: any;
    user!: User;
    targetUser!: User;
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

    getToken(){
        return this.authToken;
    }

    getAnotherUsersIdByUsername(username: string){
        let headers = new HttpHeaders();
        this.loadToken();
        headers = headers.append('Content-Type', 'application/json');
        headers = headers.append('Authorization', this.authToken);
        return this.http.get(this.url+'users/'+username, {headers: headers});
    }

    getMyUserId(){
        this.loadUser();
        return this.user._id;
    }

    getMyUsername(){
        this.loadUser();
        return this.user.username;
    }

    getAllOnlineUsers(){
        let headers = new HttpHeaders();
        this.loadToken();
        headers = headers.append('Content-Type', 'application/json');
        headers = headers.append('Authorization', this.authToken);
        return this.http.get(this.url+'users/chatroom/', {headers: headers});
    }

    getAllSponsoringUsers(){
        let headers = new HttpHeaders();
        this.loadToken();
        headers = headers.append('Content-Type', 'application/json');
        headers = headers.append('Authorization', this.authToken);
        return this.http.get(this.url+'users/sponsors/', {headers: headers});
    }

    getAllSponseeUsers(){
        let headers = new HttpHeaders();
        this.loadToken();
        headers = headers.append('Content-Type', 'application/json');
        headers = headers.append('Authorization', this.authToken);
        return this.http.get(this.url+'users/sponsees/', {headers: headers});
    }

    updateUser(user: User){
        let headers = new HttpHeaders();
        this.loadToken();
        this.storeUserData(this.authToken, user);
        headers = headers.append('Content-Type', 'application/json');
        return this.http.put(this.url+'users/edit/'+user._id, user, {headers: headers});
    }

    updateUserSponsor(first: string){
        let tempurl = this.url+'users/edit/'+this.targetUser._id;
        let headers = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
        this.targetUser.sponsor = first;
        this.http.put(tempurl, {_id: this.targetUser._id, sponsor: this.targetUser.sponsor}, {headers: headers}).subscribe((data: any) => {
                return data;
        });
    }

    updateUserSponsee(first: string){
        let tempurl = this.url+'users/edit/'+this.targetUser._id;
        let headers = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
        this.targetUser.sponsee.push({username: first});
        this.http.put(tempurl, {_id: this.targetUser._id, sponsee: this.targetUser.sponsee}, {headers: headers}).subscribe((data: any) => {
            return data;
        });
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

    setTargetUser(username: string, callback: any){
        this.getAnotherUsersIdByUsername(username).subscribe((user: any) => {
            this.targetUser = user.user[0];
            callback(this.targetUser);
        });
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

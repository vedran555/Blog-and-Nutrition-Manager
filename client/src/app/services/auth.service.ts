import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { RequestOptions } from '@angular/http';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {
  //domain = 'http://localhost:8080/';
  domain = '';
  authToken;
  user;
  //username
  options;

  constructor(
    private http: Http
  ) { }

  // Register User
  registerUser(user): Observable<any> {
    return this.http.post(this.domain + 'authentication/register', user)//, {headers: headers})
      .map(res => res.json());
  }

  // Check if E-mail exists in DB already
  checkEmail(email) {
    return this.http.get(this.domain + 'authentication/checkEmail/' + email)
      .map(res => res.json());
  }

  // Check if Username exists in DB already
  checkUsername(username) {
    return this.http.get(this.domain + 'authentication/checkUsername/' + username)
      .map(res => res.json());
  }

  // Store User's data to localStorage
  storeUserData(token, user) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    //localStorage.setItem('username', user.username);
    this.authToken = token;
    this.user = JSON.stringify(user);
  }

  // Login User
  loginUser(user) {
    return this.http.post(this.domain + 'authentication/login', user)//, {headers: headers})
      .map(res => res.json());
  }

  // Load Token
  loadToken() {
    const token = localStorage.getItem('token');
    this.authToken = token;
  }

  // Create Header
  createAuthenticationHeader() {
    this.loadToken();
    this.options = new RequestOptions({
      headers: new Headers({
        'Content-Type': 'application/json',
        'authorization': this.authToken
      })
    });
  }

  // Get Profile
  getProfile() {
    this.createAuthenticationHeader();
    return this.http.get(this.domain + 'authentication/profile', this.options)
      .map(res => res.json());
  }

  // Logout
  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

  // Check if User Has Valid Token
  loggedIn() {
    return tokenNotExpired('token');
  }

  // Get Users That Are Not Approved
  getNotApprovedProfiles() {
    this.createAuthenticationHeader();
    return this.http.get(this.domain + 'authentication/notApprovedProfiles', this.options)
      .map(res => res.json());
  }

  // Approve Registration Request
  approveRequest(id) {
    this.createAuthenticationHeader();
    return this.http.put(this.domain + 'authentication/approveRequest/', id, this.options)
      .map(res => res.json());
  }

  // Delete Request
  deleteRequest(usersId) {
    this.createAuthenticationHeader();
    return this.http.delete(this.domain + 'authentication/deleteRequest/' + usersId, this.options)
      .map(res => res.json());
  }

}
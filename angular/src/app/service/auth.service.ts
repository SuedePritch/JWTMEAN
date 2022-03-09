import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken:any;
  user! : any;

  constructor(
    private http:HttpClient,
    private jwtHelper:JwtHelperService) { }


  registerUser(user:any): Observable<any> {
    let headers = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<any>('users/register', user, headers);
  }


  authenticateUser(user: any){
    let headers = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<any>('users/authenticate', user, headers);
  }



  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = this.user
  }

  getProfile(){
    let headers = new HttpHeaders()
    .append("Content-Type", "application/json")
    .append("Authorization",this.authToken);
    this.loadToken();
    return this.http
      .get<any>(
        'users/profile',
      {headers: headers});
    
  
  }
  

  storeUserData(token:string, user:string){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user))
    this.authToken = token;
    this.user = user;
  }
  
  isLoggedIn(){
    return this.jwtHelper.isTokenExpired();
  }

  logout(){
    this.authToken = null;
    this.user = {};
    localStorage.clear();
  }
};


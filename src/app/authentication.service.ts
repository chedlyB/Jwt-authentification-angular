import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { Constant } from './constant';

@Injectable()
export class AuthenticationService {

  public token: string;

  constructor(private http: Http) { }

  login(username: string, password: string): Observable<boolean> {

    var headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');

    return this.http.post(
      Constant.ApiRoot + Constant.TokenService,
      { Email: username, Password: password },
      { headers: headers })
      .map((response: Response) => {
        //token contient la reponse si non vide donc on a une clé 
        let token = response.json() && response.json().token;
        if (token) {
          
          this.token = token;
          console.log(this.token);
          return true;
        }
        else {
          return false;
        }
      });
  }

  logout(): void {
    this.token = null;
  }

  getUserLoggedIn() {
    if (this.token)
      return true;

    return false;
  }
}
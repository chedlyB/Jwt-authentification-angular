import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { Constant } from './constant';

@Injectable()
export class RegisterService {

  public rep: string;

  constructor(private http: Http) { }

  register(username: string, password: string,confirmpassword: string): Observable<boolean> {

    var headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');

    return this.http.post(
      Constant.ApiRoot + Constant.RegisterService,
      { Email: username, Password: password,ConfirmPassword: confirmpassword },
      { headers: headers })
      .map((response: Response) => {
        
        
        if (response) {
          
          
          console.log(response);
          return true;
        }
        else {
          return false;
        }
      });
  }

 

 
}
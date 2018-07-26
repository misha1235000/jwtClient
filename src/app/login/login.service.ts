// verify.service

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class LoginService {
  private serverUrl = "http://localhost:3000/api/auth";

  /**
   * Injection of the http service.
   * @param http
   */
  constructor(private http: Http){}

  login(email, password): Observable<any> {
     return this.http.post(this.serverUrl + '/login', {'email': email, 'password': password})
            .map((data) => {
                return data.json();
              });
  }

  logout(): Observable<any> {
    return this.http.get(this.serverUrl + '/logout')
           .map((data) => {
              return data.json();
           });
  }

  /*
  verifyCode(code, reqId, appointment, user): Observable<any> {
    return this.http.post(this.serverUrl + '/verify', {'code': code, 'request_id': reqId, 'appointment': appointment, 'user': user})
           .map((res: Response) => {
              return res.json();
           }).catch((error) => {
              return error.json().error;
           });
  }*/

}

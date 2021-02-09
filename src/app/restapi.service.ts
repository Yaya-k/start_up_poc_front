import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  constructor(private http: HttpClient) { }
   login(username: string, password: string): any{
     const body = new URLSearchParams();
     body.set('username', username);
     body.set('password', password);
     const reqHeader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded') ;

     return this.http.post('http://localhost:8080/login', body.toString(), { headers: reqHeader });
           }
   getUserField(username: string, password: string): any{
         const headers = new HttpHeaders({Authorization: 'Basic' + btoa(username + ':' + password)});
         return  this.http.get('http://localhost:8080/isAdmin', {headers, responseType: 'json'});
       }
}

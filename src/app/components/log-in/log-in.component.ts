import {Component, Injectable, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
@Injectable()
export class LogInComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }
  onSubmit(data: any): void{

    const body = new URLSearchParams();
    body.set('username', data.username);
    body.set('password', data.password);
    const reqHeader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded') ;
    this.http.post('http://localhost:8080/login', body.toString(), { headers: reqHeader, observe: 'response'})
      .subscribe(value => {
        this.getUserField(data.username, data.password)
        console.log(value.headers.get('Set-Cookie'));
        this.router.navigate(['/homeUser']);
        }
          );

    }
  getUserField(username: string, password: string): any{
    return  this.http.get('http://localhost:8080/users/hello', ).subscribe(
      value => {console.log(value); }
    );
  }

    ngOnInit(): void {
  }

}

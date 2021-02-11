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
  private idUser!: number;
  private firstName!: string;
  private lastName!: string;
  constructor(private http: HttpClient, private router: Router) { }
  onSubmit(data: any): void{

    const body = new URLSearchParams();
    body.set('username', data.username);
    body.set('password', data.password);
    const reqHeader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded') ;
    this.http.post('http://localhost:8080/login', body.toString(), { headers: reqHeader, withCredentials: true})
      .subscribe(value => {
        this.getUserField();

      }
          );

    }
  getUserField(): any{
    return  this.http.get('http://localhost:8080/hello', {withCredentials: true}).subscribe(

      value => {
        const res = JSON.parse(JSON.stringify(value));
        console.log(res.roleStatus.id);
        if (res.roleStatus.id === 1){
          this.router.navigate(['/homeUser']);
        }
        if (res.roleStatus.id === 2){
          this.router.navigate(['/managerDashboard']);
        }
        if (res.roleStatus.id === 3){
          this.router.navigate(['/adminDashboard']);
        }
        }
    );
  }

    ngOnInit(): void {
  }

}

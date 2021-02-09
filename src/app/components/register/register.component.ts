import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  Roles: any = ['Admin', 'Author', 'Reader'];

  constructor(
    private http: HttpClient
  ) {
  }
  onSubmit(data: any): void{

    const body = new URLSearchParams();
    body.set('username', data.firtName);
    body.set('password', data.lastName);
    body.set('username', data.email);
    body.set('password', data.password);
    const reqHeader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded') ;
    console.log(body.toString());
    this.http.post('http://localhost:8080/users/admin', body.toString(), { headers: reqHeader })
      .subscribe((result => console.log(result))
      );
  }

  ngOnInit(): void {
  }

}

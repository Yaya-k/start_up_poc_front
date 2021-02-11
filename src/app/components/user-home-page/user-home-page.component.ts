import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-home-page',
  templateUrl: './user-home-page.component.html',
  styleUrls: ['./user-home-page.component.css']
})
export class UserHomePageComponent implements OnInit {
  powers = ['Project1', 'Project2',
    'Project2', 'Project2'];

  public nom: string;
  submitted = false;

  constructor(private http: HttpClient, private router: Router) {
    this.nom = ' ';
    this.getUserField();
  }

  ngOnInit(): void {
  }
  getUserField(): any{
    return  this.http.get('http://localhost:8080/hello', {withCredentials: true}).subscribe(

      value => {
        const res = JSON.parse(JSON.stringify(value));
        console.log(res.roleStatus.id);
        this.nom = res.firsname;
        }
    );
  }
  disconect(): any {
    return  this.http.get('http://localhost:8080/logout', {withCredentials: true}).subscribe(value => {
        this.router.navigate(['/login']);
      }
    );
  }
}

import { Component, OnInit } from '@angular/core';
import {map, startWith} from 'rxjs/operators';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
interface Statue {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = ['admin@dev.dev', 'user1@dev.dev', 'user2@dev.dev'];
  optionsUser: string[] = ['user1@dev.dev', 'user2@dev.dev', 'user3@dev.dev'];
  optionsManager: string[] = ['mananger1@dev.dev', 'mananger2@dev.dev', 'mananger3@dev.dev'];

  filteredOptions!: Observable<string[]>;
  filteredOptionsUser!: Observable<string[]>;
  filteredOptionsManager!: Observable<string[]>;
  public show1: boolean ;
  public show2: boolean ;



  statues: Statue[] = [
    {value: '1', viewValue: 'User Simple'},
    {value: '2', viewValue: 'Manager'},
    {value: '3', viewValue: 'Admin'}
  ];

  constructor(private http: HttpClient, private router: Router) {
    this.show1 = true;
    this.show2 = false;
  }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value, this.options))
    );
    this.filteredOptionsUser = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value, this.optionsUser))
    );
    this.filteredOptionsManager = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value, this.optionsManager))
    );
  }
  toggle1(): void {
    this.show1 = !this.show1;
    this.show2 = false;
  }
  toggle2(): void {
    this.show2 = !this.show2;
    this.show1 = false;
  }
  disconect(): any {
    return  this.http.get('http://localhost:8080/logout', {withCredentials: true}).subscribe(value => {
      this.router.navigate(['/login']);
      }
    );
  }
  private _filter(value: string, options: string[]): string[] {
    const filterValue = value.toLowerCase();

    return options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

}

import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
@Component({
  selector: 'app-mananger-dashboard',
  templateUrl: './mananger-dashboard.component.html',
  styleUrls: ['./mananger-dashboard.component.css']
})
export class ManangerDashboardComponent implements OnInit {

  myControl = new FormControl();
  options: string[] = ['admin@dev.dev', 'user1@dev.dev', 'user2@dev.dev'];
  optionsUser: string[] = ['user1@dev.dev', 'user2@dev.dev', 'user3@dev.dev'];
  optionsManager: string[] = ['mananger1@dev.dev', 'mananger2@dev.dev', 'mananger3@dev.dev'];

  filteredOptions!: Observable<string[]>;
  filteredOptionsUser!: Observable<string[]>;
  filteredOptionsManager!: Observable<string[]>;
  public show: boolean ;
  public show1: boolean ;
  public show2: boolean ;
  public show3: boolean ;
  public show4: boolean ;




  constructor() {
    this.show = true;
    this.show1 = false;
    this.show2 = false;
    this.show3 = false;
    this.show4 = false;

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
  toggle(): void {
    this.show = !this.show1;
    this.show1 = false;
    this.show2 = false;
    this.show3 = false;
    this.show4 = false;

  }
  toggle1(): void {

    this.show = false;
    this.show1 = !this.show1;
    this.show2 = false;
    this.show3 = false;
    this.show4 = false;
  }

  toggle2(): void {

    this.show = false;
    this.show1 = false;
    this.show2 = !this.show2;
    this.show3 = false;
    this.show4 = false;
  }
  toggle3(): void {

    this.show = false;
    this.show1 = false;
    this.show2 = false;
    this.show3 = !this.show3;
    this.show4 = false;
  }
  toggle4(): void {

    this.show = false;
    this.show1 = false;
    this.show2 = false;
    this.show3 = false;
    this.show4 = !this.show4;
  }
  private _filter(value: string, options: string[]): string[] {
    const filterValue = value.toLowerCase();

    return options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
}

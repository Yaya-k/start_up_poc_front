import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-home-page',
  templateUrl: './user-home-page.component.html',
  styleUrls: ['./user-home-page.component.css']
})
export class UserHomePageComponent implements OnInit {
  powers = ['Project1', 'Project2',
    'Project2', 'Project2'];


  submitted = false;

  constructor() { }

  ngOnInit(): void {
  }

}

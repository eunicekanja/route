import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users=[
    {
      name:'max',
      id:1,
      title:'dev'
    },
    {
      name:'anne',
      id:2,
      title:'dev'
    },
    {
      name:'joy',
      id:3,
      title:'dev'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

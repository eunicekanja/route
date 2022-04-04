import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersListService {
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
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css',
  templateUrl: './css.component.html',
  styleUrls: ['./css.component.css']
})
export class CssComponent implements OnInit {
  users=[
    {
      id:1,
      name:'max'
    },
    {
      id:2,
      name:'anne'
    },
    {
      id:3,
      name:'chris'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user!: {
    id: number;
    name: string;
    title:string;
  };
  User: any;
  constructor(private activeRoute:ActivatedRoute, private router:Router){ }

  ngOnInit(): void {
    //  this.user={
    //    id:this.activeRoute.snapshot.params['id'],
    //    name:this.activeRoute.snapshot.params['name'],
    //    title:this.activeRoute.snapshot.params['title']
    //  }
     this.activeRoute.paramMap.subscribe(
       (params:Params)=>{
         this.user.id=params['id'],
         this.user.name=params['name'],
         this.user.title=params['title']
        //  this.user={
        //    id:params['id'],
        //    name:params['name'],
        //    title:params['title']
        //  }
         console.log(params)
       }
     ); 
  }
  back(){
    this.router.navigate(['/users'])
  }
}



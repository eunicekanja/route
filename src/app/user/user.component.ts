import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { UsersListService } from '../users-list.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users=this.usersList.users;
  user!: {
    id: number;
    name: string;
    title:string;
  };
  User: any;
  newId!: number;
  count:any=1;
  constructor(private activeRoute:ActivatedRoute, private router:Router,private usersList:UsersListService){ }

  ngOnInit(): void {
      this.user={
        id:Number(this.activeRoute.snapshot.params['id']),
        name:this.activeRoute.snapshot.params['name'],
        title:this.activeRoute.snapshot.params['title']
      }
     this.activeRoute.params.subscribe(
       (params:Params)=>{
         this.user.id=params['id'],
         this.user.name=params['name'],
         this.user.title=params['title']
         console.log(params)
       }
      
     ); 
  }
  back(){
    this.router.navigate(['/users'])
  }
  loadOther(id:any){
    this.router.navigate(['/users',id,'edit'],
    {queryParams:{allowLoading:true},
    fragment:'loading'})
  }
  next(userId:any){
     this.newId=this.count++;
     this.user={
       id:this.newId,
       name:this.users[this.newId].name,
       title:this.users[this.newId].title

     }
  }
  logUsers(){
    console.log(this.usersList.users)
  }
}



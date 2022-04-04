import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CssComponent } from './css/css.component';
import { EditComponent } from './edit/edit.component';
import { HtmlComponent } from './html/html.component';
import { JavaComponent } from './java/java.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path:'java',
    component:JavaComponent
  },
  {
    path:'html',
    component:HtmlComponent
  },
  {
    path:'css',
    component:CssComponent
  },
  {
    path:'users',
    component:UsersComponent
  },

  {
    path:'users/:id/:name/:title',
    component:UserComponent
  },
  {
    path:'users/:id/edit',
    component:EditComponent
  },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

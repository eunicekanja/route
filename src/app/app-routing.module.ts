import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CssComponent } from './css/css.component';
import { HtmlComponent } from './html/html.component';
import { JavaComponent } from './java/java.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

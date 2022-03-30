import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JavaComponent } from './java/java.component';
import { HtmlComponent } from './html/html.component';
import { CssComponent } from './css/css.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
//import { Routes,RouterModule } from '@angular/router';

// const appRoutes:Routes=[
//   {
//     path:'java',
//     component:JavaComponent
//   },
//   {
//     path:'html',
//     component:HtmlComponent
//   },
//   {
//     path:'css',
//     component:CssComponent
//   },
// ]
@NgModule({
  declarations: [
    AppComponent,
    JavaComponent,
    HtmlComponent,
    CssComponent,
    UserComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

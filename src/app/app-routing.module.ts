import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { BrowserModule } from '@angular/platform-browser';
import { UsersService } from './users.service';

const routes:Routes = [
  { path :"users", component:UsersComponent }
]

@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule , RouterModule.forRoot(routes)
  ],
  exports:[ RouterModule],
  providers: [UsersService]
})
export class AppRoutingModule { }

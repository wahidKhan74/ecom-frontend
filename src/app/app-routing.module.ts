import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { BrowserModule } from '@angular/platform-browser';
import { UsersService } from './users.service';
import { CreateUserComponent } from './create-user/create-user.component';
import { DataComponent } from './data/data.component';
import { ConvertSpecialCharPipe } from './convert-special-char.pipe';
import { ProductModule } from './products/product.module';

const routes:Routes = [
  { path :"users", component:UsersComponent },
  { path :"user-create", component:CreateUserComponent },
  { path :"data", component:DataComponent },
  { path : 'products', loadChildren:()=> import('./products/product.module').then(m => m.ProductModule)}
]

@NgModule({
  declarations: [
    UsersComponent,
    ConvertSpecialCharPipe
  ],
  imports: [
    CommonModule , RouterModule.forRoot(routes) ,ProductModule
  ],
  exports:[ RouterModule],
  providers: [UsersService]
})
export class AppRoutingModule { }

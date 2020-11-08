import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public users ;
  public page:number =0;

  constructor(private userSrv : UsersService) { 
    // this.users = userSrv.getUsers();  -> static user data
  }

  // public users = new UsersService().users;
  
  ngOnInit(): void {
    this.userSrv.getUserApi(this.page).subscribe( 
      res => {
        console.log(res);
        this.users=res['data'];
      }, 
      err=>{
        console.log(err);
      });
  }

  getPaginatedUsers(page:number){
    this.page = page;
    if(page > 0){
      this.userSrv.getUserApi(page).subscribe(
        res => {
          console.log(res);
          this.users=res['data'];
        }, 
        err=>{
          console.log(err);
        }
      );
    }
    
  }


}

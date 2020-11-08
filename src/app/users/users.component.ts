import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public users ;

  constructor(private userSrv : UsersService) { 
    this.users = userSrv.getUsers();
  }

  // public users = new UsersService().users;
  
  ngOnInit(): void {
  }

}

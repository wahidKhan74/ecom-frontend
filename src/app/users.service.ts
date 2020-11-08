import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient : HttpClient) { }
  private baseUrl ='https://reqres.in/api/users';

  private users =[
    { name :"John Smith" , age:28 ,gender :"Male", photo:"john.jpeg"},
    { name :"Marry Smith" , age:21 ,gender :"Female", photo:"john.jpeg"},
    { name :"Kelly Smith" , age:23 ,gender :"Male", photo:"john.jpeg"},
    { name :"Tony Stark" , age:50 ,gender :"Male", photo:"john.jpeg"},
    { name :"Will Smith" , age:48 ,gender :"Male", photo:"john.jpeg"},
    { name :"David Killer" , age:78 ,gender :"Male", photo:"david.jpeg"},
  ];

  public getUsers(){
    return this.users;
  }

  public getUserApi(page?:number) {
    return this.httpClient.get(this.baseUrl+'?page='+page);
  }

  public addUser(user:any){
     return this.httpClient.post(this.baseUrl,user);
  }

}

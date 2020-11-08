import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  submitted :boolean = false;
  userForm:FormGroup;
  userResponse:any;

  constructor(private formBuilder:FormBuilder,private userSrv:UsersService) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      name:['',[Validators.required,Validators.minLength(2),Validators.maxLength(15)]],
      job:['',[Validators.required,Validators.minLength(2),Validators.maxLength(15)]],
    })
  }

  resetForm(form:any){
    this.submitted = false;
    form.reset();
  }
  
  hasErrors(field:any){
    return (this.userForm.get(field).invalid && this.userForm.get(field).touched && this.userForm.get(field).errors)
  }

  validateForm(form:any){
    Object.keys(form.controls).forEach( field =>{
      const control = form.get(field);
      if(control instanceof FormControl){
        control.markAsTouched({ onlySelf: true});
      }  else if(control instanceof FormGroup){
        this.validateForm(control);
      }
    })
  }

  submitForm(form:any){
    if(form.valid){
      this.submitted = true;
      this.userSrv.addUser(this.userForm.value).subscribe(
        res=>{ 
          console.log(res);
          this.userResponse = res;
         },
        err=>{ console.log(err); }
      )
    } else{
      this.validateForm(form)
    }
  }

  get name() { return this.userForm.get('name') }
  get job() { return this.userForm.get('job') }


}

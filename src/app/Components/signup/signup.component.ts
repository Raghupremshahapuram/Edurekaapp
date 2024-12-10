import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/model/user-model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent  implements OnInit  {
  public userForm: FormGroup;     
  public userDetails: UserModel;
  public isUserFormSubmitted: boolean;
  constructor( public Userservice:UserService, public formBuilder:FormBuilder, public router:Router){
    this.userForm ={} as FormGroup;
    this.userDetails = {} as UserModel;
    this.isUserFormSubmitted =  false;
  }
  public  ngOnInit(): void {
    this.initializeuserFormwithFormBuilder();
}
public initializeuserFormwithFormBuilder(){
  this.userForm=this.formBuilder.group({
    email:['', [Validators.required, Validators.email]],
    username:['', [Validators.required]],
    phone:['', [Validators.required, Validators.pattern('^[0-9]{10,12}$') ]],
    password:['', [Validators.required]],
   
              disclamer:['', [Validators.requiredTrue]]
  

  });
}

public onSubmit(){
  this.isUserFormSubmitted=true;
  if(this.userForm.status=='VALID'){
      this.userDetails=this.userForm.getRawValue();
      this.Userservice.sendReactiveFormDatafDetails(this.userDetails).subscribe((val:UserModel)=>{
      console.log(val)
    })
    this.router.navigate(['/login']);
  }
  


  }
  get userFormcontorls(){
    return this.userForm.controls
  }
  
}

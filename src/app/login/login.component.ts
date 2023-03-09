import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { from } from 'rxjs';
import{FormGroup,FormControl } from '@angular/forms'
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  errorMessage:string=''
  fireLogin:boolean=false
  loginForm: FormGroup = new FormGroup ({
  
  email: new FormControl("",[Validators.required,Validators.email]),
  password: new FormControl("",[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{3,8}$/)]),
 


  
})
get controlName(){
    return this.loginForm.controls
   }

  constructor(private _auth:AuthService , private _router:Router) {}

  ngOnInit(): void {
  }

login(){
console.log(this.loginForm);
this.fireLogin=true;
this._auth.login(this.loginForm.value).subscribe({

  next:(res:any)=>{
    if(res.message=="success"){
      localStorage.setItem("userToken",res.token)
      this._auth.saveUserData()
    this._router.navigate(['/home'])
    }else{
      this.errorMessage=res.message;
      this.fireLogin=false
    }
    
  },
  error:(error:any)=>{
    this.fireLogin=false;
  },
  complete :()=> {
    
  },
  
})

}


}

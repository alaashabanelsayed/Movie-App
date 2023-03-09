import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { max } from 'rxjs';
import { Auth } from '../auth';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  errorMessage:string=''
  fireRegister:boolean=false
  registerForm: FormGroup = new FormGroup ({
  first_name:new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(10) ]),
  last_name:new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(10) ] ),
  email: new FormControl("",[Validators.required,Validators.email]),
  password: new FormControl("",[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{3,8}$/)]),
  age:new FormControl("",[Validators.required,Validators.min(16), Validators.max(32)]),


  
})
get controlName(){
    return this.registerForm.controls
   }
  
  
  constructor( private _auth:AuthService, private _router:Router) { 



  }

  ngOnInit(): void {
  }


  register(){
    console.log(this.registerForm);
    this.fireRegister=true
    this._auth.register(this.registerForm.value).subscribe({

      next:(res:any)=> { 
        if(res.message=="success")
        { this.errorMessage=''   
         
        this._router.navigate(['/login'])
        
      }
        else{
          this.fireRegister=false

           this.errorMessage=res.message

        }
      },
      error:(error:any)=>console.log(error),

      complete:() => console.log("complete")
      
      
      
      
    })
    
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,BehaviorSubject } from 'rxjs';
import{login, Register,  } from './auth'
import jwt_decode from "jwt-decode";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  
  userData:any=new BehaviorSubject(null);
  constructor(private _httpClient:HttpClient , private _router:Router) {
    if(localStorage.getItem("userToken")!=null){
      this.saveUserData()
    } else{
      this._router.navigate(["/login"])
    }
   }

  saveUserData(){
  let token=localStorage.getItem("userToken")
  let decoded=jwt_decode(JSON.stringify(token))
  console.log(decoded);
  this.userData.next(decoded )
  
  }

register(data:Register):Observable<any>{
  return this._httpClient.post("https://route-egypt-api.herokuapp.com/signup",data)
   
}

login(data:login):Observable <any> {
  return this._httpClient.post("https://route-egypt-api.herokuapp.com/signin",data)
}

logOut(){
  localStorage.removeItem("userToken");
  this.userData.next (null);
  this._router.navigate(["/login"])

}

}

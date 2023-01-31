import { Inject, Injectable } from '@angular/core';
import {Auth, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';


@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor( @Inject(String) private auth:Auth) { }

  registerUser({email, password}:any){
    console.log(email,password)
    return createUserWithEmailAndPassword(this.auth, email,password)
  }

  login({email,password}:any){
    return signInWithEmailAndPassword(this.auth, email, password)
  }

  logout(){
    return signOut(this.auth)
  }
}

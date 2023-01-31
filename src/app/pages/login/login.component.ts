import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formLogin!:FormGroup

  constructor(
    private loginService: LoginService,
    private router:Router,
    ){
      this.formLogin = new FormGroup({
        email: new FormControl(),
        password: new FormControl(),
      })
    }

    onSubmit(){
      this.loginService.login(this.formLogin.value)
        .then(
          res=>{
            console.log(res)
            this.router.navigate(['/home'])
          }
        )
        .catch(
          error=>console.log(error)
        )
    }
}

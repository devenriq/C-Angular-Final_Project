import { Component} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent {
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
      this.loginService.registerUser(this.formLogin.value)
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

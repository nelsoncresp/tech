import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = this.fb.group({
    email:['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  })
  constructor(private fb: FormBuilder, 
    private router: Router
    ){
  }
   get email() {
    return this.loginForm.controls['email'];
   }
   get password() {
    return this.loginForm.controls['password']
   }
   loginUser(){
    const {email, password} = this.loginForm.value;   
   }
   redirectToRegister() {
    this.router.navigate(['register']);
}
}

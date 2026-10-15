import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { email } from '@angular/forms/signals';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { AuthService } from '../../../core/services/auth.service';
import { delay, of, Subject, switchMap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  imports: [ReactiveFormsModule, NgOptimizedImage, CommonModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  // Injecting Form Builder Service
  private fb = inject(FormBuilder)
  private auth = inject(AuthService)
  private router = inject(Router)

  loginError = ''

  loginForm = this.fb.group({
    email: ['',[Validators.required, Validators.email]],
    password: ['',[Validators.required,Validators.minLength(8)]]
  })

  onSubmit():void{
    const{email,password} = this.loginForm.getRawValue()
    const user = this.auth.login(email,password)
    if(!user){
      this.loginError = 'Invalid login credentials'
    }
    // If user is present Re-direct to the dashboard
    this.router.navigate(['/dashboard'])
  }

}

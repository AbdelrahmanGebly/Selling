import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject, takeUntil } from 'rxjs';
import { UserService } from 'src/app/Authentication/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit , OnDestroy{
constructor(
  private _FormBuilder:FormBuilder,
  private _UserService:UserService,
  private _ToastrService:ToastrService,
  private _Router:Router
){}
  ngOnDestroy(): void {
    this.unSubscribe.next();
    this.unSubscribe.complete();
  }
  ngOnInit(): void {
    this.createFormGroup();
  }

// ===============================
loginForm!:FormGroup;
unSubscribe = new Subject<void>();
isPasswordVisible: boolean = true;
inputType: string = 'password';
// ===============================


  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
    this.inputType = this.isPasswordVisible ? 'password' : 'text';
  }

createFormGroup(){
  this.loginForm = this._FormBuilder.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required , Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,20}$/)]]
  })
}

login(){
  if(this.loginForm.valid){
    this._UserService.login(this.loginForm.value).pipe(takeUntil(this.unSubscribe)).subscribe({
      next:(response:any)=>{
        sessionStorage.setItem('userToken',JSON.stringify(response.token));
        this._Router.navigate(['/products'])
      },
      error:(error)=>{
        console.log("the error is => ", error);
        this._ToastrService.error(error.error.message)
      }
    })
  }else this._ToastrService.error("The form is not valid!")
}

}

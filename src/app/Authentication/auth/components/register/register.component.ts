import { ToastrService } from 'ngx-toastr';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { UserService } from 'src/app/Authentication/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy{
  constructor(
    private _FormBuilder:FormBuilder,
    private _UserService:UserService,
    private _ToastrService:ToastrService
  ){}
  ngOnDestroy(): void {
    this.unSubscribe.next();
    this.unSubscribe.complete();
  }
  ngOnInit(): void {
    this.createRegisterForm()
  }

  // ==================================
  registerForm!:FormGroup;
  unSubscribe = new Subject<void>();
  passwordInputType : string = 'password';
  rePasswordInputType : string = 'password';
  isPasswordVisible : boolean = true;
  isRePasswordVisible : boolean = true;
  // ==================================

  createRegisterForm(){
    this.registerForm = this._FormBuilder.group({
      name:['',[Validators.required , Validators.pattern(/^[a-zA-Z 0-9]{4,40}$/)]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required , Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,20}$/)]],
      rePassword:['',[Validators.required , Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,20}$/)]],
      phone:['',[Validators.required , Validators.pattern(/^(02)?(01)[0125][0-9]{8}$/)]]
    })
  }

  register(){
    if(this.registerForm.valid){
      this._UserService.register(this.registerForm.value).pipe(takeUntil(this.unSubscribe)).subscribe({
        next:(response:any)=>{
          this._ToastrService.success("Register Completed Successfully")
          console.log('The response is : => ', response);
        },
        error:(error)=>{
          // to show incorrect passord confirmation error if exist or to show the error in general
          error.error.errors?this._ToastrService.error(error.error.errors.msg):this._ToastrService.error(error.error.message);
        },
      })
    }else console.log("the form is not Valid");
  }

  togglePasswordVisibility(){
    this.isPasswordVisible = !this.isPasswordVisible;
    this.passwordInputType = this.isPasswordVisible?'password':'text';
  }
  toggleRePasswordVisibility(){
    this.isRePasswordVisible = !this.isRePasswordVisible;
    this.rePasswordInputType = this.isRePasswordVisible?'password':'text';
  }
}

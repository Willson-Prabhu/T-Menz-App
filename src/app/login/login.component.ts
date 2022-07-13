import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm!:FormGroup 
   constructor(private formBuilder:FormBuilder,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      fullname:['',Validators.required],
      password:['',Validators.required]
    })
  }
  login(){
    this.http.get<any>(" http://localhost:3000/registeruser")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.fullname === this.loginForm.value.fullname  && a.password === this.loginForm.value.password 
      });
      if(user){
       alert("You have login succesfully!!");
        this.loginForm.reset();
       this.router.navigate(['/bill']);
       
      }else{
        alert("user not found");
      }
    },err=>{
      alert("Something went wrong")
    })
  }
}

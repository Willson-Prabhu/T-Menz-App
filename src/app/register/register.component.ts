import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm !:FormGroup;
  constructor(private formBuilder:FormBuilder,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {

    this.registerForm=this.formBuilder.group({
      fullname:['',Validators.required],
      mobile:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }
  register(){
    this.http.post<any>("http://localhost:3000/registeruser",this.registerForm.value)
    .subscribe(res=>{
      alert("Signup Successfully");
      this.registerForm.reset();
      this.router.navigate(['login']);
    },err=>{
      alert("something went wrong")
    })
  }
}


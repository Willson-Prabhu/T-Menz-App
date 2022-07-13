import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cashondelivery',
  templateUrl: './cashondelivery.component.html',
  styleUrls: ['./cashondelivery.component.css']
})
export class CashondeliveryComponent implements OnInit {
  public cashondeliveryForm !:FormGroup;
  constructor(private formBuilder:FormBuilder,private http:HttpClient,private router:Router) { }



  ngOnInit(): void {
    this.cashondeliveryForm=this.formBuilder.group({
      fullname:['',Validators.required],
      email:['',Validators.required],
      address:['',Validators.required],
      city:['',Validators.required],
      state:['',Validators.required],
      zip:['',Validators.required]
    })
  }
  placeorder(){
    
    this.http.post<any>("http://localhost:3000/cashondelivery",this.cashondeliveryForm.value)
    .subscribe(res=>{
      
      this.router.navigate(['/customerbill']);
    },err=>{
      alert("something went wrong")
    })
  }

}

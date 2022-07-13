import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {
  public billForm !:FormGroup;
  constructor(private formBuilder:FormBuilder,private http:HttpClient,private router:Router) { }


  ngOnInit(): void {
    this.billForm=this.formBuilder.group({
      fullname:['',Validators.required],
      email:['',Validators.required],
      address:['',Validators.required],
      city:['',Validators.required],
      state:['',Validators.required],
      zip:['',Validators.required],
      nameoncard:['',Validators.required],
      creditcardno:['',Validators.required],
      expmonth:['',Validators.required],
      expyear:['',Validators.required],
      cvv:['',Validators.required]
    })
  }
  placeorder(){
    
    this.http.post<any>("http://localhost:3000/bill",this.billForm.value)
    .subscribe(res=>{
      

      this.router.navigate(['/customerbill']);
    },err=>{
      alert("something went wrong")
    })
  }
}

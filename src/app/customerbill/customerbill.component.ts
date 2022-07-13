import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-customerbill',
  templateUrl: './customerbill.component.html',
  styleUrls: ['./customerbill.component.css']
})
export class CustomerbillComponent implements OnInit {

  public products : any = [];
  public grandTotal !: number;
  constructor(private cartService : CartService,private router:Router) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }
  ebill(){
    this.cartService.removeAllCart();
    this.router.navigate(['/home']);
  }
 
}

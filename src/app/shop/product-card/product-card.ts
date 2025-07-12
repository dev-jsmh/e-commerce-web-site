import { Component, input } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard {

  constructor(private router: Router) {

  }

  public product = input<any>();


  public goToDetails() {
    this.router.navigateByUrl('/shop/products/' + this.product().id + '/details');
  }

}
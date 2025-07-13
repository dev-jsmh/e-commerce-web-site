import { Component } from '@angular/core';
import { ProductsService } from '../../services/products/products-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css'
})
export class ProductDetails {

  public productId: string = '';
  public productDetails: any = null;

  constructor(private productsService: ProductsService, private route: ActivatedRoute) {

    this.route.paramMap.subscribe({
      next: (params) => {
        this.productId = params.get('id')!;
        this.productDetails = this.productsService.getById(parseInt(this.productId));

      },
      error: (error) => {
        console.warn('Not possible to retrive product id value from route')
      }
    });

  }
}

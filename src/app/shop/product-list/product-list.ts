import { Component } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { NavbarProductFilterComponent } from '../components/navbar-product-filter-component/navbar-product-filter-component';
import { SearchNavbarComponent } from '../components/search-navbar-component/search-navbar-component';
import { ProductsService } from '../../services/products/products-service';

@Component({
  selector: 'app-product-list',
  imports: [
    ProductCard,
    NavbarProductFilterComponent,
    SearchNavbarComponent
  ],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {

  public products: any[] = [];
  
  constructor(public productsService: ProductsService ){
    this.products = this.productsService.products;
  }

}

import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-shop-index',
  imports: [
    RouterOutlet,
    RouterModule,
  ],
  templateUrl: './shop-index.html',
  styleUrl: './shop-index.css'
})
export class ShopIndex {

}

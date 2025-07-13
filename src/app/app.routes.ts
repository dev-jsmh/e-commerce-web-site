import { Routes } from '@angular/router';
import { ProductDetails } from './shop/product-details/product-details';
import { ShopIndex } from './shop/shop-index/shop-index';
import { NotFoundPage } from './not-found-page/not-found-page';
import { ProductList } from './shop/product-list/product-list';
import { CartComponent } from './shop/cart-component/cart-component';
import { CheckoutComponent } from './shop/checkout-component/checkout-component';

export const routes: Routes = [
    {
        'path': "shop", component: ShopIndex,
        children: [
            { 'path': "", component: ProductList },
            { 'path': 'products/:id/details', component: ProductDetails },
            { 'path': "cart", component: CartComponent },
            { 'path': "checkout", component: CheckoutComponent },
        ]
    },
    { 'path': "", redirectTo: 'shop', pathMatch: 'full' },
    { 'path': '**', component: NotFoundPage }
];
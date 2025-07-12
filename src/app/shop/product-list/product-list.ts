import { Component } from '@angular/core';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  imports: [
    ProductCard
  ],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {

  public products = [
    {
      id: 1,
      category: "Fruits",
      name: "Grapes",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      image: "img/fruite-item-5.jpg",
      price: "$4.99 / kg"
    },
    {
      id: 2,
      category: "Fruits",
      name: "Raspberry",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      image: "img/fruite-item-2.jpg",
      price: "$4.99 / kg"
    },
    {
      id: 3,
      category: "Fruits",
      name: "Apricots",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      image: "img/fruite-item-4.jpg",
      price: "$4.99 / kg"
    },
    {
      id: 4,
      category: "Fruits",
      name: "Banana",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      image: "img/fruite-item-3.jpg",
      price: "$4.99 / kg"
    },
    {
      id: 5,
      category: "Fruits",
      name: "Raspberries",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      image: "img/fruite-item-2.jpg",
      price: "$4.99 / kg"
    },
    {
      id: 6,
      category: "Fruits",
      name: "Oranges",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      image: "img/fruite-item-1.jpg",
      price: "$4.99 / kg"
    },

  ];
}

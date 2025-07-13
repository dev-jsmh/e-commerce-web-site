import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public products: any[] = [
    {
      id: 1,
      category: "Fruits",
      name: "Grapes",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt. Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt. Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt. Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt. Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      image: "img/fruite-item-5.jpg",
      price: "$4.99 / kg"
    },
    {
      id: 2,
      category: "Fruits",
      name: "Raspberry",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt. Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt. Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt. Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt. Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      image: "img/fruite-item-2.jpg",
      price: "$4.99 / kg"
    },
    {
      id: 3,
      category: "Fruits",
      name: "Apricots",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt. Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt. Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt. Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt. Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      image: "img/fruite-item-4.jpg",
      price: "$4.99 / kg"
    },
    {
      id: 4,
      category: "Fruits",
      name: "Banana",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt. Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt. Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt. Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt. Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      image: "img/fruite-item-3.jpg",
      price: "$4.99 / kg"
    },
    {
      id: 5,
      category: "Fruits",
      name: "Raspberries",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt. Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt. Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt. Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt. Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      image: "img/fruite-item-2.jpg",
      price: "$4.99 / kg"
    },
    {
      id: 6,
      category: "Fruits",
      name: "Oranges",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt. Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt. Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt. Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt. Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      image: "img/fruite-item-1.jpg",
      price: "$4.99 / kg"
    },

  ];

  constructor() { }

  public getAll() {
    return this.products;
  }

  public getById(id: number) {
    return this.products.find((product) => product.id == id);
  }

}

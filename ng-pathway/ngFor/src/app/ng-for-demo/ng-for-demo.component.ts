import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for-demo',
  templateUrl: './ng-for-demo.component.html',
  styleUrls: ['./ng-for-demo.component.css']
})
export class NgForDemoComponent {
  listofMenu: string[] = ["product", "services", "sale", "newarrival", "signup"]
  listofString: string[] = ["dataZap", "dataZen", "dataZense", "smart App Builder", "smartBots"];
  products = [
    {
      id: 1,
      name: "Nike React Infinity Run Flyknit",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: "NIKE",
      gender: "MEN",
      category: "RUNNING",
      size: [6, 7, 8, 9, 10],
      color: ["White", "Blue", "Black"],
      price: 160,
      discountPrice: 140,
      is_in_inventory: true,
      items_left: 3,
      image: "assets/images/shoe1.jpg",
      slug: "nike-react-infinity-run-flyknit"
    },
    {
      id: 2,
      name: "Nike React Miler",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: "NIKE",
      gender: "MEN",
      category: "RUNNING",
      size: [6, 7, 8, 9, 10],
      color: ["White", "Blue", "Black"],
      price: 130,
      is_in_inventory: false,
      items_left: 3,
      image: "assets/images/shoe2.jpg",
      slug: "nike-react-miler"
    },
    {
      id: 3,
      name: "Nike Air Zoom Pegasus 37",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: "NIKE",
      gender: "WOMEN",
      category: "RUNNING",
      size: [6, 7, 8, 9, 10],
      color: ["White", "Blue", "Black", "Brown", "Red"],
      price: 120,
      is_in_inventory: true,
      items_left: 3,
      image: "assets/images/shoe3.jpg",
      slug: "nike-air-zoom-pegasus-37"
    },
    {
      id: 4,
      name: "Nike Joyride Run Flyknit",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: "NIKE",
      gender: "WOMEN",
      category: "RUNNING",
      size: [6, 7, 8, 9, 10],
      color: ["White", , "Brown", "Red"],
      price: 180,
      discountPrice: 140,
      is_in_inventory: false,
      items_left: 3,
      image: "assets/images/shoe4.jpg",
      slug: "nike-joyride-run-flyknit"
    },
    {
      id: 5,
      name: "Nike Mercurial Vapor 13 Elite FG",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: "NIKE",
      gender: "WOMEN",
      category: "FOOTBALL",
      size: [6, 7, 8, 9, 10],
      color: ["White", "Blue", "Black"],
      price: 250,
      is_in_inventory: false,
      items_left: 3,
      image: "assets/images/shoe5.jpg",
      slug: "nike-mercurial-vapor-13-elite-fg"
    },
    {
      id: 6,
      name: "Nike Phantom Vision Elite Dynamic Fit FG",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: "NIKE",
      gender: "WOMEN",
      category: "FOOTBALL",
      size: [6, 7, 8, 9, 10],
      color: ["White", "Blue", "Black"],
      price: 150,
      is_in_inventory: true,
      items_left: 3,
      image: "assets/images/shoe6.jpg",
      slug: "nike-phantom-vision-elite-dynamic-fit-fg"
    },
  ]
}

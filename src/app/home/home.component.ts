import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  items = [ {
    imagepath:'../assets/shirt1.jpg',
    id:"Shirt-1",
    price:20,
    qty:0,
    text:"Add To Cart"
},
{
  imagepath:'../assets/shirt1.jpg',  
  id:"Shirt-2",
  price:30,
  qty:0,
  text:"Add To Cart"  
},
{
  imagepath:'../assets/shirt1.jpg',  
  id:"Shirt-3",
  price:10,
  qty:0,
  text:"Add To Cart"  
}
];

productresult = 0 ;
add(y){  

  if( y.text == 'Add To Cart')
  {
this.productresult = this.productresult + y.price * y.qty;
y.text="Remove Cart";

  }
  else
  {
    this.productresult = this.productresult - y.price * y.qty;
y.text="Add To Cart";
y.qty=0;

  }

}

  ngOnInit() {
  }

}

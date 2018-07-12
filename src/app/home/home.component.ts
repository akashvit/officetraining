import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  items = [ {
    id:"item1",
    price:20,
    qty:0,
    text:"Add To Cart"
},
{
  id:"item2",
  price:30,
  qty:2,
  text:"Add To Cart"  
},
{
  id:"item3",
  price:10,
  qty:3,
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

  }

}

  ngOnInit() {
  }

}

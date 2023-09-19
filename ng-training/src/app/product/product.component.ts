import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  products =[{id:1 , name:"Analog watch" , price:5000 ,color:"black" , availabel:"available"},
  {id:2 , name:"smart phone" , price:200 ,color:"black" , availabel:"available"},
  {id:3 , name:"apple iphone 12" , price:300 ,color:"pink" , availabel:"available"}
,{id:4 , name:"gigital watch" , price:900 ,color:"black" , availabel:"available"},
{id:5 , name:" watch" , price:5000 ,color:"black" , availabel:"not available"},
{id:6 , name:"machine" , price:5000 ,color:"red" , availabel:"available"}
,{id:7, name:"Analog watch" , price:5000 ,color:"black" , availabel:"available"}
,{id:8 , name:"Dell 27" , price:100 ,color:"blue" , availabel:"not available"},
{id:9 , name:"Door" , price:50 ,color:"green" , availabel:" not available"}]
}

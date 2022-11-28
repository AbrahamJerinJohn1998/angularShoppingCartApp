import { Component } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
pTitle=""
pPrice=""
pCategory=""
pDescription=""
pRating=""
readValue=()=>{
let data:any={"pTitle":this.pTitle,"pPrice":this.pPrice,"pCategory":this.pCategory,"pDescription":this.pDescription,"pRating":this.pRating}
console.log(data)
}
}

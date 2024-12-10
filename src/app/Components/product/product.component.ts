import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { IProductModel } from 'src/app/model/product.model';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  public productdetails:IProductModel[];
  constructor(public productService: ProductService, public router:Router){
    this.productdetails = [];
  }
  public ngOnInit(): void{
    this.productService.getProductFromJSONdataServer().subscribe((data:IProductModel[])=>{

      this.productdetails= data
      
    });
  }

  public navigateToProductDetails(product:IProductModel){
    this.router.navigate(['/product-details'],{
      queryParams:{
     name: product.name,
     description: product.description,
     price: product.price,
     image: product.image
     
    }
  })
}
public navigateToProductInfo(product:IProductModel){
  //query params
  // user?age=23
  this.router.navigate(['/product-info',product.name,product.description,product.price,product.image])
}
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProductModel } from 'src/app/model/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  public productdetails:IProductModel;
  public queryparams:any;
  constructor(private activateRoute:ActivatedRoute, public router:Router){
    this.productdetails= {} as IProductModel;
    this.queryparams ={}
  }
  public ngOnInit(): void{
    this.queryparams = this.activateRoute.snapshot.queryParams
    this.activateRoute.queryParamMap.subscribe((queryParams:any)=>{
      console.log(queryParams);
      this.productdetails.name=queryParams.get('name');
      this.productdetails.description=queryParams.get('description');
      this.productdetails.price=queryParams.get('price');
      this.productdetails.image=queryParams.get('image');
      
    })
    
  }
  public navigateToProduct(Product:IProductModel){
    this.router.navigate(['/product'])
  }
}

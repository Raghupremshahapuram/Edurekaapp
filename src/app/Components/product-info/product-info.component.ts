import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProductModel } from 'src/app/model/product.model';


@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent {

  public productinfo:IProductModel;
  public queryparams:any;
  constructor(private activateRoute:ActivatedRoute, public router:Router){
    this.productinfo= {} as IProductModel;
    this.queryparams ={}
  }
  public ngOnInit(): void{
    this.queryparams = this.activateRoute.snapshot.queryParams
    this.activateRoute.queryParamMap.subscribe((queryParams:any)=>{
      console.log(queryParams);
      this.productinfo.name=queryParams.get('name');
      this.productinfo.description=queryParams.get('description');
      this.productinfo.price=queryParams.get('price');
      this.productinfo.image=queryParams.get('image');
      
    })
    
  }

}

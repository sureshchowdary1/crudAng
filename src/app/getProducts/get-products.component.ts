import { Component, OnInit } from '@angular/core';
import * as fromProduct from "../store";
import { Store , select } from '@ngrx/store';
import { ProductsModel } from '../interface/products.model';

@Component({
    selector: 'products',
    templateUrl: './get-products.component.html'
})

export class GetProductComponent implements OnInit{
  products: ProductsModel[] = [];
  public isLoading: boolean;

  constructor(
    private _store: Store<fromProduct.ProductsState> ) {}
  
    ngOnInit() {
        this._store.dispatch(new fromProduct.GetProductLoad());
        const productsFun = this._store.pipe(select(fromProduct.allProducts));
    
        productsFun.subscribe(res => {
          this.isLoading = res.isLoading;
          this.products = res.data;
        });
      }
}
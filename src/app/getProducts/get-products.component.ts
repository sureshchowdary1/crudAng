import { Component, OnInit } from '@angular/core';
import * as fromProduct from "../store";
import { Store , select } from '@ngrx/store';
import { ProductsModel } from '../interface/products.model';

@Component({    // creating the component
    selector: 'products',   // tag 
    templateUrl: './get-products.component.html' // linking the html template
})

export class GetProductComponent implements OnInit{
  products: ProductsModel[] = [];
  public isLoading: boolean;

  constructor(
    private _store: /* To implement Store we should need to reate object */ Store<fromProduct.ProductsState> ) {}
  
    ngOnInit() {    // lifeCycle hook 
        // main logic
        this._store.dispatch(new fromProduct.GetProductLoad());       // here we are dispatching from component to action
        const productsFun = this._store.pipe(select(fromProduct.allProducts));
    
        productsFun.subscribe(res => {          // here we are receiving the data from action
          this.isLoading = res.isLoading;
          this.products = res.data;
        });
      }
}

// dispatch is like sending request
// subscribe is like geting back and holding the data
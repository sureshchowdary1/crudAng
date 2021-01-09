import { Component , OnInit} from '@angular/core'
import { FormGroup , FormControl, FormControlName} from '@angular/forms'
import * as fromProducts from '../store'
import {Store , select } from '@ngrx/store'
import { ProductsModel} from '../interface/products.model'

@Component({
    selector : 'postProduct',
    templateUrl : 'post-products.component.html'

})

export class PostProductComponent implements OnInit{
    FG = new FormGroup({
        p_id : new FormControl(666),
        p_name : new FormControl('p_six'),
        p_cost : new FormControl(6000)
    });
    isLoading : Boolean;

    constructor(private _store  :Store<fromProducts.ProductsState>){}

    ngOnInit(){

    }

    public onSubmit(){
        if(this.FG.value === ""){
            return false;
        } 
        
        this._store.dispatch(new fromProducts.PostProduct(this.FG.value))
        
        
        const ProductsFun = this._store.pipe(select(fromProducts.allProducts));

        ProductsFun.subscribe(res => {
            this.isLoading = res.isLoading;
        });
    }

}


import { Injectable } from '@angular/core'
import {Observable, of} from 'rxjs'
import {Actions , Effect , ofType} from '@ngrx/effects'
import {ProductsServices} from '../services/products.service'
import { Action } from '@ngrx/store'
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as fromProducts from '.'
import { ProductsModel} from '../interface/products.model'


@Injectable()

export class ProductsEffect{

    constructor( 
        private actionFun : Actions,
        private ProductsService : ProductsServices ){}

    @Effect()
        getProductFun: Observable<Action> = this.actionFun.pipe(
            ofType(fromProducts.ProductsActionType.GetProductLoad),
            mergeMap(
                () => 
                    this.ProductsService.GetProduts().pipe(
                        map((product : ProductsModel[]) =>{
                            return new fromProducts.GetProductLoadSuccess(product)
                        }),
                        catchError((error)=>
                            of(new fromProducts.GetProductLoadFail(error))
                        )
                    )
        ));

}
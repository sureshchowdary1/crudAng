
import { Injectable } from '@angular/core'        // to create service 
import {Observable, of} from 'rxjs'                 // to make async call
import {Actions , Effect , ofType} from '@ngrx/effects'  
import {ProductsServices} from '../services/products.service'  // importing services
import { Action } from '@ngrx/store'                
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as fromProducts from '.'                               // index.ts file
import { ProductsModel} from '../interface/products.model'          // importing model


@Injectable()

export class ProductsEffect{

    constructor( 
        private actionFun : Actions,        // Actions are declared to actionsFun variable
        private ProductsService : ProductsServices // ProductsServices is declare to variable ProductsService
        ){}

    @Effect()
        getProductFun/* created getProductsFun  */: Observable<Action> = this.actionFun.pipe/*To implement 3 actions we have pipe()*/(
            ofType/*GetUserLoad don't perform anything so we should need to use  " ofType "*/(fromProducts.ProductsActionType.GetProductLoad),
            mergeMap/*To merge functions*/(
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

    @Effect()
        postProductFun: Observable<Action> = this.actionFun.pipe(
            ofType(fromProducts.ProductsActionType.PostProduct),
            map(
                (action : fromProducts.PostProduct) => action.payload),
                mergeMap((product : ProductsModel)=> this.ProductsService.postProducts(product).pipe(
                    map((product : ProductsModel) => {
                        return new fromProducts.PostProductLoadSuccess(product);
                    }),
                    catchError((error)=>
                     of(new fromProducts.PostProductLoadFail(error)))
                    )
                ));

}
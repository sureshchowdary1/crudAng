import {ProductsModel} from '../interface/products.model'       // importing model
import { Action } from '@ngrx/store'                            // impoeting Action to perform Success or fail data payload
import {HttpErrorResponse} from '@angular/common/http'          //HttpErrorResponse used to handle the error response

export enum ProductsActionType{         // creating ProductsActionType using 'enum'
    GetProductLoad = '[Product] Get Products',              // those are the 3 actions we created 
    GetProductLoadSuccess = '[Product] Get Products Success',
    GetProductLoadFail = '[Product] Get Products Fail',
    
    
    PostProduct = '[Product] Post Products',             
    PostProductLoadSuccess = '[Product] Post Products Success',
    PostProductLoadFail = '[Product] Post Products Fail'


}

export class GetProductLoad implements Action{
    public readonly type = ProductsActionType.GetProductLoad;  // readonly file
}

export class GetProductLoadSuccess implements Action{
    public readonly type = ProductsActionType.GetProductLoadSuccess;

    constructor(public payload: ProductsModel[]){}  // if loaded successfully the payload object is created  for ProductsModel[]

}

export class GetProductLoadFail implements Action{
    public readonly type = ProductsActionType.GetProductLoadFail;

    constructor(public error: HttpErrorResponse){}  // if loaded failed then the error will excute
}

export class PostProduct implements Action{
    public readonly type = ProductsActionType.PostProduct;

    constructor(public payload: ProductsModel){}
}

export class PostProductLoadSuccess implements Action{
    public readonly type = ProductsActionType.PostProductLoadSuccess;

    constructor(public payload : ProductsModel){}
}

export class PostProductLoadFail implements Action{
    public readonly type = ProductsActionType.PostProductLoadFail;

    constructor(public error : HttpErrorResponse){}
}



export type ProductsActions = GetProductLoad | GetProductLoadSuccess | GetProductLoadFail | PostProduct | PostProductLoadSuccess | PostProductLoadFail ;  // importing functions using same name ProductsAction
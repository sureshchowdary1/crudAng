import {ProductsModel} from '../interface/products.model'
import { Action } from '@ngrx/store'
import {HttpErrorResponse} from '@angular/common/http'

export enum ProductsActionType{
    GetProductLoad = '[Product] Get Products',
    GetProductLoadSuccess = '[Product] Get Products Success',
    GetProductLoadFail = '[Product] Get Products Fail'


}

export class GetProductLoad implements Action{
    public readonly type = ProductsActionType.GetProductLoad;
}

export class GetProductLoadSuccess implements Action{
    public readonly type = ProductsActionType.GetProductLoadSuccess;

    constructor(public payload: ProductsModel[]){}
}

export class GetProductLoadFail implements Action{
    public readonly type = ProductsActionType.GetProductLoadFail;

    constructor(public error: HttpErrorResponse){}
}

export type ProductsActions = GetProductLoad | GetProductLoadSuccess | GetProductLoadFail ;
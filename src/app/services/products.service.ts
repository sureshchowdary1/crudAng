
import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import {ProductsModel} from '../interface/products.model'

@Injectable({
    providedIn : 'root'
})

export class ProductsServices{
    constructor( public http : HttpClient){}
    
    public GetProduts():Observable<ProductsModel[]>{
        return this.http.get<ProductsModel[]>("http://ngrx-env-1.eba-pzd5pgdu.us-east-1.elasticbeanstalk.com/fetch")
    }

    public postProducts(productsData): Observable<ProductsModel> {
        return this.http.post<ProductsModel>('http://ngrx-env-1.eba-pzd5pgdu.us-east-1.elasticbeanstalk.com/insert', productsData);
    }
    public updateProducts(productsData): Observable<ProductsModel> {
        return this.http.put<ProductsModel>('http://ngrx-env-1.eba-pzd5pgdu.us-east-1.elasticbeanstalk.com/update', productsData);
    }
    public delProducts(): Observable<ProductsModel> {
        return this.http.delete<any>('http://ngrx-env-1.eba-pzd5pgdu.us-east-1.elasticbeanstalk.com/remove');
    }
}
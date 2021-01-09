import { Component} from '@angular/core'

@Component({
    selector : 'mainpage',
    templateUrl : 'main-page.component.html'
   
})

export class mainComponent{
    
    GetPro(){
        let productsTable =  document.querySelector('products');
        productsTable.classList.toggle('show')
        
    }

    InsPro(){
        let postProductForm = document.querySelector('postProduct')
        postProductForm.classList.toggle('show')
        console.log('hello')
    }


}
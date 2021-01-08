import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {GetProductComponent} from './getProducts/get-products.component'
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducer } from './store/Preducer';
import { ProductsEffect } from './store/Peffects'
import { ProductsServices } from './services/products.service';
@NgModule({
  declarations: [
    AppComponent,
    GetProductComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({products : reducer}),
    EffectsModule.forRoot([ProductsEffect])

  ],
  providers: [ProductsServices],
  bootstrap: [GetProductComponent]
})
export class AppModule { }

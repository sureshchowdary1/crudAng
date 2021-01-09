
// selector receives the data(state) from reducer and hand over to component

import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductsState } from ".";  // from reducer

const getProductState = createFeatureSelector<ProductsState>('products'); // products is the key used to iterate in html

export const allProducts = createSelector/*to create the selector*/(getProductState, (state: ProductsState) => {

    // allProducts function returning the state
    
    return state;
});

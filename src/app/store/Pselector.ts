
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductsState } from ".";  // from reducer

const getProductState = createFeatureSelector<ProductsState>('products');

export const allProducts = createSelector/*to create the selector*/(getProductState, (state: ProductsState) => {

    // allUser function returning the state
    // selector receives the data(state) from reducer and hand over to component
    return state;
});

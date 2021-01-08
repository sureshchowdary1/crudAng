import { ProductsModel} from '../interface/products.model'
import {ProductsActions , ProductsActionType} from './Pactions'

export interface ProductsState {
    data: ProductsModel[];
    isLoading: boolean;
    message: string;
}

const initialState: ProductsState = {      // initial stae which is empty
    data: [],   /* empty */
    isLoading: false, /* disapper Spinner rotates */
    message: ''
};

export function reducer(state = initialState, action: ProductsActions): ProductsState{

    switch (action.type) {
        case ProductsActionType.GetProductLoad: {
            return {
                ...state,
                isLoading: true /*  Spinner rotates */
            }
        }

        case ProductsActionType.GetProductLoadSuccess: {
            return {
                ...state,
                data: action.payload,
                isLoading: false,  /* disapper Spinner rotates */
                message: 'Data fetch Successfully!'
            }
        }
        case ProductsActionType.GetProductLoadFail: {
            return {
                data: [],
                isLoading: false,  /* disapper Spinner rotates */
                message: 'Something went wrong!'
            }
        }

        default:
            return state;
    }
}
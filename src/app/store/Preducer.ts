import { ProductsModel} from '../interface/products.model'      // importing model and actions files
import {ProductsActions , ProductsActionType} from './Pactions'

export interface ProductsState {        // creating the model of the data as we need 
    data: ProductsModel[];          // this content will change according to the response of action
    isLoading: boolean;
    message: string;
}

const initialState: ProductsState = {      // initial state will be empty
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

        case ProductsActionType.PostProduct: {
            return {
                ...state,
                isLoading: true
            }
        }

        case ProductsActionType.PostProductLoadSuccess: {
            const updatedData = [...state['data']];
            updatedData.push(action.payload); // as i am using testing api, I have                                pushed the data to change the state. For real apis, there is no need to. You can simply return the data.
            return {
                ...state,
                data: updatedData,
                isLoading: false,
                message: 'Data posted Successfully!'
            }
        }
        case ProductsActionType.PostProductLoadFail: {
            return {
                data: [],
                isLoading: false,
                message: 'Something went wrong!'
            }
        }

        default:
            return state;
    }
}
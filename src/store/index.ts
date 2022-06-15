import { createStore } from 'redux';
import { ICartState } from './modules/cart/types';
import rootReducer from './modules/rootReducer.ts'
//import { composeWithDevTools } from '@reduxjs/toolkit/dist/devtoolsExtension';

export interface IState {
    cart: ICartState;
}

const store = createStore(
    rootReducer,
    //composeWithDevTools()
    );

export default store;
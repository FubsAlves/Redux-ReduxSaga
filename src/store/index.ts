import { createStore, applyMiddleware } from 'redux';
import { ICartState } from './modules/cart/types';
import rootReducer from './modules/rootReducer.ts'
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './modules/rootSaga.ts';
import { composeWithDevTools } from '@redux-devtools/extension';

export interface IState {
    cart: ICartState;
}

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store = createStore(
    rootReducer,
    
    composeWithDevTools(
        applyMiddleware( ...middlewares)
    )
    
    );

    sagaMiddleware.run(rootSaga);
export default store;
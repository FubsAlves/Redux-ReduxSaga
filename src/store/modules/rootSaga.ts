import { all } from 'redux-saga/effects';

import cart from './cart/sagas.ts';

export default function* rootSaga() {
    return yield all([
        cart,
    ])
}
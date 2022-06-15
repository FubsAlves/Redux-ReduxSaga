import { createStore } from 'redux';
import rootReducer from './modules/rootReducer.ts'

const store = createStore(rootReducer);

export default store;
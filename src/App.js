import React from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/index.ts';
import Catalog from './components/Catalog.tsx';
import Cart from './components/Cart.tsx';

export default function App() {
  return (
   <Provider store={store}>
     <Catalog />
     <Cart />
   </Provider>
  );
}



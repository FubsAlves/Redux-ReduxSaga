import React, { useCallback, useEffect, useState } from 'react';
import { IProduct } from '../store/modules/cart/types';
import api from '../services/api.ts';
import { useDispatch } from 'react-redux';
import { addProductToCart } from '../store/modules/cart/action.ts';

const Catalog: React.FC = () => {
        const dispatch = useDispatch();
        const [catalog, setCatalog] = useState<IProduct[]>([]);

        const handleAddProductToCart = useCallback((product: IProduct) => {
            dispatch(addProductToCart(product))
        }, [dispatch])

        useEffect(() => {
            api.get('/products').then(response => {
                setCatalog(response.data);
            })
        }, []);
    return (
        <main>
            <h1>Catalog</h1>
            {catalog.map(product => (
                <article key={product.id}>
                    <strong>{product.title}</strong> { " - "}
                    <span>{product.price}</span> { "  "}

                    <button 
                    type="button"
                    onClick={() => handleAddProductToCart(product)}
                    >Adicionar</button>
                </article>
            ) )}
        </main>
        
    );


}

export default Catalog;
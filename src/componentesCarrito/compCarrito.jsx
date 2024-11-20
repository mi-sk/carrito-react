import React from 'react'
import { CarritoInfo } from './carrito'
import '../productos.css'
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { useSelector, useDispatch } from 'react-redux';

export function Carrito() {
    const productosEnCarrito = useSelector(state => state.storeProducts.productos);

    return (
        <>
            <Provider store={store}>
                <section className='componenteCarrito'>
                    <h1>Carrito de compras</h1>
                    <section className='holderCarrito'>
                        {
                            productosEnCarrito.map(({ id, nombreProd, precioProd, quantity }) => (
                                <CarritoInfo
                                    key={id}
                                    id={id}
                                    nombreProd={nombreProd}
                                    precioProd={precioProd}
                                    quantity={quantity}
                                />
                            ))}
                    </section>
                </section>
            </Provider>
        </>
    );
}

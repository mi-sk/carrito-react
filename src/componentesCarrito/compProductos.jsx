import React from 'react'
import '../productos.css'
import { ProdInfo } from './cardProducto'
import { Provider } from 'react-redux';
import { store } from '../redux/store';

const productos = [
    {
        id: 1,
        imagenProd: 'https://unavatar.io/x/egg',
        nombreProd: 'Huevo',
        precioProd: 600,
    },
    {
        id: 2,
        imagenProd: 'https://unavatar.io/x/tomato',
        nombreProd: 'Tomate',
        precioProd: 500,
    },
    {
        id: 3,
        imagenProd: 'https://unavatar.io/x/ISaid801',
        nombreProd: 'Cerveza',
        precioProd: 3500,
    },
    {
        id: 4,
        imagenProd: 'https://unavatar.io/x/omega_nugget',
        nombreProd: 'Nugget',
        precioProd: 1100,
    }
];

export function Productos() {
    return (
        <>
            <Provider store={store}>
                <section className='componenteProductos'>
                    <h1>Productos</h1>
                    <section className='holderProductos'>
                        {
                            productos.map(({ id, imagenProd, nombreProd, precioProd }) => (
                                <ProdInfo
                                    key={id}
                                    imagenProd={imagenProd}
                                    nombreProd={nombreProd}
                                    precioProd={precioProd}
                                />
                            ))}
                    </section>
                </section>
            </Provider>
        </>
    );
}

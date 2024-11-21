import React from 'react'
import '../productos.css'
import { ProdInfo } from './cardProducto'
import { Provider } from 'react-redux';
import { store } from '../redux/store';

const productos = [
    {
        id: 1,
        imagenProd: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/1482da1c866b41898ffbae920024cffc_9366/Camiseta_Uniforme_de_Local_Alemania_22_Blanco_HJ9606_01_laydown.jpg',
        nombreProd: 'Camisa de alemania',
        precioProd: 130000,
    },
    {
        id: 2,
        imagenProd: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/48f0b9d7f70c4b9db560af4e009ea414_9366/Camiseta_Polo_Italia_Azul_HT2181_01_laydown.jpg',
        nombreProd: 'Camisa de italia',
        precioProd: 100000,
    },
    {
        id: 3,
        imagenProd: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0069678ad5e74fc88df94001daa1f54d_9366/Camiseta_Visitante_Seleccion_Colombia_24_Kids_Negro_IP8272_01_laydown.jpg',
        nombreProd: 'camisa de Locolombia',
        precioProd: 90000,
    },
    {
        id: 4,
        imagenProd: 'https://imbictoz.com/wp-content/uploads/2023/09/camiseta-peru-2023.jpeg',
        nombreProd: 'Camisa de cerru',
        precioProd: 85000,
    },
    {
        id: 5,
        imagenProd: 'https://diablografico.com/wp-content/uploads/2022/11/arg-8.jpeg',
        nombreProd: 'Camisa de che (argentina)',
        precioProd: 150000,
    },
    {
        id: 6,
        imagenProd: 'https://todosobrecamisetas.com/wp-content/uploads/camisetas-marathon-bolivia-copa-america-2021-1.jpg',
        nombreProd: 'camisa de las potencias navales (Bolivia)',
        precioProd: 110000,
    }
];

export function Productos() {
    return (
        <>
            <Provider store={store}>
                <section className='componenteProductos'>
                    <h1>Camisas deportivas</h1>
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

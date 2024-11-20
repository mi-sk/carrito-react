import { useState } from 'react';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from '../redux/actions';

    export function ProdInfo({ imagenProd, nombreProd, precioProd }) {
        const productos = useSelector(state => state.storeProducts.productos);
        const dispatch = useDispatch();
        
        const handleIncrement = () => {

            const existingProduct = productos.find(p => p.nomProd === nombreProd && p.precioProd === precioProd);

            let newProduct = {
                id: `${nombreProd}-${precioProd}`,
                nombreProd: nombreProd,
                precioProd: precioProd,
            };
            
            if (existingProduct) {
                newProduct = { ...existingProduct, quantity: existingProduct.quantity + 1 };
            }
            
            dispatch(increment(newProduct));
        };
        
        return (
            <div className='producto'>
                <div className='imagenProducto'>
                    <img src={imagenProd} alt="Imagen del producto" />
                </div>
                <div className='infoProducto'>
                    <div className='tituloProducto'> {nombreProd} </div>
                    <div className='precioProducto'><b> {precioProd}$ </b></div>
                </div>
                <div className='botones'> 
                    <button className='botonAgregar' onClick={handleIncrement}> Agregar al carrito </button>
                </div>
            </div>
        );
    }

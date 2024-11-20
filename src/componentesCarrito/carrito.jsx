import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement } from '../redux/actions'; 

export function CarritoInfo({ id, nombreProd, precioProd, quantity }) {
    const productosEnCarrito = useSelector(state => state.storeProducts.productos);

    const producto = productosEnCarrito.find(p => p.id === id);
    const dispatch = useDispatch();

    const handleDisminuir = () => {

        if (producto.quantity >= 1) {
            dispatch(decrement(id));
        }
    };
    
    if(producto.quantity < 1){
        return(null)
    } else {
        return (
            <div className='carrito-producto'>
                <div className='carrito-infoProducto'>
                    <div className='carrito-tituloProducto'> { producto.nombreProd } </div>
                    <div className='carrito-precioProducto'><b> { producto.precioProd * producto.quantity }$ </b></div>
                </div>
                <div className='carrito-botones'> 
                    <p>Cantidad: { producto.quantity } </p>
                    <button className='botonRemover' onClick={handleDisminuir}>Eliminar</button>
                </div>
            </div>
        );
    }
    
}

import { act } from 'react';
import { INCREMENT, DECREMENT } from './actions';

const initialState = {
  productos: []
};
export function carReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      const existingProduct = state.productos.find(p => p.id === action.payload.id);
      let newProducts;

      if (existingProduct) {
        // Si el producto existe, actualiza su cantidad
        newProducts = state.productos.map(
          p => p.id === action.payload.id
            ? { ...p, quantity: (p.quantity || 0) + 1 }  // Asegurarse que quantity sea un número
            : p
        );
      }
      else {
        // Si el producto no existe, lo agrega con quantity: 1
        newProducts = [...state.productos, { ...action.payload, quantity: 1 }];
      }

      return {
        ...state,  // Copia el resto del estado
        productos: newProducts  // Reemplaza el array de productos
      };
      case 'DISMINUIR_CANTIDAD':
            return {
                ...state,
                productos: state.productos.map(producto =>
                    producto.id === action.payload.id
                        ? { ...producto, quantity: producto.quantity - 1 }
                        : producto
                )
            };
    default:
      return state;
  }
}

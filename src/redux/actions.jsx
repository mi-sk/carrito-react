export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const increment = (newProduct) => ({
  type: INCREMENT,
  payload: newProduct,
});

// actions.js
export const decrement = (id) => ({
  type: 'DISMINUIR_CANTIDAD',
  payload: { id }
});

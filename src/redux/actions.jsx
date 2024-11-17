export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const increment = (newProduct) => ({
  type: INCREMENT,
  payload: newProduct,
});

export const decrement = (id) => ({
  type: 'DISMINUIR_CANTIDAD',
  payload: { id }
});

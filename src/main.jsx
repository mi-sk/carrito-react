import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Carrito } from './componentesCarrito/compCarrito.jsx'
import { Productos } from './componentesCarrito/compProductos.jsx'
import { store } from './redux/store.jsx'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <Carrito />
      <Productos />
    </Provider>,
)

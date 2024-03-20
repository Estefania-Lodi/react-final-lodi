import React from 'react';
import { useCart } from '../CartContext';
import { Link } from 'react-router-dom';
import productsData from '../ProductsData';
import './CartPage.css';

const CartPage = () => {
  const { cart, increaseQuantity, decreaseQuantity, clearCart, totalPrice, removeItem } = useCart();

  const handleIncreaseQuantity = (productId) => {
    const cartItem = cart.find((item) => item.id === productId);
    if (cartItem.quantity < 10) {
      increaseQuantity(productId);
    }
  };

  const handleDecreaseQuantity = (productId) => {
    decreaseQuantity(productId);
  };

  const handleRemoveItem = (productId) => {
    removeItem(productId);
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <h2 className="mb-4">Carrito de Compras</h2>
      <div className="mb-4">
        {cart.length === 0 ? (
          <div>
            <p>El carrito está vacío</p>
            <div className="d-grid gap-2">
              <Link to="/" className="btn btn-info custom-btn-green">Volver al inicio</Link>
            </div>
          </div>
        ) : (
          <div>
            <table className="cart-table">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Descripción</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                  <th>Total</th>
                  <th>Eliminar</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => {
                  const product = productsData.find((p) => p.id === item.id);
                  return (
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>{product.shortDescription}</td>
                      <td>${item.price}</td>
                      <td>
                        <button onClick={() => handleDecreaseQuantity(item.id)} className="btn btn-outline-secondary me-2 custom-btn-green" disabled={item.quantity === 1}>-</button>
                        {item.quantity}
                        <button onClick={() => handleIncreaseQuantity(item.id)} className="btn btn-outline-secondary ms-2 custom-btn-green">+</button>
                      </td>
                      <td>${item.price * item.quantity}</td>
                      <td>
                        <button onClick={() => handleRemoveItem(item.id)} className="btn btn-danger custom-btn-green">Eliminar</button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="d-grid gap-2">
              <button onClick={clearCart} className="btn btn-danger custom-btn-green">Vaciar carrito</button>
              <Link to="/checkout" className="btn btn-primary custom-btn-green" total={totalPrice}>Finalizar compra</Link>
              <Link to="/" className="btn btn-info mt-3 custom-btn-green">Volver al inicio</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;

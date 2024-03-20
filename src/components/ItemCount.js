import React, { useState } from 'react';
import { useCart } from './CartContext';

const ItemCount = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
  };

  return (
    <div className="d-flex align-items-center mb-2">
      <button onClick={decreaseQuantity} className="btn btn-outline-info btn-sm me-2">-</button>
      <span className="me-2">{quantity}</span>
      <button onClick={increaseQuantity} className="btn btn-outline-info btn-sm">+</button>

      <button
        onClick={handleAddToCart}
        className="btn btn-outline-info btn-sm ms-2"
        disabled={quantity < 1}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;

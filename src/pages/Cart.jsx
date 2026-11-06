import { useState } from "react";
import { pizzaCart } from "../pizzas";
import { formatPrice } from "../utils/formatPrice";

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  const increase = (id) => {
    setCart((items) =>
      items.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const decrease = (id) => {
    setCart((items) =>
      items
        .map((item) =>
          item.id === id ? { ...item, count: item.count - 1 } : item
        )
        .filter((item) => item.count > 0)
    );
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.count, 0);

  return (
    <main className="cart-page">
      <section className="cart">
        <h2>Detalles del pedido:</h2>
        <ul className="cart-list">
          {cart.map((item) => (
            <li className="cart-item" key={item.id}>
              <span className="cart-thumb">
                <img src={item.img} alt="" />
              </span>
              <span className="cart-name">{item.name}</span>
              <span className="cart-price">${formatPrice(item.price)}</span>
              <div className="cart-qty">
                <button
                  type="button"
                  className="btn btn-outline-danger"
                  onClick={() => decrease(item.id)}
                  aria-label={`Quitar una ${item.name}`}
                >
                  −
                </button>
                <span>{item.count}</span>
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  onClick={() => increase(item.id)}
                  aria-label={`Agregar una ${item.name}`}
                >
                  +
                </button>
              </div>
            </li>
          ))}
        </ul>
        <p className="cart-total">Total: ${formatPrice(total)}</p>
        <button type="button" className="btn btn-dark cart-pay">
          Pagar
        </button>
      </section>
    </main>
  );
};

export default Cart;

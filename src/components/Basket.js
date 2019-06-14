import React from 'react';

const Basket = () => (
  <section>
    <p>Shopping Cart</p>
    <ul>
      { 
      this.props.items && this.props.items.map((item, index)=> (
        <li key={item.index}>
        {item}
        <button>x</button>
        </li>
      )) }
    </ul>
  </section>
);

export default Basket;

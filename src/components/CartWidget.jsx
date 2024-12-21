import React from 'react';

const CartWidget = () => {
  const cartItemCount = 3; // Este valor puede ser dinámico según el carrito real.

  return (
    <div style={styles.cartWidget}>
      <span>Carrito ({cartItemCount} items)</span>
      <i style={styles.cartIcon} className="fa fa-shopping-cart"></i>
    </div>
  );
};

const styles = {
  cartWidget: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '18px',
    cursor: 'pointer',
  },
  cartIcon: {
    marginLeft: '10px',
    fontSize: '22px',
  },
};

export default CartWidget;

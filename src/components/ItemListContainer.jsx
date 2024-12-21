import React from 'react';

const ItemListContainer = ({ message }) => {
  return (
    <div style={styles.container}>
      <h2>{message}</h2>
      <div style={styles.productList}>
        <div className="product">Suplemento A</div>
        <div className="product">Suplemento B</div>
        <div className="product">Suplemento C</div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
  },
  productList: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '20px',
  },
};

export default ItemListContainer;
